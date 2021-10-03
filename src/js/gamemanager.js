import { BattleshipElements } from "./BattleshipElement";
import Gameboard from "./gameboard";
import { CPU_STATE } from "./player";

/**
 * Manages a game session for battleship. Keeps track of players.
 * Can start, end, and reset the game.
 */

export const GAME_STATE = {
  p1turn: "Player 1's turn",
  p2turn: "Player 2's turn",
  ended: "Game ended.",
  p1victory: "Player 1 wins.",
  p2victory: "Player 2 wins.",
  restart: "Restarting game...",
  playing: "Game start!",
  gamePrompt: "Welcome. Drag ships onto gameboard. Click (when placed): Rotate.",
  cpuShipSunk: "A ship of the CPU's was sunk!",
  playerShipSunk: "A ship of the player's was sunk!"
};


export default class GameManager {
  
  static #instance;

  /**
   * The players involved in the game.
   */
  players;

  /**
   * Is it player 1's turn? 
   */
  p1turn;

  /**
   * An array of the lengths of each ship that the player will have in their arsenal.
   * @type {number[]}
   */
  shipLengths;
  
  /**
   * Create an instance of the game. Assigns CPU as player 2.
   * @param {Player[]} players - An array of the players in the game.
   * @param {boolean} p1start - Should player 1 start first? True by default.
   * @returns 
   */
  constructor(player1, player2, p1start = true, shipLengths = [2]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = player2.cpu ? [player1, player2] : [player2, player1];
    this.p1turn = p1start;
    this.shipLengths = shipLengths;
  }

  /**
   * Start the game. Has the CPU place ships, issues a start message on the view,
   * disables all handlers of all ships, and then has one of the players select a move.
   * Makes all cells "attackable."
   */
  startGame() {
    document.querySelectorAll(".ship").forEach(ship => {
      ship.onclick = null;
      ship.draggable = false;
    });

    this.players.forEach(player => {
      if (player.cpu) {
        this.#cpuPlaceShips(player);
      }
    });
    
    (() => {
      return new Promise((resolve) => {
        BattleshipElements.setDialog(GAME_STATE.playing);
        setTimeout(() => {
          if (GameManager.#instance.p1turn) {
            return resolve(GAME_STATE.p1turn);
          } else {
            return resolve(GAME_STATE.p2turn);
          }
          }, 750);
      });
    })().then((result) => {
      BattleshipElements.setDialog(result);
      document.querySelector(".gameboard-area").classList.add("game-active");
      document.querySelectorAll(".selectable").forEach(cell => {
        cell.classList.add("attackable");
      });

      const self = this;
      document.querySelectorAll(".p2.gameboard .attackable").forEach(cell => {
        cell.addEventListener("click", (e) =>{
          if (self.p1turn) {
            self.#playerAttack.call(this, e, self.players[0], self.players[1]);
            self.#cpuAttack.call(this);
          }
          
        });
      })
    })
  }

  /**
   * Attack a player.
   * 
   * @param {Event} e - Event which the handler captures.
   * @param {Player} attacker - The attacking player.
   * @param {Player} attacked - The player receiving the attack.
   * @returns 
   */
  #playerAttack(e, attacker, attacked) {
    if (e.currentTarget.classList.contains("attacked")) {
      console.log("This cell has already been attacked!");
      return;
    } else {
      e.currentTarget.classList.add("attacked");
    }

    const row = parseInt(e.currentTarget.dataset.row);
    const col = parseInt(e.currentTarget.dataset.col);

