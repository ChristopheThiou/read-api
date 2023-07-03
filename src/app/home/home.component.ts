import { Component } from '@angular/core';
import { Movie } from '../entities';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movie:Movie[] = [];
  constructor(private service:MovieServiceService){}
  getData(){
    this.service.fetchAll()
    .subscribe(data => this.movie = data)
  }
}
