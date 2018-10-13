import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {createTokenHeader} from '../helpers/token';


class Poster {
  id: number;
  username: string;
}

class Subjeddit {
  id: number;
  name: string;
  image: string;
}

export class Post {
  id: number;
  created_at: number;
  updated_at: number;

  random_id: string;
  title_id: string;

  subjeddit: Subjeddit;
  poster: Poster;

  title: string;
  text?: string;
  points: number;
  vote: string;
  comments: number;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedPost: Post;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  fetchFeedList(offset: number): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/feed?offset=${offset}`, {headers: createTokenHeader(this.authenticationService)})
  }
}
