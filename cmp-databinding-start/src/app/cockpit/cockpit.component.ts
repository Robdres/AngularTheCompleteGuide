import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  onAddServer(serverName:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:serverName.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:serverName.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}
