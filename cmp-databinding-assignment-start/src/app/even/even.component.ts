import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('val') element:number;

  evenValues:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    console.log(this.element);
    if(this.element%2==0){
      this.evenValues.push(this.element);
    }
  }


}
