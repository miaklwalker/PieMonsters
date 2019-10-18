import Game from "./Classes/Game.js";
import { cards } from "../PieMonsters/Cards/Cards.js";
import { loadImage } from "./functions/loaders.js";

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let game = new Game(context);

game.player1.bakery.summonPie(cards["Blueberry White Crust"], context);
game.player1.bakery.summonPie(cards["Just Robots"], context);
game.player2.bakery.summonPie(cards["Blueberry White Crust"], context);
game.player2.bakery.summonPie(cards["Blueberry White Crust"], context);

//game.player1.bakery.summonPie(cards["Just Robots"],context);
// game.player1.bakery.summonPie(cards["The Pie-talian Job"],context);
// game.player1.bakery.summonPie(cards["Pugeki"],context);

function Draw() {
  game.showGame(context);
  requestAnimationFrame(Draw);
}
Draw();
