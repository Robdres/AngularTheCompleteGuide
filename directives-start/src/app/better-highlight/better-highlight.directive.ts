import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string = 'transparent';
  @Input() hoverColor:string = 'lightblue';

  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;

  constructor(private renderer:Renderer2, private element:ElementRef) { }
  
  ngOnInit(){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red')
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }

}
