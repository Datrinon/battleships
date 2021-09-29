import Ship from "./ship";

export default class Gameboard {
  
  grid;
  size;

  constructor() {
      this.size = 10;
      this.grid = [];
      
      for (let i = 0; i < this.size; i++) {
        this.grid[i] = [];
        for (let j = 0; j < this.size; j++) {
          this.grid[i].push("");
        }
      }
    }

  /**
   * Creates and places a given ship based on the coordinates
   * assigned to the ship. 
   * @param {number} length - the given length of the ship. 
   * @param {number} row - the row to place the ship. 0-based coordinates.
   * @param {number} col - the column to place the ship. 0-based coordinates.
   * @param {boolean} vertical - Place the ship horizontally?
   * @return {Ship} - The ship that was placed, or null if the ship failed
   * to be placed.
   */
  placeShip(length, row, col, vertical) {
    // check to see that the given row and col + length are not already occupied.
    if (vertical) {
      for (let i = row; i < (row + length); i++) {
        if (this.grid[i][col] !== "") {
          return null;
        }
      }
    } else {
      for (let i = col; i < (col + length); i++) {
        if (this.grid[row][i] !== "") {
          return null;
        }
      }
    }
    // return null if out of bounds
    if (row + length > this.grid.length
        || col + length > this.grid.length
    ) {
      return null;
    }

    // otherwise we're good to place a ship.
    const ship = new Ship(length);

    if (vertical) {
      for (let i = row; i < (row + ship.length); i++) {
        this.grid[i][col] = ship.length.toString();
      }
    } else {
      for (let i = col; i < (col + ship.length); i++) {
        this.grid[row][i] = ship.length.toString();
      }
    }

    return ship;
  }

  receiveAttack(location) {
    return;
  }

  getGrid() {
    return this.grid;
  }

}