import { Component, OnInit, APP_ID } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import {MovieModel} from 'src/app/models/movie.models';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {  
  
  movieList: MovieModel[];

  constructor(private movieDataService: MovieApiService) { }
  ngOnInit(){}


  searchMovies(input: string): void {
    this.movieDataService.search(input).subscribe(res => {     
      this.movieList = res.Search;
      console.log(input, this.movieList)
    });        
  }

}
