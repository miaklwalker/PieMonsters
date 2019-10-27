import createCard from "../functions/createCard.js";
import { cardPop, summonSlide } from "../../PieMonsterRedux/src/CardPop.js";
import { createHiDPICanvas } from "../functions/canvasMaker.js";
export default class Oven{
    constructor(){
        this.heat=50;
        this.stage = 0;
        this.remainingHeat = 50
    }
    bakePie(pie,lot,start){
        if(this.remainingHeat-pie.cost>=0){
            this.remainingHeat-=pie.cost;
        let canvas = createHiDPICanvas(60,90)
        createCard(canvas.getContext('2d'),pie)
        canvas.addEventListener('click',cardPop(canvas))
        lot.parkinglot.children[lot.openSlot].appendChild(canvas)
        let newCardPos = canvas.getBoundingClientRect().x
            summonSlide(canvas,start-newCardPos)
        lot.openSlot++
        }else{
            alert(`Are you Trynna Turn your oven into an fridge ? 
            You can't make ${pie.name} with  ${this.remainingHeat} heat left`)
        }
    }
}
