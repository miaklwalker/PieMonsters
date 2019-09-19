import Game from "./Classes/Game.js";
import { cards } from "../PieMonsters/Cards/Cards.js";

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
document.body.appendChild(canvas);

let game = new Game(context);
let selection = 1;
switch (selection) {
  case 0:
    game.player1.bakery.summonPie(cards["Blueberry White Crust"]);
    break;
  case 1:
    game.player1.bakery.summonPie(cards["Just Robots"]);
    break;
  case 2:
    game.player1.bakery.summonPie(cards["The Pie-talian Job"]);
    break;
    case 3:
    game.player1.bakery.summonPie(cards["Pugeki"]);
    break;
}

function Draw() {
   context.clearRect(0,0,canvas.width,canvas.height);
  game.player1.bakery.showField(context);
  requestAnimationFrame(Draw);
}
Draw();
