import { loadImage } from "../functions/loaders.js";
import { cardPop } from "../../PieMonsterRedux/src/CardPop.js";
import createCard from "../functions/createCard.js";

export default class Parkinglot{
    constructor(id){
        this.parkinglot = document.getElementById(id);
        this.openSlot = 0;
    }
    bakePie(pie){
        let canvas = document.createElement('canvas')
        createCard(canvas.getContext('2d'),pie)
        canvas.width=60
        canvas.height=90
        canvas.addEventListener('click',cardPop(canvas))
        this.parkinglot.children[this.openSlot].appendChild(canvas)
        this.openSlot++
        
    }
}