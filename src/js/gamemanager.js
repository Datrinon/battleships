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
  gamePrompt: "Welcome. Drag ships onto gameboard. Click (when placed): Rotate."
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

    const row = e.currentTarget.dataset.row;
    const col = e.currentTarget.dataset.col;

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
    this.p1turn = !this.p1turn; // invert the turns.
  }

  #cpuAttackDetermineCoordinates(cpu) {
    let row;
    let col; 

    switch(cpu.cpuBehavior) {
      case CPU_STATE.random: {
        row = Math.round(Math.random() * (cpu.gameboard.size-1));
        col = Math.round(Math.random() * (cpu.gameboard.size-1));
        break;
      }
      case CPU_STATE.found: {
        let rowOrCol = Math.round(Math.random());
        let plusMinus = Math.round(Math.random()) === 0 ? 1 : -1;

        if (rowOrCol) {
          row = cpu.cpuLastSuccessfulHit.row + plusMinus;
        } else {
          col = cpu.cpuLastSuccessfulHit.col + plusMinus;
        }
        break;
      }
      case CPU_STATE.focused: {
        let rowDiff = cpu.cpuLastSuccessfulHit.row -
            cpu.cpu2ndLastSuccessfulHit.row;
        
        let colDiff = cpu.cpuLastSuccessfulHit.col -
            cpu.cpu2ndLastSuccessfulHit.col;
        
        if (rowDiff) {
          switch(rowDiff) {
            case 1: // row difference 1 means move up;
              row = cpu.cpu2ndLastSuccessfulHit.row + 1;
              col = cpu.cpu2ndLastSuccessfulHit.col;
              break;
            case -1: // row difference -1 means move down.
              row = cpu.cpu2ndLastSuccessfulHit.row - 1;
              col = cpu.cpu2ndLastSuccessfulHit.col;
              break;
          }
        } else if (colDiff) {
          switch (colDiff) {
            case 1: // if 1, move left.
              row = cpu.cpu2ndLastSuccessfulHit.row;
              col = cpu.cpu2ndLastSuccessfulHit.col - 1;
              break;
            case -1: // if -1, move right.
              row = cpu.cpu2ndLastSuccessfulHit.row;
              col = cpu.cpu2ndLastSuccessfulHit.col + 1;
              break;
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
    let [row, col] = this.#cpuAttackDetermineCoordinates(this.players[1]);


    
    player[1].attack(player[0])

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