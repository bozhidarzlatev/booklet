import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { usernameValidator } from '../../utils/username.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userSErvice: UserService, private router: Router ) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), usernameValidator()]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
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

  
  get isUsernameNotValid() {
    return (
      this.form.get('profileImg')?.touched &&
      this.form.get('profileImg')?.errors?.['usernameValidator']
    );
  }

  login() {
    if (this,this.form.invalid) {
      return
    }

    const {username, password} = this.form.value;

    
    this.userSErvice.login(username!, password!).subscribe(()=> {
      this.router.navigate(['/'])
    })

  }

}
