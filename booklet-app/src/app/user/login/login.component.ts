import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordsValidator } from '../../utils/match-password.validator';
import { UserService } from '../user.service';

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
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })


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
