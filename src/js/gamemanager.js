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

  players;

  /**
   * Is it player 1's turn? 
   */
  p1turn;

  /**
   * Create an instance of the game.
   * @param {Player[]} players - An array of the players in the game.
   * @param {boolean} p1Start - Should player 1 start? True by default.
   * @returns 
   */
  constructor(players, p1turn = true) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = players;
    this.p1turn = p1turn;
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
    // TODO leave this for later since I don't know exactly 
    // how to start it. 
    // We'll work on this on the view.
    // My conception is that startGame which launch CPU actions.
  }

  #cpuPlaceShips(player) {
    // TODO move shipLengths out as a feild.
    // if you do, consider moving startGame out of the cosntructor...
    const shipLengths = [2, 3, 3, 4, 5];
    shipLengths.forEach(length => {
      let status = null;

      while (status === null) {
        let row = Math.round(Math.random() * (player.gameboard.size-1));
        let col = Math.round(Math.random() * (player.gameboard.size-1));
        let vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }
    });
  }
}