import Player from "./player.js";

export default class Game {
  constructor(context) {
    this.player1 = new Player();
    this.player2 = new Player();
    this.turn = false;
    this.phase = "setup";
    this.context = context
  }
  Turn(){
    this.turn = !this.Turn;
    if(this.turn){
      return this.player1
    }else{
      return this.player2
    }
  }
}