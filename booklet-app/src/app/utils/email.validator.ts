import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domenStr = domains.join('|');
//    const regExp = new RegExp(`[A-Za-z0-9]{6,}+@gmail\.(${domenStr})`)
   const regExp = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domenStr})`)
    
    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value);
        
        return isInvalid ? null : {emailValidator: true};
    };
}