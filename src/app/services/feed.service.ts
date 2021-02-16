import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private http: HttpClient ) { } 

  cargarFeedIndecon(){

    //const url = `https://www.indecon.online/last`;
    const url = `http://localhost:8080/indecon`;

    return this.http.get(url)

  }

  cargarFeedHackerNews(){

    //const url = `http://hn.algolia.com/api/v1/search?tags=front_page`;
    const url = `http://localhost:8085/hackernews`;

    return this.http.get(url)

  }
}
