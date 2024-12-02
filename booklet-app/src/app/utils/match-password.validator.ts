import { ValidatorFn } from "@angular/forms";
import { log } from "console";

export function matchPasswordsValidator(
    passwordControlName: string,
    rePasswordControlName: string,
    
): ValidatorFn {
    return (control) => {
        const passwordFormConttrol = control.get(passwordControlName);
        const rePasswordFormConttrol = control.get(rePasswordControlName);
        
        const passwordsAreMatching = rePasswordFormConttrol?.value === passwordFormConttrol?.value;

        return passwordsAreMatching ? null : {matchPasswordsValidator: true};
    }
}