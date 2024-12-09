import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { AuthentticataComponent } from './authentticata/authentticata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent , AuthentticataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor( private router: Router, private activateRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd),
    map(()=> this.activateRoute),
   map(route => {
    while (route.firstChild) route = route.firstChild;
    return route;
   }),
   mergeMap(route => route.data)
  )
  .subscribe(data =>{
    if (data['title']) {
      this.titleService.setTitle(data['title']);
    }
  });
  }
}
