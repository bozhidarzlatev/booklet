import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServise {

  constructor(private http: HttpClient) {}

  addNewBook(imageUrl: string, title: string, author: string, genre: string, year: number, price: number, description: string) {
    return console.log(`zdr`);
    
  }

}
