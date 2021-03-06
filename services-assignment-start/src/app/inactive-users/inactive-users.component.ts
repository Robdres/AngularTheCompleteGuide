import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit{

  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();


  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.users= this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.inactiveToActive(id);
  }
}
