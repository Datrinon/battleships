import { BattleshipElements } from "./BattleshipElement";
import Gameboard from "./gameboard";

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
   * Create an instance of the game.
   * @param {Player[]} players - An array of the players in the game.
   * @param {boolean} p1start - Should player 1 start first? True by default.
   * @returns 
   */
  constructor(players, p1start = true, shipLengths = [2]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = players;
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
          }, 1500);
      });
    })().then((result) => {
      BattleshipElements.setDialog(result);
      document.querySelector(".gameboard-area").classList.add("game-active");
      document.querySelectorAll(".selectable").forEach(cell => {
        cell.classList.add("attackable");
      });
    })
  }

  #cpuPlaceShips(player) {
    this.shipLengths.forEach((length, index) => {
      let status = null;
      let row;
      let col;
      let vertical;

      while (status === null) {
        // TODO
        // when testing the game phase, override row and col to be 0, 0 to test
        // victory phase.
        row = Math.round(Math.random() * (player.gameboard.size-1));
        col = Math.round(Math.random() * (player.gameboard.size-1));
        vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }

      BattleshipElements.placeShipManually(length, row, col, vertical, true, `cpu-ship${index}`);
    });
  }
}