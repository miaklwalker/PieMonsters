import Bakery from "./Bakery.js";

export default class Player{
    constructor(id){
        this.bakery = new Bakery(id);
        this.hand = [];
        this.money=0
    }
    displayHud(id,title){
        this.bakery.displayStats(id);
        let bank = document.getElementsByClassName(title)[0]
        console.log(bank)
        bank.innerText = `$ ${this.money}`
    }
}