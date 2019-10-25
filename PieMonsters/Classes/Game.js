import Parkinglot from "./parkingLot.js";

export default class Game{
  constructor(game){
      this.playerLot = new Parkinglot('ParkingLotPlayer');
      this.oppLot = new Parkinglot('ParkingLotOpp') 
  }
}