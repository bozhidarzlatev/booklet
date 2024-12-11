import { Injectable } from '@angular/core';
import { User, UserProfileResponse } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user$$ = new BehaviorSubject<User | null>(null) 
user$ = this.user$$.asObservable();


USER_KEY = '[user]';
user: User | null = null;

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
    .post<User>('/api/auth/login', {username, password})
    .pipe(tap((user) => {
      this.user$$.next(user);  
       
      })
    );    
  }

  logout() {
    return this.http
      .get('/api/auth/logout', {})
      .pipe(tap((user) => {
        this.user$$.next(null);
      })
    )
  }


  register(username: string, email: string, profileImg: string,  password: string, rePassword: string ) {
    
    return this.http
    .post<User>('/api/auth/register', {username, email, profileImg, password, rePassword})
    .pipe(tap((user) => {
      this.user$$.next(user);
    })
  );
  }


  getProfile() {
    return this.http.get<User>('/api/user/profile')
    .pipe(tap((user) => {
      this.user$$.next(user);      
    }));
  }

  getUserProfileData(userId: string): Observable<UserProfileResponse> {

    return this.http.get<UserProfileResponse>('/api/user/userdata', { 
      params: { userId } 
    });
  }
  

  

}