    console.log(row, col);
    let result = attacker.attack(attacked, row, col);
    switch(result) {
      case 1: 
        console.log("It's a hit!");
        break;
      case 0:
        console.log("It's a miss!");
        break;
    }
    this.p1turn = false; // CPU must make a successful move before the player moves again.
  }

  #cpuAttackDetermineCoordinates(cpu) {
    let row;
    let col; 
    let endIndex = cpu.gameboard.size - 1;

    switch(cpu.cpuBehavior) {
      case CPU_STATE.random: {
        row = Math.round(Math.random() * (endIndex));
        col = Math.round(Math.random() * (endIndex));
        break;
      }
      case CPU_STATE.found: {
        // when found, target proximity of 1 unit radius to the found cell.
        // that means altering the row XOR column based on the last successful hit.
        
        // for deciding whether to pick row or column for adjustment
        let pickRow = Math.round(Math.random());
        // for deciding whether to plus or minus.
        let plusMinus = Math.round(Math.random()) === 0 ? 1 : -1;

        if (pickRow) {
          // if the first successful hit was 0 we don't want -1 -- always force it to be +1.
          if (cpu.cpuFirstSuccessfulHit.row === 0) {
            row = cpu.cpuFirstSuccessfulHit.row + 1;
          } else if (cpu.cpuFirstSuccessfulHit.row === endIndex) {
            row = cpu.cpuFirstSuccessfulHit.row - 1;
          } else {
            row = cpu.cpuFirstSuccessfulHit.row + plusMinus;
          }
        } else {
          // if the first successful hit was 0 we don't want -1 -- always force it to be +1.
          if (cpu.cpuFirstSuccessfulHit.col === 0) {
            col = cpu.cpuFirstSuccessfulHit.col + 1;
          // likewise for the areas where the ship is at the edge of the board. Look back.
          } else if (cpu.cpuFirstSuccessfulHit.col === endIndex) {
            col = cpu.cpuFirstSuccessfulHit.col - 1;
          } else {
            col = cpu.cpuFirstSuccessfulHit.col + plusMinus;
          }
        }
        break;
      }
      case CPU_STATE.focused: {
        // in a focused mode, the CPU starts traversing in a single direction until
        // the destruction of the ship is announced, a miss occurs, or it hits a wall.

        // the direction to be traversed depends on the last two successful hits
        // and the difference between those coordinates.
        // a rowDiff indicates to look up or down, as the ship is lying vertically.
        // a colDiff indicates to look left or right, as the ship is lying horizontally.

        let rowDiff = cpu.cpuFirstSuccessfulHit.row -
            cpu.cpuSecondSuccessfulHit.row;
        
        let colDiff = cpu.cpuFirstSuccessfulHit.col -
            cpu.cpuSecondSuccessfulHit.col;
        
        // when to look up / down -- there's a row difference
        if (rowDiff) {
          // if at the end, start searching upwards instead.
          if (cpu.cpuSecondSuccessfulHit.row === endIndex) { 
            row = cpu.cpuFirstSuccessfulHit.row - 1;
          // if at the beginning, start searching downwards.
          } else if (cpu.cpuSecondSuccessfulHit.row === 0) {
            row = cpu.cpuFirstSuccessfulHit.row + 1;
          // else we're in the middle, and if that difference is 1, then look upwards.
          } else if (rowDiff === 1) {
            row = cpu.cpuSecondSuccessfulHit - 1;
          // also in the middle, but for difference 1, then look downwards.
          } else if (rowDiff === -1) {
            row = cpu.cpuSecondSuccessfulHit + 1;
          }
          // column is a given -- keep it the same.
          col = cpu.cpuSecondSuccessfulHit.col;
        // else in the case of a column difference, we look left / right.
        } else { 
          if (cpu.cpuSecondSuccessfulHit.col === endIndex) {
            col = cpu.cpuFirstSuccessfulHit.col - 1;
          } else if (cpu.cpuSecondSuccessfulHit.col === 0) {
            col = cpu.cpuFirstSuccessfulHit.col + 1;
          } else if (colDiff === 1) {
            col = cpu.cpuSecondSuccessfulHit - 1;
          } else if (colDiff === -1) {
            col = cpu.cpuSecondSuccessfulHit + 1;
          }
        }

        break;
      }
    }

    return [row, col];
  }

  /**
   * For the CPU to decide on an attack.
   */
  #cpuAttack() {
    let status = -1;
    let row;
    let col;
    while (status === -1) {
      [row, col] = this.#cpuAttackDetermineCoordinates(this.players[1]);
      
      status = this.players[1].attack(this.players[0], row, col);
    }

    let attackedCell = document.querySelector(`.p1.gameboard .selectable[data-row="${row}"][data-col="${col}"]`)
    attackedCell.classList.add("attacked");

    switch(status) {
      case 1: {
        let cpu = this.players[1];
        console.log("CPU scores a hit!");

        let shipId = attackedCell.dataset.ship.split("cpu-ship")[1];

        let shipSunk = this.players[0].isShipSunk(shipId);
        if (shipSunk) {
          BattleshipElements.setDialog(GAME_STATE.cpuShipSunk);
        }

        // The CPU has made its first successful hit against a ship! 
        if (cpu.behavior === CPU_STATE.random
          && cpu.cpuFirstSuccessfulHit.row === null
        ) {
          cpu.cpuFirstSuccessfulHit.row = row;
          cpu.cpuFirstSuccessfulHit.col = col;
          cpu.behavior = CPU_STATE.found;
        // The CPU has made a second successful hit while in found mode!
        } else if (cpu.behavior === CPU_STATE.found
          && cpu.cpuSecondSuccessfulHit.row === null
        ) {
          cpu.cpuSecondSuccessfulHit.row = row;
          cpu.cpuSecondSuccessfulHit.col = col;
          cpu.behavior = CPU_STATE.focused;
        } else if (cpu.behavior === CPU_STATE.focused) {
          // update the successful hits
          cpu.cpuFirstSuccessfulHit = cpu.cpuSecondSuccessfulHit;
          // update the successful hits
          cpu.cpuSecondSuccessfulHit.row = row;
          cpu.cpuSecondSuccessfulHit.col = col;
        } else {
          // in focused mode... lay down some attacks.
          // if a ship was sunk, then reset to random.
          if (shipSunk) {
            cpu.cpuFirstSuccessfulHit = {row: null, col: null};
            cpu.cpuSecondSuccessfulHit = {row: null, col: null};
            cpu.behavior = CPU_STATE.random;
          }
        }
        break;
      }
      case 0:
        console.log("CPU misses!");
        break;
    }

    this.p1turn = true;
  }

  #cpuPlaceShips(player) {
    this.shipLengths.forEach((length, index) => {
      let status = null;
      let row;
      let col;
      let vertical;

      while (status === null) {
        row = Math.round(Math.random() * (player.gameboard.size-1));
        col = Math.round(Math.random() * (player.gameboard.size-1));
        vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }

      BattleshipElements.placeShipManually(length, row, col, vertical, true, `cpu-ship${index}`);
    });
  }
}