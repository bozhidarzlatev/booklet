import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { User } from '../../types/user';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cardItems: Book[] = []
  totalPrice: number = 0;
  title: string = 'Shopping Cart'

  constructor(private userService: UserService, private apiService: ApiService, private router: Router) {}

  user: User  | null = null;

  get cartLength() {
    return this.userService?.user?.cart;
  }

  userId: string | undefined = undefined

  ngOnInit(): void {
    this.userId = this.userService.user?._id

    this.apiService.getCartData().subscribe((data)=>{
      this.cardItems = data    

      data.forEach(element => {     
        this.totalPrice += element.price
      });
    })

    
      
  }


  placeOrder(): void {
    this.apiService.placeOrder(this.userId!, this.cardItems!, this.totalPrice!).pipe(
      switchMap(() => {
        return this.userService.getProfile(); 
      })
    ).subscribe({
      next: (profile) => {
        
        this.router.navigate(['/']);
      },
      error: (err) => {
      }
    });
  }

}
