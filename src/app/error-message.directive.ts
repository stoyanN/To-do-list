import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective implements OnInit {
  
  constructor(private el: ElementRef<HTMLDivElement>) { }
  @Input('isErrorMessage') isErrorMessage: string;
  
  ngOnInit(): void {
    this.el.nativeElement.style.display = 'block';
  }
}
