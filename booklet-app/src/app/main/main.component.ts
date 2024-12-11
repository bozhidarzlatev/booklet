import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookToAdd } from '../types/book';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  books: Book[] = [];
  searchText: string = '';
  searchSubject: Subject<string> = new Subject<string>();

  get isBooksEmpty():boolean {
    return this.books.length === 0;
  }

    constructor(private apiService: ApiService, private userService: UserService) {
      this.searchSubject.pipe(
        debounceTime(500),  
        switchMap((searchText) => this.apiService.search(searchText))  
      ).subscribe((response: Book[]) => {
        console.log(`search result`, response);  
        this.books = response
      });
    }

  ngOnInit(): void {  

        
    this.apiService.allBooks().subscribe( books => {
       
        this.books = books
    })

  }

  searchInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const text = input.value
    if (text === '' || text === '#' ) {
      
      return 
    }

      this.searchText = text;
      this.searchSubject.next(text);
  }



}
