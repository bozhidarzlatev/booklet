import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookToAdd, ReviewData } from './types/book';
import { parseArgs } from 'util';
import { Orders } from './types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  addNewBook(imageUrl: string, title: string, author: string, genre: string, year: number, price: number, description: string, owner: string) {
    const payload = {imageUrl, title, author, genre  ,year, price,  description, owner}

    return this.http.post<BookToAdd>('/api/books/add', payload)
    
  }

  allBooks() {
    return this.http.get<Book[]>('/api/books/all')
  }

  getSingleBook(bookId: string) {
    return this.http.get<Book>(`/api/books/details/${bookId}`)
  }

  addToCart(bookId: string, ownerId: string) {
    return this.http.post(`/api/user/cart`, {bookId, ownerId})
  }

  placeOrder(userId: string, orderData: Book[] , totalPrice: number) {
    return this.http.post('/api/user/order', {userId, orderData, totalPrice})
  }  

  getSingleOrder(orderId: string) {
    return this.http.get<Orders>(`/api/user/order/${orderId}`)
  }


  addReview(review: string, rating: number, bookId: string) {
    return this.http.post('/api/reviews', {review , rating, bookId})
  }

  getBookReviews(bookId: string): Observable<ReviewData[]> {
    
    return this.http.get<ReviewData[]>(`/api/reviews/${bookId}`)
  }


}
