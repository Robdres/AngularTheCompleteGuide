export class CounterService {
  activeToInactive:number=0;
  inactiveToActive:number=0;

  addActive(){
    this.activeToInactive= this.activeToInactive+1;
    console.log("Changes from active to inactive:" + this.activeToInactive);
  }
  
  addInative(){
    this.inactiveToActive= this.inactiveToActive+1;
    console.log("Changes from inactive to active:" + this.inactiveToActive);
  }
}
