import Bakery from "./Bakery.js";

export default class Player{
    constructor(){
        this.bakery = new Bakery();
        this.hand = [];
        this.money=0
    }
}