import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookToAdd, ReviewData } from './types/book';
import { Orders } from './types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  addNewBook(imageUrl: string, title: string, author: string, genre: string, year: number, price: number, description: string, owner: string) {
    const priceData = price.toFixed(2)
    
    const payload = {imageUrl, title, author, genre  ,year, price: priceData,  description, owner}
    return this.http.post<BookToAdd>('/api/books/add', payload)
    
  }

  editBook(bookId: string, imageUrl: string, title: string, author: string, genre: string, year: number, price: number, description: string, owner: string) {
    const priceData = price.toFixed(2)
    
    const payload = {bookId, imageUrl, title, author, genre  ,year, price: priceData,  description, owner}
    return this.http.put<BookToAdd>(`/api/books/edit/${bookId}`, payload)
    
  }

  deleteBook(bookId: string) {
    return this.http.delete(`/api/books/delete/${bookId}`)
  }

  allBooks() {
    return this.http.get<Book[]>('/api/books/all')
  }


  search(input: string) {
    return this.http.get<Book[]>(`/api/search/${input}`)
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

  getTopRatedBooks() {
    return this.http.get<Book[]>('/api/books/top')
  }

  getCartData() {
    return this.http.get<Book[]>(`/api/user/cart/data`)
  }

  getReview() {
    return this.http.get<ReviewData[]>(`/api/reviews/user`)
  }


}
