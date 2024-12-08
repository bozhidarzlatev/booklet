import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) {}

  profileDetails: User = {
    username: '',
    email: '',
    profileImg: '',
    _id: '',
  }

  

  ngOnInit(): void {
    this.profileDetails = this.userService.user!

  }


}
