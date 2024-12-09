import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  book = {} as Book;

  constructor( private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) {}


  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];
    
    this.apiService.getSingleBook(bookId).subscribe( book => {
      this.book = book
    })
    

  }


  addToCart() {
    const userId = this.userService.user?._id;
    console.log(`tova lie: `, this.userService.user);
    
    if (!userId) {
      alert("You must be logged in to add items to your cart!");
      return;
    }

    // Add book to cart and then update user profile
    this.apiService.addToCart(this.book._id, userId).subscribe(
      (response) => {
        console.log('Book added to cart successfully!', response);
        
        // Update the user profile after adding to the cart
        this.userService.getProfile().subscribe(
          (user) => {
            console.log('Profile updated:', user);
            console.log(`azzz `, this.userService.user);
            
            // If you need to do something further with the updated profile, you can do it here
          },
          (error) => {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
          }
        );
      },
      (error) => {
        console.error('Error adding book to cart:', error);
        alert('Failed to add book to cart.');
      }
    );
  }

}

