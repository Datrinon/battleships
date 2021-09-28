import Ship from "../js/ship";

/**
 * A variety of tests for the Battleship app.
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



