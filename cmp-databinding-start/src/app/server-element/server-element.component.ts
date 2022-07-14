import { Input,Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector:      'app-server-element',
  templateUrl:   './server-element.component.html',
  styleUrls:     ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements  
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
    @Input('srvElement') element:{type:string, name:string, content:string};
    @Input() name:string;
    @ViewChild("heading",{static:true}) panelHeading:ElementRef;
    @ContentChild("contentParagraph",{static:true}) contentParagraph:ElementRef;

    constructor() { }

    //
    ngOnChanges(changes: SimpleChanges){
      console.log(changes);
    }

    //check when component is initialize 
    ngOnInit(){
      console.log("OnInit called");
      console.log(this.panelHeading.nativeElement.textContent)
      console.log("Paragraph" + this.contentParagraph.nativeElement.textContent)
    }

    //Check for any change in angular 
    ngDoCheck(){
      console.log("DoCheck called");
    }

    // when ng-content called
    ngAfterContentInit(){
      console.log("AfterContent called")
    }

    ngAfterContentChecked() {
      console.log("After Content Checked called")
    }

    ngAfterViewInit(){
      console.log("AfterViewInit called")
      console.log(this.panelHeading.nativeElement.textContent)
      console.log("Paragraph" + this.contentParagraph.nativeElement.textContent)
    }

    ngAfterViewChecked(){
      console.log("AfterViewChecked called")
    }
    ngOnDestroy(){
      console.log("OnDestroy called")
    }
}
