import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../entities';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent {
  movie:Movie = {title: '', duration: 0, released: '', resume: '' }
  @Output()
  formSubmit = new EventEmitter<Movie>();

  onSubmit() {
    this.formSubmit.emit({...this.movie});
  }
}
