import { Component, OnInit, signal } from '@angular/core';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit{
  errorMsg = signal('');
  errorTxt = signal('');
  errorCust = signal('');
  constructor(private errorMsgService: ErrorMessageService) {}

  ngOnInit(): void {
    this.errorMsgService.apiError$.subscribe((err: any) => {
      
      this.errorMsg.set(err?.status);
      this.errorTxt.set(err?.statusText);
      this.errorCust.set(err?.error.error);
    });
  }

}
