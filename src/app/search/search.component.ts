import { Component } from '@angular/core';
import { Movie } from '../entities';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  term = '';
  result: Movie[] = [];
  constructor(private service: MovieServiceService) {}
  doSearch(){
    if (this.term.length < 2) {
      this.result = [];
    }else{
      this.service.search(this.term).subscribe((data => this.result = data));
    }
  }
}
