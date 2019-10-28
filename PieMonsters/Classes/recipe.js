import createCard from "../functions/createCard.js";
import { createHiDPICanvas } from "../functions/canvasMaker.js";

let demoCard = (pie, recipeDiv, bakery) => {
  const canvas = createHiDPICanvas(60, 90);
  createCard(canvas.getContext("2d"), pie);
  canvas.addEventListener("click", () =>{
      const startPoint =canvas.getBoundingClientRect()
    bakery.summonPie(pie,startPoint.x )
  });
  recipeDiv.appendChild(canvas);
};
export default function recipe(recipeDiv, recipes, bakery) {
  recipes.forEach(recipe => {
    demoCard(recipe, recipeDiv, bakery);
  });
}
