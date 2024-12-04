import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  constructor(private userService: UserService, private router: Router) {}

    get isLoggedIn(): boolean {
      if (typeof localStorage !== 'undefined') {
        const user = localStorage.getItem('[user]');

        return user ? !!JSON.parse(user) : false;
      }
      return false; 
    }
    
  

  logout(){
    localStorage.removeItem('[user]');
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
