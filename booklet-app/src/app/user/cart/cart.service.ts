import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cartItems: any[] = [];
  // private cartItemCount = new BehaviorSubject<number>(0);

  // // Observable to watch the cart item count
  // cartItemCount$ = this.cartItemCount.asObservable();

  // constructor() {}

  // // Add item to the cart
  // addToCart(item: any): void {
  //   this.cartItems.push(item);
  //   this.updateCartCount();
  // }

  // // Remove item from the cart
  // removeFromCart(item: any): void {
  //   const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
  //   if (index !== -1) {
  //     this.cartItems.splice(index, 1);
  //     this.updateCartCount();
  //   }
  // }

  // // Get the cart items
  // getCartItems(): any[] {
  //   return this.cartItems;
  // }

  // // Update the cart item count
  // private updateCartCount(): void {
  //   this.cartItemCount.next(this.cartItems.length);
  // }

}
