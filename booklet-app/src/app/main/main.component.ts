import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookToAdd } from '../types/book';
import { ApiService } from '../api.service';
import { log } from 'console';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  books: Book[] = [];
  
  get isBooksEmpty():boolean {
    return this.books.length === 0;
  }

    constructor(private apiService: ApiService) {}

  ngOnInit(): void {  

        
    this.apiService.allBooks().subscribe( books => {
       console.log(books);
       
        this.books = books
    })

  }


}
