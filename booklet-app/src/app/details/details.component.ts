import { Component, OnInit } from '@angular/core';
import { Book ,  ReviewData } from '../types/book';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SlicePipe } from '../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../shared/pipes/elapsed-time.pipe';
import { CartService } from '../user/cart/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ RouterLink, DatePipe, SlicePipe, ElapsedTimePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  book = {} as Book;
  reviews: ReviewData[] = [] ; 

  constructor( private cartService: CartService , private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) {}

  product = {
    id: 1,
    name: 'Product 1',
    price: 100
  };

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];
    
    this.apiService.getSingleBook(bookId).subscribe( book => {
      this.book = book
    });


    this.apiService.getBookReviews(bookId).subscribe({
      next: (reviews: ReviewData[]) => {  
        this.reviews = reviews; 
      },
      error: (err) => {
        console.error('Error fetching reviews:', err);
        alert('Error fetching reviews.');
      }
    });
    
    
  }

  nzbrat() {
    this.userService.getProfile
  }

  addToCart() {
    const userId = this.userService.user?._id;
    // this.cartService.addToCart(this.product);
    if (!userId) {
      alert("You must be logged in to add items to your cart!");
      return;
    }

    this.userService.user?.cart?.push(this.book._id)

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

