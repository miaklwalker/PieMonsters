export default class Game {
    constructor(){
        this.player1 = new Player();
        this.player2 = new Player();
        this.playerTurn = false;
        this.phase = 'setup'
    }
}