import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinValueDirective,
      multi: true,
    },
  ],
})
export class MinValueDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: boolean } | null {
    //console.log(control.value);

    if (!!control.value) {
      return Number(control.value) < 1 ? { default: true } : null;
    }
    return null;
  }
}
