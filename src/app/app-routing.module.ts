import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { CreateBooksAndStoriesComponent } from './admin/create-books-and-stories/create-books-and-stories.component';
import { ListAccountComponent } from './admin/list-account/list-account.component';
import { ListBooksAndStoriesComponent } from './admin/list-books-and-stories/list-books-and-stories.component';
import { DetailsOrderComponent } from './user/details-order/details-order.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // admin
  { path: 'admin/list-account', component: ListAccountComponent },
  { path: 'admin/create-account', component: CreateAccountComponent },
  {
    path: 'admin/List-BookAndStories',
    component: ListBooksAndStoriesComponent,
  },
  {
    path: 'admin/Create-BookAndStories',
    component: CreateBooksAndStoriesComponent,
  },
  // user
  {
    path: 'user/Profile',
    component: ProfileComponent,
  },
  {
    path: 'user/Details-Order-BookAndStories',
    component: DetailsOrderComponent,
  },
  {
    path: 'user/List-Favorite-BookAndStories',
    component: DetailsOrderComponent,
  },
  {
    path: 'user/List-BookAndStories',
    component: ListBooksAndStoriesComponent,
  },
  { path: '**', redirectTo: '/register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
