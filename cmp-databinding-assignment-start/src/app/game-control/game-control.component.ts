import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() gameStopped = new EventEmitter<any>();
  @Output() gameStarted = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onGameStopped(){
    this.gameStopped.emit(0)
  }

  onGameStarted(){
    this.gameStarted.emit(0)
  }
}
