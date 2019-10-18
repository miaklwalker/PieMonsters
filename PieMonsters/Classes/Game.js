import Player from "./player.js";
import { loadImage } from "../functions/loaders.js";

export default class Game {
  constructor(context) {
    this.player1 = new Player();
    this.player2 = new Player();
    this.turn = false;
    this.phase = "setup";
    this.context = context,
    this.i = 0 
  }
  Turn(){
    this.turn = !this.Turn;
    if(this.turn){
      return this.player1
    }else{
      return this.player2
    }
  }
  showGame(context){
    this.i++
    let parkingLot = loadImage('./PieMonsters/Images/ParkingLot.png').then(image=>{
      context.drawImage(image,0,0)
    })
  
    this.player1.bakery.showField(context,310,true)
    this.player2.bakery.showField(context,25,false)
  }
}