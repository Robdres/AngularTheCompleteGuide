import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
  state:boolean=true;
  
  changeState(){
    this.state = (this.username=="")?true:false;
  }

  reset(){
    this.username = "";
    this.state = true;
  }


}
