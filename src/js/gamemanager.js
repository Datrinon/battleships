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
  playing: "Game active."
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
  constructor(players, p1start = true, shipLengths = [2, 3, 3, 4, 5]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = players;
    this.p1turn = p1start;
    this.shipLengths = shipLengths;
  }

  /**
   * Start the game.
   */
  startGame() {
    this.players.forEach(player => {
      if (player.cpu) {
        this.#cpuPlaceShips(player);
      }
    });
  }

  #cpuPlaceShips(player) {
    this.shipLengths.forEach(length => {
      let status = null;

      while (status === null) {
        // TODO
        // when testing the game phase, override row and col to be 0, 0 to test
        // victory phase.
        let row = Math.round(Math.random() * (player.gameboard.size-1));
        let col = Math.round(Math.random() * (player.gameboard.size-1));
        let vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }
    });
  }
}