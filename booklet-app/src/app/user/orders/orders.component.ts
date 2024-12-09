import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../types/book';
import { UserService } from '../user.service';
import { ApiService } from '../../api.service';
import { Orders, User } from '../../types/user';
import { log } from 'console';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CartComponent, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orderItems: Orders[] = []

  constructor(private router: Router , private userService: UserService, private apiService: ApiService) {}

  title: string = 'Your Orders';
  user: User  | null = null;
  userId: string | undefined = undefined

  get cartLength() {
    return this.userService?.user?.orders;
  }


  ngOnInit(): void {
    this.userId = this.userService.user?._id
  
    this.cartLength?.forEach(item => 
    this.apiService.getSingleOrder(item).subscribe(response => {
      console.log(response);
      
      this.orderItems.push(response)
      
    })
  )
  console.log(this.orderItems);
  
    
}



}
