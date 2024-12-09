import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserProfileResponse } from '../../types/user';
import { forkJoin } from 'rxjs';
import { error, log } from 'console';
import { ArrayLengthPipe } from '../array-length.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, ArrayLengthPipe],
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
    cart: [],

  }

  get cartCount() {
    return this.profileDetails.cart?.length
  }

  uploadsCount: number = 0;
  bookInCart: number = 0;
  

  ngOnInit(): void {
    const userId = this.userService.user?._id;

    if (!userId) {
      console.error('User Id is not available');
      return;
    }

    // Fetch user profile data and uploads in parallel
    this.userService.getUserProfileData(userId).subscribe({
      next: (response: UserProfileResponse) => {
        // response contains userdata and uploads
        const { userdata, uploads } = response;

        
        // Assign the data to profileDetails and uploadsCount
        this.profileDetails = {
          username: userdata.username,
          email: userdata.email,
          profileImg: userdata.profileImg,
          _id: userdata._id,
          cart: userdata.cart,
        };
        this.uploadsCount = uploads;
        console.log(this.profileDetails.cart);
        
      },
      error: (err) => {
        console.error('Error fetching user profile data:', err);
      },
      complete: () => {
        console.log('User profile data fetched successfully');
      }
    });
  }

  
}
