import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  book = {} as Book;

  constructor( private apiService: ApiService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];

    this.apiService.getSingleBook(bookId).subscribe( book => {
      this.book = book
    })
    

  }


}
