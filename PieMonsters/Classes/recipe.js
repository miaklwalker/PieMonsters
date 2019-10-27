import { cards } from "../Cards/Cards.js";
import createCard from "../functions/createCard.js";
import { cardPop } from "../../PieMonsterRedux/src/CardPop.js";
import { createHiDPICanvas } from "../functions/canvasMaker.js";

let demoCard = (pie, recipeDiv, bakery) => {
  let canvas = createHiDPICanvas(60, 90);
  createCard(canvas.getContext("2d"), pie);
  canvas.addEventListener("click", () =>{
      let startPoint =canvas.getBoundingClientRect()
    bakery.summonPie(pie,startPoint.x )
  });
  recipeDiv.appendChild(canvas);
};
export default function recipe(recipeDiv, recipes, bakery) {
  recipes.forEach(recipe => {
    demoCard(recipe, recipeDiv, bakery);
  });
}
