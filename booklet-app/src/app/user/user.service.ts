import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { log } from 'node:console';
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

  login(username: string, password: string) {

    return this.http
    .post<UserForAuth>('/api/auth/login', {username, password})
    .pipe(tap((user) => {
      this.user$$.next(user);   
      console.log(username);
      
      localStorage.setItem(this.USER_KEY, JSON.stringify({user: username}) );

    })
  
    );    
  }

  logout() {
    return this.http
      .get('/api/auth/logout', {})
      .pipe(tap((user) => {
        this.user$$.next(null);
        localStorage.removeItem(this.USER_KEY)
      })
    )
  }


  register(username: string, email: string, profileImg: string,  password: string, rePassword: string ) {
    
    return this.http
    .post<UserForAuth>('/api/auth/register', {username, email, profileImg, password, rePassword})
    .pipe(tap((user) => {
      this.user$$.next(user);
      localStorage.setItem(this.USER_KEY, JSON.stringify({user: username}) );
  })
  );
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
