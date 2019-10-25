import createCard from "../functions/createCard.js";
import { cardPop } from "../../PieMonsterRedux/src/CardPop.js";

export default class Oven{
    constructor(){
        this.heat=50;
        this.stage = 0;
        this.remainingHeat = 50
    }
    bakePie(pie,lot){
        if(this.remainingHeat-pie.cost>=0){
            this.remainingHeat-=pie.cost;
        let canvas = document.createElement('canvas')
        createCard(canvas.getContext('2d'),pie)
        canvas.width=60
        canvas.height=90
        canvas.addEventListener('click',cardPop(canvas))
        lot.parkinglot.children[lot.openSlot].appendChild(canvas)
        lot.openSlot++
        }else{
            alert(`Are you Trynna Turn your oven into an fridge ? 
            You can't make ${pie.name} with  ${this.remainingHeat} heat left`)
        }
    }
}
