//js 
import component from "./component";
import Utility from "./utility";
import Ship from "./ship";
import Gameboard from "./gameboard";
import GameManager from "./gamemanager";
import Player from "./player";

//css
import "../css/reset.css";
import "../css/index.css";


/**
 * Creates elements for the web app.
 */
class ElementProvider {

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
    const gameContainer = component.div("game-area");
    const gameboardContainer = component.div("gameboard-area");
    const controlDialogContainer = component.div("controls-area"); 
  
    gameboardContainer.append(this.#gameboard("p1"), this.#gameboard("p2"));
    
    gameContainer.append(gameboardContainer,controlDialogContainer);
  
    return gameContainer;
  }

  /**
   * Generates a clickable grid based on the game manager's gameboard size.
   * @param {string} playerName : the name of the player; used as a class name to 
   * identify the gameboard.
   */
  #gameboard(playerName) {
    const gameboard = component.div("gameboard", playerName);

    const gridSize = this.gameManager.players[0].gameboard.size;
    for (let i = 0; i < gridSize; i++) {
      let row = component.div(`row-${i}`);
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


    return gameboard;
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

  body.append(header, gameArea);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/