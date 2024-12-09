import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-authentticata',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './authentticata.component.html',
  styleUrl: './authentticata.component.css'
})
export class AuthentticataComponent implements OnInit {
  isAuthenticating = true;

  constructor(private userService: UserService) {}



ngOnInit(): void {
  this.userService.getProfile().subscribe({
    next: () => {
      
      this.isAuthenticating = false
    },
    error:  () => {
      this.isAuthenticating = false
    },
    complete:  () => {
      this.isAuthenticating = false
    },
  })  
}


}
