import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookToAdd } from './types/book';

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

}
