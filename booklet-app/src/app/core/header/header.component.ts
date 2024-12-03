import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}


  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }



ngOnInit(): void {
 
    console.log(this.userService.user);
    
  
}




  logout(){
    console.log(`logout clicked`);
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
