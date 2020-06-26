import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private omdb = 'http://www.omdbapi.com/?s=';
  constructor(private http: Http) { }

  search(input: string): Observable<any> {
    return this.http.get(this.omdb + input + '&apikey=2930680a&plot=full')
      .map(response => {
        return response.json() as string
    })
  }
  
}
