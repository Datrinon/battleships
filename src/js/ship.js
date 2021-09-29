export default class Ship {
  /**
   * The length of the battleship.
   */
  length;
  /**
   * Current condition of the battleship. Returns
   * an array containing status of the battleship. 
   * If the statuses are all true, the ship is sunk.
   */
  status;

  /**
   * Create a ship.
   * @param {Gameboard} gameboard - The gameboard the ship belongs to.
   * @param {Number} length - The length of the ship.
   * @param {Number} row - xCoordinate to place the ship. 0-based.
   * @param {Number} col - yCoordinate to place the ship. 0-based.
   * @param {boolean} vertical - Should the ship be placed vertically?
   */
  constructor(length) {
    this.length = length ?? 1;
   
    this.status = [];
    for (let i = 0; i < length; i++) {
      this.status.push(false);
    }
  }

  /**
   * Marks the ship hit at given location.
   * @param {number} location 
   */
  hit(location) {
    if (location >= this.length) {
      return;
    }
    this.status[location] = true;
  }

  /**
   * Determines if the ship has been entirely sunk yet.
   */
  isSunk() {
    this.status.forEach(part => {
      if (part === false) {
        return false;
      }
    })
    return true;
  }
}