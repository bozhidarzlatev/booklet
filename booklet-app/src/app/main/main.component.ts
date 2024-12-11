import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookToAdd } from '../types/book';
import { ApiService } from '../api.service';
import { log } from 'console';
import { UserService } from '../user/user.service';

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

    constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit(): void {  

        
    this.apiService.allBooks().subscribe( books => {
       
        this.books = books
    })

  }

  searchInput(input: Event) {
    // const input = event.target as HTMLInputElement;
    // this.apiService.search(input.value).subscribe((response) => {
      // console.log(response);
      
      // console.log(input) // Logs the updated input value on every keystroke
    // })
  }


}
