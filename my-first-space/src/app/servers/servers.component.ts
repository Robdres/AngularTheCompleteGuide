import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreatedStatus:string = "No server has been created";
  serverName:string = 'ServerName';
  serverCreated:boolean =false;
  servers = ['TestServer','TestServer2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus="Server has been created with the name " + this.serverName; 
  }

  onUpdateServerName(event:any):any{
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
