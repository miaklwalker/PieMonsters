import Oven from "./Oven.js";
import Parkinglot from "./parkingLot.js";
import anime from "../anime-master/src/index.js";

export default class Bakery {
  constructor(id) {
    this.health = 100;
    this.ovenTemp=0
    this.oven = new Oven();
    this.parkingLot = new Parkinglot(id)
    this.once = false
    this.id=''
  }
  summonPie(pie) {
    this.ovenTemp = this.oven.remainingHeat
    this.oven.bakePie(pie,this.parkingLot)
    this.displayStats(this.id);
  }
  displayStats(id){
    let stat_div =document.getElementsByClassName(id)[0]
    let stats = {
      ovenTemp:50,
      health:100
    }
    stats.temp = this.ovenTemp
    stats.health = this.health
    if(this.once){
    anime({
      targets: stats,
      ovenTemp: this.oven.remainingHeat,
      cycles: 130,
      round: 1,
      easing: 'linear',
      update: function() {
        stat_div.innerText = `Life Left : ${stats.health}
        Heat Left: ${stats.ovenTemp}`
      }
    });
  }else{
    this.id=id
    stat_div.innerText=`Life Left : ${this.health}
    Heat Left: ${this.oven.remainingHeat}`
  }
  this.once=true;
  }
 
}



