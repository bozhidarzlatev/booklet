import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CartComponent } from './user/cart/cart.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'add', component: AddComponent, data: { title: 'Add new books' }},
    {path: 'all', children: [
        {path: '', component: MainComponent, data: { title: 'All books' }},
        {path: 'details/:bookId', component: DetailsComponent,  data: { title: 'Details' }},
    ]} ,
    {path: 'profile', children: [
        {path: '', component: ProfileComponent, data: { title: 'Profile page' }},
        {path: ':profileid/cart', component: CartComponent, data: { title: 'Items in cart' }},
        
    ]},
    {path: 'login', component: LoginComponent, data: { title: 'Login - Nice to see you again' }},
    {path: 'register', component: RegisterComponent, data: { title: 'Register and enjoy' }},
    {path: '404', component: ErrorComponent, data: { title: 'Error - Not found' }},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}

];
