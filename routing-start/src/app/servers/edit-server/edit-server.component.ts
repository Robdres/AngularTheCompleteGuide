import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, CanDeactivate, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import { ServersService } from '../servers.service';
import {CanComponentDeactivate} from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.route.queryParams.subscribe(
      (param:Params)=>{
        this.allowEdit = param['allowEdit']==='1'?true:false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean{
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard this changes?')
    }else {
        return true;
    }
  }


  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
