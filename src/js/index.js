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
    
    this.#enableDragging();
  
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
    const gameboardGrid = component.div("gameboard-grid");

    const gridSize = this.gameManager.players[0].gameboard.size;
    const numberCell = component.div("cell", "numbering");

    gameboardGrid.prepend(component.div("cell", "blank"));
  
    // create row numbering
    for (let i = 0; i < gridSize; i++) {
      numberCell.textContent = i+1;
      gameboardGrid.append(numberCell.cloneNode(true));  
    }

    // create column numbering and cells
    for (let i = 0; i < gridSize; i++) {
      numberCell.textContent = i+1;

      gameboardGrid.append(numberCell.cloneNode(true));
      
      for (let j = 0; j < gridSize; j++) {
        let cell = component.div("cell", "selectable");
        cell.dataset.row = i;
        cell.dataset.col = j;
        gameboardGrid.append(cell);
      }
    }

    gameboard.append(gameboardGrid);

    // Apply headers for the gameboard
    gameboard.prepend(component.heading(playerName, 2, "gameboard-owner"));

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

    shipInventory.append(header, selection);

    return shipInventory;
  }

  #enableDragging() {
    const removeDragGuide = () => {
      document.querySelectorAll(".p1.gameboard .selectable")
      .forEach(cell => {
        cell.classList.remove("valid-drag");
      });
    }

    let currentDraggedLength;

    this.#gameContainer.querySelectorAll(".draggable").forEach(ship => {
      ship.addEventListener("dragstart", (e) => {
        console.log("Dragging...")
        console.log(e.target);
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", e.target.id);
  
        currentDraggedLength = e.target.childElementCount;
        // blank image
        let img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
      });
    });



    // all cells that are selectable are droppable areas.
    this.#gameContainer.querySelectorAll(".p1.gameboard .selectable").forEach(cell => {

      // when dragging over, show valid-drag if there's sufficient space.
      // TODO do not allow "valid-drag" for occupied cells. How to indicate occupied cells?
      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        let hoverCell = e.target;
        let row = hoverCell.getAttribute("data-row");
        
        let cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
        let index = cells.indexOf(hoverCell);

        if (index + currentDraggedLength <= cells.length) {
          for (let i = index; i < index + currentDraggedLength; i++) {
            // not a valid placement.
            if (cells[i].classList.contains("occupied")) {
              removeDragGuide();
              return;
            }
            cells[i].classList.add("valid-drag");
          }
        }
      });

      // when the drag element leaves droppable zone, remove all valid drag
      // it'll just be recreated by valid-drag.
      cell.addEventListener("dragleave", removeDragGuide);

      cell.addEventListener("drop", (e) => {
        // only when the area is a valid-drag do we add it in. otherwise, nope.
        if (e.target.classList.contains("valid-drag")) {
          e.preventDefault();
          removeDragGuide();

          const id = e.dataTransfer.getData("text/plain");

          // before moving the ship, determine if it has been placed already...
          let lastPlacedLocation = document.querySelector(`.selectable #${id}`)
          
          if(lastPlacedLocation !== null) {
            lastPlacedLocation = lastPlacedLocation.parentNode;
            // remove occupied marking from those cells.
            let row = lastPlacedLocation.getAttribute("data-row");
            let cells = Array.from(document
              .querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
            let index = cells.indexOf(lastPlacedLocation);

            // color the subsequent cells.
            for (let i = index; i < index + currentDraggedLength; i++) {
              cells[i].classList.remove("occupied");
            }
          }
              
          let placedCell = e.target;
          // move the ship
          document.querySelector(`#${id}`).classList.add("ship-placed");
          placedCell.append(document.querySelector(`#${id}`));

          // get the row, index, and place thereafter of the placed cell.
          let row = placedCell.getAttribute("data-row");

          let cells = Array.from(document
                .querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
          let index = cells.indexOf(placedCell);

          // color the subsequent cells.
          for (let i = index; i < index + currentDraggedLength; i++) {
            cells[i].classList.add("occupied");
          }

        }
      });

      this.#gameContainer.querySelector(".ship-placer")
          .addEventListener("dragover", (e) => {
            e.preventDefault();
          });

      this.#gameContainer.querySelector(".ship-placer")
          .addEventListener("drop", (e) => {
        
            e.preventDefault();

            const id = e.dataTransfer.getData("text/plain");
            document.querySelector(`#${id}`).classList.remove("ship-placed");
            e.target.append();
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