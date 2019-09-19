import { loadImage } from "../functions/loaders.js";
import wrapText from "../functions/wrapText.js";
import createCard from "../functions/createCard.js";

export default class Oven{
    constructor(){
        this.heat=50;
        this.stage = 0;
        this.remainingHeat = 50
        this.remade = new Map();
    }
    makePie(pie){
        let buffer = document.createElement('canvas')
        let context = buffer.getContext('2d');
        this.remainingHeat-= pie.cost;
        if(this.remade.has(pie)){
            return this.remade.get(pie)
        }else{
            createCard(context,pie)
        this.remade.set(pie,buffer);
    }
        return buffer
    }

    get Tempurature(){
        return this.remainingHeat
    }
}
