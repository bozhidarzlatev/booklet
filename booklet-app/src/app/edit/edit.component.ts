import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../types/book';
import { log } from 'console';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { httpValidator } from '../utils/http.validator';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  book = {} as Book;

  constructor(  private apiService: ApiService, private route: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];
    
    this.apiService.getSingleBook(bookId).subscribe({
      next: (book) => {
          this.book = book;
  
          this.addForm.patchValue({
              imageUrl: this.book.imageUrl,
              title: this.book.title,
              author: this.book.author,
              genre: this.book.genre,
              year: String(this.book.year),
              price: String(this.book.price),
              description: this.book.description
          });
  
      },
      error: (err) => {
          console.error('Error fetching book:', err);
      }
  });
  
  }


  
  addForm = new FormGroup({
    imageUrl: new FormControl('', [Validators.required, Validators.minLength(15), httpValidator()]),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5)]),
    genre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    year: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2024)]),
    price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(600)]),

  })


  isFieldTextMissing(controlName: string) {
    return (
      this.addForm.get(controlName)?.touched &&
      this.addForm.get(controlName)?.errors?.['required']
    );
  }

    
  isNotMinLength(controlName: string) {
    return (
      this.addForm.get(controlName)?.touched &&
      this.addForm.get(controlName)?.errors?.['minlength']
    );
  }

  get isUrlNotValid() {
    return (
      this.addForm.get('profileImg')?.touched &&
      this.addForm.get('profileImg')?.errors?.['httpValidator']
    );
  }

  isBetweenLength(controlName: string) {
    return (
      this.addForm.get(controlName)?.touched &&
      this.addForm.get(controlName)?.errors?.['minlength'] || 
      this.addForm.get(controlName)?.errors?.['maxlength']  
    );
  }

      
  isBetween(controlName: string) {
    return (
      this.addForm.get(controlName)?.touched &&
      this.addForm.get(controlName)?.errors?.['min'] ||
      this.addForm.get(controlName)?.errors?.['max'] 
    );
  }




  editBook() {
    if (this.addForm.invalid) {
      return
    }

    const {
      imageUrl,
      title,
      author,
      genre,
      year,
      price,
      description,
    } = this.addForm.value

    const yearNum = Number(year)
    const priceNum = Number(price)
    

    
    const owner =  this.book.owner
   
 
    
      this.apiService.editBook(this.book._id, imageUrl!, title!, author!, genre!  ,yearNum!, priceNum!,  description!, owner! ).subscribe(() => {
        this.router.navigate([`/all/details/${this.book._id}`])
      })

      

  }

}
