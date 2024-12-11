import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {

  constructor(private router: Router, private apiService:ApiService, private route: ActivatedRoute) {}

  reviewForm = new FormGroup({
    review: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(150)]),
    rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)])
  })


  addReview(){
    if (this.reviewForm.invalid) {
      console.error(this.reviewForm.invalid)
      return 
    }

    const bookId = this.route.snapshot.params['bookId']

    const { review , rating } = this.reviewForm.value
    const ratingNum = Number(rating)

    this.apiService.addReview(review! , ratingNum!, bookId!).subscribe(()=>{
      this.router.navigate([`/all/details/${bookId}`])
    })


  }
}
