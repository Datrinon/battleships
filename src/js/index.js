//js 
import component from "./component";
import Utility from "./utility";
import Ship from "./ship";
import Gameboard from "./gameboard";
import {GAME_STATE} from "./gamemanager";
import GameManager from "./gamemanager";
import Player from "./player";

//css
import "../css/reset.css";
import "../css/index.css";


/**
 * Creates elements for Battleship.
 */
class ElementProvider {

  #dialogHolder;
  #gameContainer;

  constructor(gameManager) {
    this.gameManager = gameManager;
  }

  header() {
    const titleContainer = component.div("title-container");
    const titleLabel = component.heading("Battleships", 1);
    const authorLabel = component.p("by Dan T.", 2);
  
    titleContainer.append(titleLabel, authorLabel);
  
    return titleContainer;
  }

  gameArea() {
    this.#gameContainer = component.div("game-area");
    const gameboardContainer = component.div("gameboard-area");
    const controlDialogContainer = component.div("controls-area"); 
    
    this.#gameContainer.append(gameboardContainer,controlDialogContainer);

    gameboardContainer.append(this.#gameboard("Player", "p1"), this.#gameboard("CPU", "p2"));

    controlDialogContainer.append(this.#dialog(), this.#shipPlacement());
    
  
    return this.#gameContainer;
  }

  /**
   * Generates a clickable grid based on the game manager's gameboard size.
   * @param {string} playerName : the name of the player; used as a class name to 
   * identify the gameboard.
   * @param {string} className : Additional class names to identify the gameboard by.
   */
  #gameboard(playerName, className) {
    const gameboard = component.div("gameboard", className);

    const gridSize = this.gameManager.players[0].gameboard.size;
    for (let i = 0; i < gridSize; i++) {
      let row = component.div("row", `row-${i}`);
      for (let j = 0; j < gridSize; j++ ) {
        let col = component.div("cell", "selectable");
        col.dataset.row = i;
        col.dataset.col = j;
        row.append(col);
      }

      gameboard.append(row);
    }

    // now, add grid system numbering.
    // for headers, the row is a separate div. 
    // then, column headers inserted before beginning of each row.
    const rowHeader = component.div("row-header");
    
    rowHeader.prepend(component.div("cell", "blank"));
    
    for (let i = 1; i <= gridSize; i++) {
      const numberCell = component.div("cell", "numbering");
      numberCell.textContent = i;
      // append to the top of the row.
      rowHeader.append(numberCell);
      gameboard.querySelector(`.row-${i-1}`).prepend(numberCell.cloneNode(true));
    }

    gameboard.prepend(rowHeader);

    // Apply headers for the gameboard
    gameboard.prepend(component.heading(playerName, 2, "gameboard-possessor"));

    return gameboard;
  }
  
  /**
   * Generates a dialog message, which is used to 
   * give the user directions on each phase of the game.
   */
  #dialog() {
    let dialogContainer = component.div("dialog");
    let dialogMsg = component.p("Welcome.", "dialog-msg");
    dialogContainer.append(dialogMsg);

    this.#dialogHolder = dialogContainer;

    return dialogContainer;
  }

  setDialog(message) {
    this.#dialogHolder.querySelector(".dialog-msg").textContent = message;
  }

  /**
   * Generates ships and lets them be dragged.
   */
  #shipPlacement() {
    let shipInventory = component.div("ship-placer");

    let header = component.heading("Select Ship", 3);
    let selection = component.div("ship-selection");

    this.gameManager.shipLengths.forEach((shipLen, index) => {
      let ship = component.div("ship", "draggable");
      ship.id = `player-ship${index}`;
      ship.setAttribute("draggable", "true");
      for (let i = 0; i < shipLen; i++) {
        let cell = component.div("cell");
        ship.append(cell);
      }

      selection.append(ship);
    })

    this.#enableDragging();
    shipInventory.append(header, selection);

    return shipInventory;
  }

  #enableDragging() {
    window.addEventListener("dragstart", (e) => {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("text/plain", e.target.id);
    });


    this.#gameContainer.querySelectorAll(".p1.gameboard .row").forEach(row => {
      console.log(row);
      // need to implement this for a drop zone -- prevent default of not allowing drop zone.
      row.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      })

      row.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log(e.target);
        const id = e.dataTransfer.getData("text/plain");
        console.log(id);
        e.target.append(document.querySelector(`#${id}`));
      });


    });
  }
}


(function main(){
  const body = document.body;
  
  const p1 = new Player("Commander Blue", false);
  const p2 = new Player("Commander Red", true);

  const game = new GameManager([p1, p2]);
  const page = new ElementProvider(game);

  const header = page.header();
  const gameArea = page.gameArea();

  page.setDialog(GAME_STATE.gamePrompt);

  body.append(header, gameArea);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/