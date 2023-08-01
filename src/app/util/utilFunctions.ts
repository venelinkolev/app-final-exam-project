import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordCheck(password: AbstractControl) {
  const validatorFn: ValidatorFn = (rePassword: AbstractControl) => {
    if (password.value !== rePassword.value) {
      return {
        passwordNotMatch: true,
      };
    }

    return null;
  };

  return validatorFn;
}
