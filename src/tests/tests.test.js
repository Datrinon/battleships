import Ship from "../js/ship";
import Gameboard from "../js/gameboard";

/**
 * Testing the fields and attributes of the ship class.
 */
describe('Testing Ship class...', () => {
  let gb;
  let ship;

  beforeEach(() => {
    gb = new Gameboard();
    ship = gb.placeShip(3, 0, 0, false);
  });

  it("Ships have length", () => {
    expect(ship.length).not.toBeUndefined();
  });
  
  it("Ships have a status metric indicating if they've been hit.", () => {
    expect(ship.status).toEqual({"0,0": false, "0,1":false, "0,2":false});
  });

  it("Ships can be hit; hitting them should affect their" +
      " status.", () => {
    gb.receiveAttack(0, 1);
    expect(ship.status).toEqual({"0,0": false, "0,1":true, "0,2":false});
  });

  it("Ships can be hit; any hit beyond their length should not affect their " +
  " status.", () => {
    gb.receiveAttack(0, 3);
    expect(ship.status).toEqual({"0,0": false, "0,1":false, "0,2":false});
  });
  
  it("isSunk() is true if the ship has been fully hit.", () => {
    gb.receiveAttack(0, 0);
    gb.receiveAttack(0, 1);
    gb.receiveAttack(0, 2);
    expect(gb.ships[0].isSunk()).toBe(true);
  });
});

describe("Testing Gameboard placement...", () => {
  let gb;
  beforeEach(() => {
    gb = new Gameboard();
  });
  // place ships at specific coordinates by calling ship constructor.
  it("Ships can be placed on the gameboard",
    () => {
      gb.placeShip(2, 0, 0, false);
      expect(gb.getGrid()[0]).toEqual([0,0,'','','','','','','','']);
    });

    it("Ships can be placed vertically.",
    () => {
      gb.placeShip(2, 0, 0, true);

      expect(gb.getGrid()[0]).toEqual([0,'','','','','','','','','']);
      expect(gb.getGrid()[1]).toEqual([0,'','','','','','','','','']);
    });

    it("Ships which extend outside of the edge of the board cannot be placed.",
    () => {
      expect(gb.placeShip(5, 9, 9, false)).toBeNull();
    });

    it("Ships which extend outside of the edge of the board vertically cannot be placed.",
    () => {
      expect(gb.placeShip(5, 9, 9, false)).toBeNull();
    });

    it("Ships cannot be placed where another ship is currently present.",
    () => {
      gb.placeShip(2, 0, 0, true);

      expect(gb.placeShip(2, 0, 0, false)).toBeNull();
    });
});

describe("Gameboard: Receiving Attacks", () => {
  let gb;
  beforeEach(() => {
    gb = new Gameboard();
  });

  it("Gameboards can receive attack via a *pair*, and only a pair, of coordinates.", ()=> {
    expect(() => {
      gb.receiveAttack(0);
    }).toThrow("You must provide row and col coordinates.");
  });

  it("If a ship is detected where the hit lands, send the hit to the correct ship.", () => {
    gb.placeShip(3, 0, 0, false);

    

    expect(gb.receiveAttack(0, 0)).toEqual(1);
    expect(gb.getGrid()[0][0]).toEqual("x");
  });

  it("If a ship is not detected, record this on the gameboard as a miss.", () => {
    gb.placeShip(3, 0, 0, false);
    

    expect(gb.receiveAttack(1, 5)).toEqual(0);
    expect(gb.getGrid()[1][5]).toEqual("o"); 
  });
  
  it("Do not allow the player to hit spots on the gameboard that have already been hit.", () => {
    gb.placeShip(3, 0, 0, false);
    
    expect(gb.receiveAttack(1, 5)).toEqual(0);
    expect(gb.receiveAttack(1, 5)).toEqual(-1);
    expect(gb.receiveAttack(0, 0)).toEqual(1);
    expect(gb.receiveAttack(0, 0)).toEqual(-1);
  });

  it("Based on receiving attacks, the gameboard returns whether or not all ships have been sunk.", () => {
    gb.placeShip(1, 0, 0, false);

    expect(gb.allShipsSunk()).toBe(false);

    gb.receiveAttack(0,0);

    expect(gb.allShipsSunk()).toBe(true);
  });

})
