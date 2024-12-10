import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { title } from 'process';
import {  ApiService } from '../api.service';
import { log } from 'console';
import { httpValidator } from '../utils/http.validator';

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
   

    
      this.apiService.addNewBook(imageUrl!, title!, author!, genre!  ,yearNum!, priceNum!,  description!, owner! ).subscribe(() => {
        this.router.navigate(['/all'])
      })

      

  }

}
