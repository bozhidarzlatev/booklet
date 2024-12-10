import { Component, OnInit } from '@angular/core';
import { Book ,  ReviewData } from '../types/book';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ RouterLink, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  book = {} as Book;
  reviews: ReviewData[] = [] ; 

  constructor( private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) {}


  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];
    
    this.apiService.getSingleBook(bookId).subscribe( book => {
      this.book = book
      console.log(`asdsa1` , this.book);
    });


    this.apiService.getBookReviews(bookId).subscribe({
      next: (reviews: ReviewData[]) => {  
        this.reviews = reviews; 
        console.log(`asdsa1` , this.reviews);
      },
      error: (err) => {
        console.error('Error fetching reviews:', err);
        alert('Error fetching reviews.');
      }
    });
    
    console.log(`asdsa` , this.reviews);
    console.log(`asdsa` , this.book);
    
  }


  addToCart() {
    const userId = this.userService.user?._id;
    
    if (!userId) {
      alert("You must be logged in to add items to your cart!");
      return;
    }

    // Add book to cart and then update user profile
    this.apiService
    .addToCart(this.book._id, userId)
    .pipe(
      switchMap(() => this.userService.getProfile()) // Automatically fetch profile after adding to cart
    )
    .subscribe({
      next: (user) => {
        console.log('Profile updated:', user);
        // Update UI or perform additional logic if needed
      },
      error: (err) => {
        console.error('Error during cart update or profile fetch:', err);
        alert('An error occurred while updating your cart.');
      },
    });
  }

}

