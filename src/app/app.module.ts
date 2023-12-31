import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { HomeComponent } from './home/home.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    HomeComponent,
    FormMovieComponent,
    SingleMovieComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
