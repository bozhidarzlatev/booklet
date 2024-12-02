import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { matchPasswordsValidator } from '../../utils/match-password.validator';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
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
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required]),
      profileImg: new FormControl(''),
      passGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordsValidator('password' , 'rePassword')]
      }),
    })


    register() {
      console.log('clicked');

        if (this.form.invalid) {
          return
        }

        const {
          username, 
          email, 
          profileImg, 
          passGroup: {password, rePassword} = {},
      } = this.form.value;

      console.log({username, email, profileImg, password, rePassword});
      
      this.userService.register(username!, email!, profileImg!, password!, rePassword!).subscribe(()=>{
        this.router.navigate(['/'])
      })

    }
}
