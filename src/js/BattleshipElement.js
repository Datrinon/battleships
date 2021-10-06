import component from "./component";
import Utility from "./utility";

import logo from '../images/battleship.png';
import { GAME_STATE } from "./gamemanager";
import { setName } from "./ship";
/**
 * Creates elements for Battleship.
 */
 export class BattleshipElements {

  #dialogHolder;
  #gameContainer;
  gameManager;
  #currentDraggedShipId;
  #currentDraggedLength;

  constructor(gameManager) {
    this.gameManager = gameManager;
  }

  header() {
    const heading = Utility.createElement("header", "header");
    const titleContainer = component.div("title-container");
    const titleLabel = component.heading("Battleships", 1, "title");
    const titleIcon = component.img(logo, "logo-pic");
    const authorLabel = component.p("by Dan T.", "author");

    titleContainer.append(titleIcon, titleLabel);

    heading.append(titleContainer, authorLabel);

    return heading;
  }

  gameArea() {
    this.#gameContainer = component.div("game-area");
    const gameboardContainer = component.div("gameboard-area");
    const dialogContainer = component.div("dialog-area");
    const menuArea = component.div("menu-area");
    const summaryArea = component.div("summary-area", "no-display");

    this.#gameContainer.append(dialogContainer, gameboardContainer, menuArea, summaryArea);

    gameboardContainer.append(this.#gameboard("Player", "p1"), this.#gameboard("CPU", "p2", "no-display"));

    dialogContainer.append(this.#dialog());

    menuArea.append(this.#shipPlacement());
    menuArea.append(this.#startGamePrompt());

    this.generateDraggableShips();
    this.#enableDragAndDropOnCell();

    summaryArea.append(this.#summary());

    return this.#gameContainer;
  }

  /**
   * Generates a clickable grid based on the game manager's gameboard size.
   * @param {string} playerName : the name of the player; used as a class name to 
   * identify the gameboard.
   * @param {string[]} classNames : Additional class names to identify the gameboard by.
   */
  #gameboard(playerName, ...classNames) {
    const gameboard = component.div("gameboard", ...classNames);
    const gameboardGrid = component.div("gameboard-grid");

    const gridSize = this.gameManager.players[0].gameboard.size;
    const numberCell = component.div("cell", "numbering");
    const numberText = component.p("", "number-label");

    const shipRoster = component.div("ship-roster", "no-display");
    const shipRosterLabel = component.p("status", "ship-roster-header");

    numberCell.append(numberText);
    gameboardGrid.prepend(component.div("cell", "blank"));

    // create row numbering
    for (let i = 0; i < gridSize; i++) {
      numberText.textContent = i + 1;
      gameboardGrid.append(numberCell.cloneNode(true));
    }

    // create column numbering and cells
    for (let i = 0; i < gridSize; i++) {
      numberText.textContent = i + 1;
      gameboardGrid.append(numberCell.cloneNode(true));

      for (let j = 0; j < gridSize; j++) {
        let cell = component.div("cell", "selectable");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.dataset.ship = "";
        gameboardGrid.append(cell);
      }
    }

    gameboard.append(gameboardGrid);

    // Apply headers for the gameboard
    gameboard.prepend(component.heading(playerName, 2, "gameboard-owner"));

    // Apply roster.
    shipRoster.append(shipRosterLabel);
    gameboard.append(shipRoster);
    

    return gameboard;
  }

  /**
   * Generates a dialog message, which is used to 
   * give the user directions on each phase of the game.
   */
  #dialog() {
    let dialogContainer = component.div("dialog");
    let dialogMsg = component.p(GAME_STATE.welcomePrompt, "dialog-msg");
    let subDialog = component.div("subdialog-area");
    
    dialogContainer.append(dialogMsg, subDialog);

    this.#dialogHolder = dialogContainer;

    return dialogContainer;
  }

  /**
   * Set the dialog for the battleship game. Preferably, use messages from the
   * gamemanager GAME_STATE object.
   * @param {} message 
   */
  setDialog(message) {
    let msg = document.querySelector(".dialog-msg");
    msg.textContent = message;
    Utility.triggerAnimation(msg, "appear-from-bottom");
  }

  /**
   * Set subdialog in the dialog area.
   * @param  {string[]} messages 
   */
  setSubDialog(...messages) {
    const sda = document.querySelector(".subdialog-area");
    Utility.removeAllChildren(sda);

    messages.forEach(msg => {
      let p = component.p(msg, "subdialog-message");
      document.querySelector(".subdialog-area").append(p);
      Utility.triggerAnimation(p, "appear-from-right");
    });
  }

  /**
   * Generates an inventory of ships and lets them be dragged by the player.
   */
  #shipPlacement() {
    let shipInventory = component.div("ship-placer");

    let header = component.heading("Your Armada:", 3, "ship-placer-label");
    let selection = component.div("ship-selection");

    shipInventory.append(header, selection);

    return shipInventory;
  }

  /** 
   * Regenerate draggable ships within .ship-selection.
   */
  generateDraggableShips() {
    const container = this.#gameContainer.querySelector(".ship-selection")
    this.gameManager.shipLengths.forEach((shipLen, index) => {
      let ship = component.div("ship", "draggable");
      ship.id = `player-ship${index}`;
      ship.setAttribute("draggable", "true");
      for (let i = 0; i < shipLen; i++) {
        let cell = component.div("cell");
        ship.append(cell);
      }

      ship.addEventListener("dragstart", this.#shipOnDragStart.bind(this));
      ship.addEventListener("dragend", this.#shipOnDragEnd.bind(this));

      ship.dataset.name = setName(shipLen);

      container.append(ship);
    })
  }

  /**
   * Display drop guides when a ship is being dragged over a gameboard.
   * @param {Event} e - drag over event.
   */
  #displayDropGuides(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    let hoverCell = Utility.getMatchingParent(e.target, ".selectable");

    document.querySelector(`#${this.#currentDraggedShipId}`).classList.add("no-display");

    if (document.querySelector(`#${this.#currentDraggedShipId}`).classList.contains("vertical")) {
      // apply vertical guide.
      let col = hoverCell.dataset.col;
      let cellsCol = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
      let index = cellsCol.indexOf(hoverCell);

      if (index + this.#currentDraggedLength <= cellsCol.length) {
        for (let i = index; i < index + this.#currentDraggedLength; i++) {
          // not a valid placement.
          if (cellsCol[i].classList.contains("occupied")
            && cellsCol[i].dataset.ship !== this.#currentDraggedShipId) {
            this.#removeDragGuide();
            return;
          }
          cellsCol[i].classList.add("valid-drag");
        }
      }
    } else {
      // apply horizontal guide
      let row = hoverCell.dataset.row;
      let cellsRow = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
      let index = cellsRow.indexOf(hoverCell);

      // console.log("hovering over index: " + index);

      if (index + this.#currentDraggedLength <= cellsRow.length) {
        for (let i = index; i < index + this.#currentDraggedLength; i++) {
          // not a valid placement.
          if (cellsRow[i].classList.contains("occupied")
            && cellsRow[i].dataset.ship !== this.#currentDraggedShipId) {
            this.#removeDragGuide();
            return;
          }

          cellsRow[i].classList.add("valid-drag");
          // console.log({index, currentDraggedLength, i});
        }
      }
    }
  }

  /**
   * Remove drag guide.
   */
  #removeDragGuide() {
    document.querySelectorAll(".p1.gameboard .selectable")
    .forEach(cell => {
      cell.classList.remove("valid-drag");
    });
  }

  /**
   * After the user drops the ship, places the ship.
   * @param {Event} e - Drop event.
   * @returns 
   */
  #placeShipOnDrop(e) {
    document.querySelector(`#${this.#currentDraggedShipId}`).classList.remove("no-display");
    // only when the area is a valid-drag do we add it in. otherwise, nope.
    if (!e.target.classList.contains("valid-drag")) {
      return;
    }

    e.preventDefault();
    this.#removeDragGuide();

    const id = e.dataTransfer.getData("text/plain");

    // before moving the ship, determine if it has been placed already... 
    // this is true if the ship is inside a selectable cell.
    let lastPlacedLocation = document.querySelector(`.selectable #${id}`);

    // if so we need to remove occupied from such cells.
    if (lastPlacedLocation !== null) {
      let cells;
      let vertical = lastPlacedLocation.classList.contains("vertical");

      // parentNode is the cell.
      lastPlacedLocation = lastPlacedLocation.parentNode;

      if (vertical) {
        let col = lastPlacedLocation.dataset.col;
        cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
      } else {
        // remove occupied marking from those cells.
        let row = lastPlacedLocation.dataset.row;
        cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
      }

      let index = cells.indexOf(lastPlacedLocation);

      // color the subsequent cells.
      for (let i = index; i < index + this.#currentDraggedLength; i++) {
        cells[i].classList.remove("occupied");
        cells[i].dataset.ship = "";
      }
    }

    let placedCell = e.target;
    // move the ship
    document.querySelector(`#${id}`).classList.add("ship-placed");
    placedCell.append(document.querySelector(`#${id}`));

    let vertical = document.querySelector(`#${id}`).classList.contains("vertical");
    let cells;

    if (vertical) {
      let col = placedCell.dataset.col;
      cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
    } else {
      // get the row, index, and place thereafter of the placed cell.
      let row = placedCell.dataset.row;
      cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
    }

    let index = cells.indexOf(placedCell);

    // color the subsequent cells.
    for (let i = index; i < index + this.#currentDraggedLength; i++) {
      cells[i].classList.add("occupied");
      cells[i].dataset.ship = id;
    }

    // allow the ship to be rotated.
    this.#allowPlacedShipRotation();
  }

  /**
   * Contains a collection of callbacks to enable drag 'n' drop on the gameboard with rotation.
   * Works with the drag and drop API, so it works to assign callbacks to the 
   * draggable items, and all the droppable zone it pertains to. In this case,
   * the ships are the draggables, and the drop zones are all the cells of 
   * player 1's gameboard.
   */
  #enableDragAndDropOnCell() {
    const self = this;
    // this.addShipDragHandlers();

    // all cells that are selectable are droppable areas.
    this.#gameContainer.querySelectorAll(".p1.gameboard .selectable").forEach(cell => {

      cell.addEventListener("dragover", self.#displayDropGuides.bind(self));
      // when the drag element leaves droppable zone, remove all valid drag
      // it'll just be recreated by valid-drag.
      cell.addEventListener("dragleave", self.#removeDragGuide);
      cell.addEventListener("drop", self.#placeShipOnDrop.bind(self));
    });
  }

  #shipOnDragStart(e) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", e.target.id);

    this.#currentDraggedLength = e.target.childElementCount;
    this.#currentDraggedShipId = e.target.id ?? e.target.dataset.ship;
    // blank image
    let img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  #shipOnDragEnd() {
    document.querySelector(`#${this.#currentDraggedShipId}`)
        .classList.remove("no-display");
  }
  
  /**
   * Allows for ships to be rotated; this is invoked each time a ship is placed,
   * to allow ships, on the gameboard, to be rotated.
   */
  #allowPlacedShipRotation() {
    let gridSize = this.gameManager.players[0].gameboard.grid.length;
    // allow rotation of placed ships
    document.querySelectorAll(".ship.draggable.ship-placed").forEach(ship => {
      if (ship.onclick === null) {
        ship.onclick = () => {
          let verticalOn = ship.classList.contains("vertical");
          let cell = ship.parentNode;
          let shipLength = ship.childElementCount;

          let rowIndex = parseInt(cell.dataset.row);
          let colIndex = parseInt(cell.dataset.col);

          console.log({ rowIndex, shipLength, gridSize });

          if (rowIndex + shipLength > gridSize || colIndex + shipLength > gridSize) {
            return;
          }

          // check if any ships are in the way of the rotation.
          for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {

            let cells = Array.from(document
              .querySelectorAll(`.p1.gameboard [data-row="${i}"]`));

            for (let j = colIndex; j < colIndex + shipLength; j++) {
              if (cells[j].classList.contains("occupied") && cells[j].dataset.ship !== ship.id) {
                // do not proceed.
                return;
              }
            }
          }

          // make sure there's enough space to move it vertically, based on the ship length.
          // 1 no ships in the way
          // 2.within the bounds of the gameboard.
          // only then do you allow vertical class.
          console.log(cell);

          if (verticalOn) {
            // vertical -> horizontal occupied
            for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${i}"][data-col="${colIndex}"]`);
              // strip vertical occupied
              cell.classList.remove("occupied");
              cell.dataset.ship = "";
            }

            for (let i = colIndex + 1; i < colIndex + shipLength; i++) {
              // add horizontal occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${rowIndex}"][data-col="${i}"]`);
              cell.classList.add("occupied");
              cell.dataset.ship = ship.id;
            }
          } else {
            // horizontal -> vertical occupied
            for (let i = colIndex + 1; i < colIndex + shipLength; i++) {
              // remove horizontal occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${rowIndex}"][data-col="${i}"]`)
              cell.classList.remove("occupied");
              cell.dataset.ship = "";
            }

            for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {
              // add vertical occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${i}"][data-col="${colIndex}"]`)
              cell.classList.add("occupied");
              cell.dataset.ship = ship.id;
            }
          }

          // toggle vertical for the view
          ship.classList.toggle("vertical");
          // then, alter the occupied class.

        };
      }
    });
    // disable rotation for ships that are not placed.
    document.querySelectorAll(".ship.draggable:not(.ship-placed)").forEach(ship => {
      if (ship.onclick !== null) {
        ship.onclick = null;
      }
    });

  }

  /**
   * Places ships on the gameboard given coordinates. Useful for AI.
   * 
   * @param {number} length 
   * @param {number} row 
   * @param {number} col 
   * @param {boolean} vertical 
   * @param {boolean} player2 - Place ships on player 2's gameboard?
   * @param {string} id - the ID the ship should be identified by.
   */
  static placeShipViaCoordinate(length, row, col, vertical, player2 = true, id) {
    console.log({length, row, col, vertical, player2, id});
    let selector;
    let gameboard; 
    let cpuTag = "cpu-ship-placed";

    if (player2) {
      selector = ".p2.gameboard"
    } else {
      selector = ".p1.gameboard"
    }

    gameboard = document.querySelector(`${selector}`);

    let originCell = gameboard.querySelector(`.selectable[data-row='${row}'][data-col='${col}']`);
    originCell.dataset.ship = id;


    if (vertical) {
      let rows = Array.from(gameboard.querySelectorAll(`.selectable[data-col="${col}"]`));

      for (let i = row; i < row + length; i++) {
        rows[i].classList.add("occupied", cpuTag);
        rows[i].dataset.ship = id;

        switch(i) {
          case row: // start
            rows[i].classList.add("ship-start-vertical");
            break;
          case row + length - 1: // end
            rows[i].classList.add("ship-end-vertical");
            break;
          default: // mid
            rows[i].classList.add("ship-middle-vertical");
            break;
        }
      }
    } else {
      let cols = Array.from(gameboard.querySelectorAll(`.selectable[data-row="${row}"]`));
      
      for (let i = col; i < col + length; i++) {
        cols[i].classList.add("occupied", cpuTag);
        cols[i].dataset.ship = id;

        switch(i) {
          case col: // start
            cols[i].classList.add("ship-start-horizontal");
            break;
          case col + length - 1: // end
            cols[i].classList.add("ship-end-horizontal");
            break;
          default: // mid
            cols[i].classList.add("ship-middle-horizontal");
            break;
        }
      }
    }
  }

  /**
   * Asks user for their name and to start the game... only when the ship placement container is empty
   * will the start game button unlock.
   */
  #startGamePrompt() {
    const self = this;
    const startGameForm = Utility.createElement("form", "start-game-prompt");
    const [playerNameLabel, playerNameField] = component.formInput("Name: ", "input", "p1-name", "p1-name");
    const startGameButton = component.button("Start Game!", "start-game-button");

    playerNameField.value = "Commander Blue";
    playerNameField.required = true;
    playerNameField.placeholder = "Enter your name here";

    startGameForm.append(playerNameLabel, playerNameField, startGameButton);

    startGameButton.disabled = true;

    startGameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      self.gameManager.startGame();
    });

    const DOMObserver = new MutationObserver(this.#checkAllShipsPlaced);
    DOMObserver.observe(this.#gameContainer.querySelector(".ship-selection"), {childList: true});

    return startGameForm;
  }

  /**
   * Checks if all ships been placed? If so, unlocks the game button. Used with
   * MutationObserver.
   */
  #checkAllShipsPlaced(mutated) {
    let shipsRemaining = mutated[0].target.childElementCount;
    if (shipsRemaining > 0) {
      document.querySelector(".start-game-button").disabled = true;
    } else {
      document.querySelector(".start-game-button").disabled = false;
    }
  }

  /**
   * Shows a summary. To be used after the game has finished.
   */
  #summary(...classNames) {
    const summary = component.div("summary-screen", ...classNames);
    const victoryMsg = component.p("Winner", "victory-message");
    const winner = component.p("%", "winner");

    const statsContainer = component.div("summary-statistics");
    const statsAccuracy = component.p("Accuracy", "accuracy");
    const p1AccContainer = component.div("acc-container");
    const p2AccContainer = component.div("acc-container");
    const p1AccLabel = component.p(this.gameManager.players[0].name, "metric-player-name");
    const p2AccLabel = component.p(this.gameManager.players[1].name, "metric-player-name");
    const p1Accuracy = component.span("--%", "p1", "accuracy-metric");
    const p2Accuracy = component.span("--%", "p2", "accuracy-metric");

    const playAgain = component.button("Play Again", "play-again");

    victoryMsg.append(winner);

    p1AccContainer.append(p1AccLabel, p1Accuracy);
    p2AccContainer.append(p2AccLabel, p2Accuracy);

    statsContainer.append(statsAccuracy, p1AccContainer, p2AccContainer);

    summary.append(victoryMsg, winner, statsContainer, playAgain);
      
    return summary;
  }

  /**
   * Enumerate ship roster for each user's gameboard. These ships will be 
   * shown as red when destroyed.
   */
  enumeratePlayerShipRoster() {
    let p1Gameboard = document.querySelector(".p1.gameboard");
    let roster = p1Gameboard.querySelector(".ship-roster");

    for (let i = 0; i < this.gameManager.shipLengths.length; i++) {
      let ship = p1Gameboard.querySelector(`#player-ship${i}`);
      let shipName = component.p(ship.dataset.name, "ship-name");

      shipName.dataset.ship = ship.parentNode.dataset.ship;
      roster.append(shipName);

    }
  }
}