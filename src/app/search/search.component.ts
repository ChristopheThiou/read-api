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
  doSearch(term:string){
    {
      this.service.search(term).subscribe((data => this.result = data));
    }
  }
}
