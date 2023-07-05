import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css'],
})
export class SingleMovieComponent implements OnInit {
  movie: Movie;
  editing = false;
  constructor(
    private route: ActivatedRoute,
    private service: MovieServiceService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.service
        .fetchOne(params['id'])
        .subscribe((data) => (this.movie = data))
    );
  }
  updateMovie(movie: Movie) {
    this.service.update(movie).subscribe((data) => {
      this.movie = data;
      this.editing = false;
    });
  }
}
