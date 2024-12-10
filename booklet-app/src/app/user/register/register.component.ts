import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordsValidator } from '../../utils/match-password.validator';
import { UserService } from '../user.service';
import { emailValidator } from '../../utils/email.validator';
import { httpValidator } from '../../utils/http.validator';
import { usernameValidator } from '../../utils/username.validator';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router ) {}

    form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), usernameValidator()]),
      email: new FormControl('', [Validators.required, emailValidator()]),
      profileImg: new FormControl('', [Validators.required, httpValidator()]),
      passGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordsValidator('password' , 'rePassword')]
      }),
    })

    isFieldTextMissing(controlName: string) {
      return (
        this.form.get(controlName)?.touched &&
        this.form.get(controlName)?.errors?.['required']
      );
    }
  
    get isNotMinLength() {
      return (
        this.form.get('username')?.touched &&
        this.form.get('username')?.errors?.['minlength']
      );
    }

    get isEmailNotValid() {
      return (
        this.form.get('email')?.touched &&
        this.form.get('email')?.errors?.['emailValidator']
      );
    }

    
    get isUrlNotValid() {
      return (
        this.form.get('profileImg')?.touched &&
        this.form.get('profileImg')?.errors?.['httpValidator']
      );
    }

    get isUsernameNotValid() {
      return (
        this.form.get('profileImg')?.touched &&
        this.form.get('profileImg')?.errors?.['usernameValidator']
      );
    }


    get passGroup() {
      return this.form.get('passGroup');
    }

    register() {
   
        if (this.form.invalid) {
          return
        }

        const {
          username, 
          email, 
          profileImg, 
          passGroup: {password, rePassword} = {},
      } = this.form.value;
     

      this.userService.register(username!, email!, profileImg!, password!, rePassword!).subscribe(()=>{
        this.router.navigate(['/'])
      })

    }
}
