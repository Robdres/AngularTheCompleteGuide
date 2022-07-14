import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:number = 0;
  ref = setInterval(()=>{
      this.value = this.value + 1;
    }, 1000);


  ngOnInit(): void {
  }

  stopGame(){
    clearInterval(this.ref);
  }

  startGame(){
    clearInterval(this.ref);
    this.ref = setInterval(()=>{
        this.value = this.value + 1;
      }, 1000);
  }
}
