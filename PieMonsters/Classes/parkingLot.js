import { loadImage } from "../functions/loaders.js";
import { cardPop } from "../../PieMonsterRedux/src/CardPop.js";
import createCard from "../functions/createCard.js";

export default class Parkinglot{
    constructor(id){
        this.parkinglot = document.getElementById(id);
        this.openSlot = 0;
    }
}