import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { ListAccountComponent } from './admin/list-account/list-account.component';
import { CreateBooksAndStoriesComponent } from './admin/create-books-and-stories/create-books-and-stories.component';
import { ListBooksAndStoriesComponent } from './admin/list-books-and-stories/list-books-and-stories.component';
import { ItemBooksAndStoriesComponent } from './admin/item-books-and-stories/item-books-and-stories.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DetailsOrderComponent } from './user/details-order/details-order.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [AppComponent, CreateAccountComponent, ListAccountComponent, CreateBooksAndStoriesComponent, ListBooksAndStoriesComponent, ItemBooksAndStoriesComponent, LoginComponent, RegisterComponent, ProfileComponent, DetailsOrderComponent],
  imports: [BrowserModule, AppRoutingModule, AppRoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
