import { Injectable } from '@angular/core';
import { Movie } from './entities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  fetchAll(){
    return this.http.get<Movie[]>('http://127.0.0.1:8000/api/movie');
  }
  add(movie:Movie){
    return this.http.post<Movie>('http://127.0.0.1:8000/api/movie', movie);
  }
  delete(id:number){
    return this.http.delete<void>('http://127.0.0.1:8000/api/movie/'+id)
  }
  fetchOne(id:any){
    return this.http.get<Movie>('http://127.0.0.1:8000/api/movie/'+id);
  }
  update(movie:Movie){
    return this.http.patch<Movie>('http://127.0.0.1:8000/api/movie/'+movie.id, movie)
  }
  search(term:string){
    return this.http.get<Movie[]>('http://127.0.0.1:8000/api/movie/search/'+term);
  }
}
