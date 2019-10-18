import Oven from "./Oven.js";

export default class Bakery {
  constructor() {
    this.health = 100;
    this.oven = new Oven();
    this.parkingLot = {
      "ParkingSpot1":{},
      "ParkingSpot2":{},
      "ParkingSpot3":{},
      "ParkingSpot4":{},
      "ParkingSpot5":{},
      "ParkingSpot6":{},
      "ParkingSpot7":{},

    };
  }
  summonPie(pie,context) {
    let slots = Object.keys(this.parkingLot)
    let summoned = false
    slots.forEach(slot=>{
      if(Object.keys(this.parkingLot[slot]).length === 0 && !summoned){
        if(this.oven.Tempurature-pie.cost>=0){
          pie.cardImage = this.oven.makePie(pie,context)
        this.parkingLot[slot] = pie
        summoned=true
        }else{
          console.warn("What you trynna make this oven a freezer? I can't bake that")
        }
      }
    });
  }
  showField(context,y){
    let index = 0
    for(let spot in this.parkingLot){
      let pie = this.parkingLot[spot]
      if(Object.keys(this.parkingLot[spot]).length !== 0 ){
        context.drawImage(pie.cardImage,index*120+90,y)
      }
      index++
    }
  }
}
