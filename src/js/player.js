import Gameboard from "./gameboard";

export const CPU_STATE = {
  random : "random",
  found : "found",
  focused : "focused"
};

export default class Player {
  name;
  cpu;
  /**
   * Keeps track of the CPU's last successful hit.
   */
  cpuLastSuccessfulHit;
  /**
   * There are three states for the CPU to employ: random, found, focused.
   */
  cpuBehavior;
  score;
  gameboard;

  constructor(name, isCpu) {
    this.name = name;
    this.cpu = isCpu;
    this.cpuLastSuccessfulHit = [];
    this.cpuBehavior =
    this.score = 0;
    this.gameboard = new Gameboard();
  }

  /**
   * Attack the other player's gameboard.
   * @param {Player} player - The other player of the game.
   * @param {number} row - Row coordinate to launch an attack.
   * @param {number} col - Column coordinate to launch an attack.
   * @returns {number} - Status of the attack. 1 is a hit. 0 is a miss,
   * and -1 is an area which has already been hit.
   */
  attack(player, xLoc, yLoc) {
    return player.gameboard.receiveAttack(xLoc, yLoc);
  }
}