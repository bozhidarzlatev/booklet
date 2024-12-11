import { Component, OnInit } from '@angular/core';
import { ReviewData } from '../../types/book';
import { UserService } from '../user.service';
import { User } from '../../types/user';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-view-review',
  standalone: true,
  imports: [],
  templateUrl: './view-review.component.html',
  styleUrl: './view-review.component.css'
})
export class ViewReviewComponent implements OnInit {

  constructor(private apiService: ApiService, private userService: UserService) {}

  title = 'Your Reviews'

  reviews: ReviewData[] = [];
  user: User  | null = null;
  userId: string | undefined = undefined


  //TO DO
  ngOnInit(): void {
    this.userId = this.userService.user?._id
    
    // this.apiService.getReview(this.userId).subscribe((data)=>{
      // this.reviews = data    
      // console.log(data);
      

    // })
  }

}
