import { Component, ContentChild, DoCheck, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, DoCheck {
  @Input('val') element:number;

  oddValues:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    console.log(this.element);
    if(this.element%2!==0){
      this.oddValues.push(this.element);
    }
  }
}
