import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AddService } from './add.service';
import { log } from 'console';
import { title } from 'process';
import {  ApiServise } from '../api.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

    constructor ( private apiServive: ApiServise, private router: Router) {}

  addForm = new FormGroup({
    imageUrl: new FormControl('', [Validators.required, Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5)]),
    genre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    year: new FormControl('', [Validators.required, Validators.min(1900)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),

  })

  addBook() {
    console.log(this.addForm.value);
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

      this.apiServive.addNewBook(imageUrl!, title!, author!, genre! , year! , price, description )
        
      

  }

}
