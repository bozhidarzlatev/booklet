import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { title } from 'process';
import {  ApiService } from '../api.service';
import { log } from 'console';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

    constructor ( private apiService: ApiService, private router: Router) {}

  addForm = new FormGroup({
    imageUrl: new FormControl('', [Validators.required, Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5)]),
    genre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    year: new FormControl('', [Validators.required, Validators.min(1900)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),

  })

  addBook() {
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
    

    
    const owner =  localStorage.getItem(`[user]`)?.split('"')[3];   
    console.log({
      imageUrl,
      title,
      author,
      genre,
      year,
      price,
      description,
    });

    

    
      this.apiService.addNewBook(imageUrl!, title!, author!, genre!  ,yearNum!, priceNum!,  description!, owner! ).subscribe(() => {
        this.router.navigate(['/all'])
      })

      

  }

}
