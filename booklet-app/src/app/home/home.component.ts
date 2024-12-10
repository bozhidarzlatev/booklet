import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Book} from '../types/book';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  constructor(private apiSErvice: ApiService ){}

  ngOnInit(): void {

    this.apiSErvice.getTopRatedBooks().subscribe((books) => {
      this.books = books
      
    })


  }

}
