import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent {
  @Input()
  movie:Movie = {title: '', duration: 0, released: '', resume: '' }
  @Output()
  formSubmit = new EventEmitter<Movie>();

  onSubmit() {
    this.formSubmit.emit({...this.movie});
  }
}
