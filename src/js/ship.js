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