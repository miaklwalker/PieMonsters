import Oven from "./Oven";

export default class Bakery{
    constructor(){
        this.health = 100;
        this.oven = new Oven();
        this.parkingLot = {
            slot1:{},
            slot2:{},
            slot3:{},
            slot4:{},
            slot5:{},
            slot6:{},
            slot7:{},
        }
    }
}