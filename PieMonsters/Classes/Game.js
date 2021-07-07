import recipe from "./recipe.js";
import { cards } from "../Cards/Cards.js";
import Player from "./player.js";

let playerRecipe = document.getElementsByClassName('recipePlayer')[0];
let OppRecipe = document.getElementsByClassName('RecipeOpp')[0]

let pieList = ['Blueberry White Crust','The Pie-talian Job','Just Robots','Pugeki'].map(item=>cards[item])

export default class Game{
  constructor(game){
      this.player = new Player('ParkingLotPlayer');
      this.opp = new Player('ParkingLotOpp'); 
  }
  displayStats(){
    this.player.displayHud('StatsPlayer','BankPlayer');
    this.opp.displayHud('StatsOpp','BankOpp')
  }
  displayRecipes(){
    recipe(playerRecipe,pieList,this.player.bakery);
    recipe(OppRecipe,pieList,this.opp.bakery)
  }
}