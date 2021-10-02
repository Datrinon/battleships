//js 
import component from "./component";
import Utility from "./utility";
import { BattleshipElements } from "./BattleshipElement";
import { GAME_STATE } from "./gamemanager";
import GameManager from "./gamemanager";
import Player from "./player";

//css
import "../css/reset.css";
import "../css/index.css";

(function main() {
  const body = document.body;

  const p1 = new Player("Commander Blue", false);
  const p2 = new Player("Commander Red", true);

  const game = new GameManager([p1, p2]);
  const page = new BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  body.append(header,gameArea);
  
  BattleshipElements.setDialog(GAME_STATE.gamePrompt);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/