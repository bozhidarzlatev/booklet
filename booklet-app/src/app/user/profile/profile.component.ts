import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserProfileResponse } from '../../types/user';

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
    cart: [],
    orders: [],
    reviews: [],

  }

  get cartCount() {
    return this.profileDetails.cart?.length
  }

  get reviewsCount() {
    return this.profileDetails.reviews?.length
  }

  
  get ordersCount() {
    return this.profileDetails.orders?.length
  }
  
  uploadsCount: number = 0;
  bookInCart: number = 0;
  
  get userId () {
    return this.profileDetails._id
  }
  
  ngOnInit(): void {
    this.userService.getProfile().subscribe(data => {
      
    })
    const userId = this.userService.user?._id;



    if (!userId) {
      console.error('User Id is not available');
      return;
    }

    this.userService.getUserProfileData(userId).subscribe({
      next: (response: UserProfileResponse) => {
        // response contains userdata and uploads
        const { userdata, uploads } = response;

                
        this.profileDetails = {
          username: userdata.username,
          email: userdata.email,
          profileImg: userdata.profileImg,
          _id: userdata._id,
          cart: userdata.cart,
          orders: userdata.orders,
          reviews: userdata.reviews
        };
        this.uploadsCount = uploads;
        
      },
      error: (err) => {
      },
      complete: () => {
      }
    });
  }

  
}
