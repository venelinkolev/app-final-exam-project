import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appHttpValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: HttpValidatorDirective,
      multi: true,
    },
  ],
})
export class HttpValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: boolean } | null {
    let str = control.value;
    //console.log('HTTP-String', str);
    if (!!str) {
      if (str.startsWith('http://') || str.startsWith('https://')) {
        return null;
      }
    }
    return { default: true };
  }
}
