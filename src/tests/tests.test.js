import Ship from "../js/ship";
import Gameboard from "../js/gameboard";

/**
 * Testing the fields and attributes of the ship class.
 */
describe('Testing Ship class...', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(2);
  });

  it("Ships have length", () => {
    expect(ship.length).not.toBeUndefined();
  });
  
  it("Ships have a status metric indicating if they've been hit.", () => {
    expect(ship.status).toEqual([false, false]);
  });

  it("Ships can be hit; hitting them should affect their" +
      " status.", () => {
    ship.hit(0);
    expect(ship.status).toEqual([true, false]);
  });

  it("Ships can be hit; any hit beyond their length should not affect their " +
  " status.", () => {
    ship.hit(3);
    expect(ship.status).toEqual([false, false]);
  });
  
  it("We can tell if a ship has been sunk.", () => {
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
  });
});

describe("Testing Gameboard class...", () => {
  let gb;
  beforeEach(() => {
    gb = new Gameboard();
  });
  // place ships at specific coordinates by calling ship constructor.
  it("Ships can be placed on the gameboard",
    () => {
      gb.placeShip(2, 0, 0, false);
      expect(gb.getGrid()[0]).toEqual(["2","2",'','','','','','','','']);
    });

    it("Ships can be placed vertically.",
    () => {
      gb.placeShip(2, 0, 0, true);

      expect(gb.getGrid()[0]).toEqual(['2','','','','','','','','','']);
      expect(gb.getGrid()[1]).toEqual(['2','','','','','','','','','']);
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


