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
import { OrdersComponent } from './user/orders/orders.component';
import { AddReviewComponent } from './reviews/add-review/add-review.component';
import { ErrorMessageComponent } from './core/error-message/error-message.component';
import { EditComponent } from './edit/edit.component';
import { ViewReviewComponent } from './user/view-review/view-review.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'add', component: AddComponent, data: { title: 'Add new books' }},
    {path: 'all', children: [
        {path: '', component: MainComponent, data: { title: 'All books' }},
        {path: 'details/:bookId', component: DetailsComponent,  data: { title: 'Details' }},
        {path: 'details/:bookId/review', component: AddReviewComponent,  data: { title: 'Add Review' }},
        {path: 'details/:bookId/edit', component: EditComponent,  data: { title: 'Edit book' }},
    ]} ,
    {path: 'profile', children: [
        {path: '', component: ProfileComponent, data: { title: 'Profile page' }},
        {path: 'cart', component: CartComponent, data: { title: 'Items in cart' }},
        {path: 'orders', component: OrdersComponent, data: { title: 'Your orders' }},
        {path: 'reviews', component: ViewReviewComponent, data: { title: 'Your reviews' }},
        
    ]},
    {path: 'login', component: LoginComponent, data: { title: 'Login - Nice to see you again' }},
    {path: 'register', component: RegisterComponent, data: { title: 'Register and enjoy' }},
    {path: 'error', component: ErrorMessageComponent, data: { title: 'Error' }},
    {path: '404', component: ErrorComponent, data: { title: 'Error - Not found' }},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}

];
