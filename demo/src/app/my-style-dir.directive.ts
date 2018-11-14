import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyStyleDir]'
})
export class MyStyleDirDirective {

  constructor() { }
  @HostBinding('style.color') mycolor = 'lightgreen';
  @HostListener('mouseover') handleMouseOver() {
    this.mycolor = 'red';
  }
  @HostListener('mouseleave') handleMouseLeave () {
    this.mycolor = 'orange';
  }
}
