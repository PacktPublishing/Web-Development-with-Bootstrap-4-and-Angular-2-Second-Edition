import {FormControl} from '@angular/forms';
import {Directive,forwardRef} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

export function validateZip(c: FormControl) {
  let ZIP_REGEXP:RegExp = new RegExp('[A-Za-z]{5}');

  return ZIP_REGEXP.test(c.value) ? null : {
    validateZip: {
      valid: false
    }
  };
}

@Directive({
  selector: '[validateZip][ngModel],[validateZip][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ZipValidator), multi: true }
  ]
})
export class ZipValidator {

  validator: Function = validateZip;

  validate(c: FormControl) {
    return this.validator(c);
  }
}

