import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean = true;
  displayMessages= [];
  iter:number = 0;

  toggleDisplay(){
    this.display = !this.display;
    this.displayMessages.push(this.iter);
    this.iter = this.iter + 1;
  }
}
