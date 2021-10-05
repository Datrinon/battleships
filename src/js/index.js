//js 
import { BattleshipElements } from "./BattleshipElement";
import { GAME_STATE } from "./gamemanager";
import GameManager from "./gamemanager";
import Player from "./player";
import Utility from "./utility";
import component from "./component";

//css
import "../css/reset.css";
import "../css/game.css";
import "../css/page.css";


(function main() {
  const body = document.body;

  const main = Utility.createElement("main", "content");
  const footer = Utility.createElement("footer", "footer");
  const githubLink = component.a("View on GitHub.", "#", "gh-link");
  const githubIcon = component.img("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", "gh-icon");

  body.append(main, footer);

  const p1 = new Player("Commander Blue", false);
  const p2 = new Player("Commander Red", true);

  const game = new GameManager(p1, p2);
  const page = new BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  main.append(header, gameArea);
  
  game.attachPage(page);
  page.setDialog(GAME_STATE.welcomePrompt);
  page.setSubDialog("Drag and drop ships onto the gameboard.",
      "Click (when placed) to rotate ship.");
  footer.append(githubLink, githubIcon);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/