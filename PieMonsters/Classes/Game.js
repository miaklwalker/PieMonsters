import Bakery from "./Bakery.js";
import recipe from "./recipe.js";
import { cards } from "../Cards/Cards.js";

let playerRecipe = document.getElementsByClassName('recipePlayer')[0];
let OppRecipe = document.getElementsByClassName('RecipeOpp')[0]

let pieList = ['Blueberry White Crust','The Pie-talian Job','Just Robots','Pugeki'].map(item=>cards[item])

export default class Game{
  constructor(game){
      this.player = new Bakery('ParkingLotPlayer');
      this.opp = new Bakery('ParkingLotOpp'); 
  }
  displayStats(){
    this.player.displayStats('StatsPlayer');
    this.opp.displayStats('StatsOpp')
  }
  displayRecipes(){
    recipe(playerRecipe,pieList,this.player);
    recipe(OppRecipe,pieList,this.opp)
  }
}