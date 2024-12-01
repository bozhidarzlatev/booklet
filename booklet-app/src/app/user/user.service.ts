import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
// import { Theme } from '../types/theme';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private user$$ = new BehaviorSubject<UserForAuth | null>(null) 
private user$ = this.user$$.asObservable();


USER_KEY = '[user]';
user: UserForAuth | null = null;

get isLogged(): boolean {
  return !!this.user;
}

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user= user
    });
  }

  loging(email: string, password: string) {

    return this.http
    .post<UserForAuth>('/api/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)))
    
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user) );
  }

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(null)))
  }


  register(username: string, email: string, profileImg: string,  password: string, rePassword: string ) {
    
    return this.http
    .post<UserForAuth>('/api/auth/register', {username, email, profileImg, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)))
  }


  getProfile() {
    return this.http.get<UserForAuth>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }


  // createdTheme(themeName: string, postText: string) {
  //   const payload = {themeName, postText};
  //   return this.http.post<Theme>('/api/themes', payload)
  // }
}
