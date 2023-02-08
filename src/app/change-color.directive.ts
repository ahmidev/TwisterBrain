import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
   

  }

}
