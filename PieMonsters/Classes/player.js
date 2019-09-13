import Bakery from "./Bakery";

export default class Player{
    constructor(){
        this.bakery = new Bakery();
        this.hand = [];
        this.money=0
    }
}