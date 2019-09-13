export default class Oven{
    constructor(){
        this.heat=50;
        this.stage = 0;
        this.remainingHeat = 50
    }
    makePie(pie){
        this.remainingHeat-= pie.cost;
        return pie
    }
}