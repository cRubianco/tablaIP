import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Directiva para pasar text a mayuscula
 * TODO ver si queda
 */
@Directive({
  selector: '[upperCase]'
})
export class UpperCaseDirective {
  constructor(private el: ElementRef, private control: NgControl) {
  }

  @HostListener('input', ['$event']) onEvent($event: string) {
    const str: string = this.control.value;
    if (str!=null && str.length>0)
      this.control?.control?.setValue(str.toUpperCase());
  }

}
