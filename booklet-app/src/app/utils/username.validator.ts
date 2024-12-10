import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  const regExp = /^[a-zA-Z0-9]+$/; // This regex pattern is correct for most cases

  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // Valid if the control is empty (you can make this stricter if needed)
    }

    const isValid = regExp.test(control.value);

    return isValid ? null : { usernameValidator: true }; // Return an error object if invalid
  };
}