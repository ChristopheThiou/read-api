import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movie: Movie[] = [];
  constructor(private service: MovieServiceService) {}
  ngOnInit(): void {
    this.service.fetchAll().subscribe((data) => (this.movie = data));
  }
  handleSubmit(movie:Movie){
    this.service.add(movie).subscribe((data) => (movie = data));
    this.movie.push(movie);
  }
}
