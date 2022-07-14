import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,OnDestroy {
  server: {id: number, name: string, status: string};
  serversSubscribe:Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(
      Number.parseInt(this.route.snapshot.params['id'])
    )

    this.serversSubscribe = this.route.params.subscribe(
      (params:Params)=> {
        console.log(params['id'])
        this.server = this.serversService.getServer(
          Number.parseInt(params['id']));
      }
    )
  }
  ngOnDestroy(){
    this.serversSubscribe.unsubscribe();
  }

  EditServer(){
    this.router.navigate(['edit'], {relativeTo:this.route,queryParamsHandling:'preserve'})
  }
}
