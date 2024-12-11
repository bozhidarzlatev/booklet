import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  cartCount: number = 0;

  constructor(private userService: UserService, private router: Router) {
   
  }

    get isLoggedIn(): boolean {
      return this.userService.isLogged
    }
    
    get username() {
      return this.userService?.user?.username
    }
    
    get profileImg() {
      return this.userService?.user?.profileImg
    }
  
    get cartLength() {
      return this.userService?.user?.cart?.length
    }

    ngOnInit(): void {

    }
  

    
  logout(){
    localStorage.removeItem('[user]');
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
