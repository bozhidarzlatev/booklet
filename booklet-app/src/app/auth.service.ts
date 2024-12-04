import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  checkLoginStatus(): boolean {
    const userData = localStorage.getItem('[user]');
    return userData !== null;
  }

}
