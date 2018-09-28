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
  subjeddit: Subjeddit;
  poster: Poster;

  title: string;
  text?: string;
  points: number;
  comments: number;
}


@Injectable({
  providedIn: 'root'
})
export class UserFeedService {
  selectedPost: Post;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  fetchFeedList(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/api/feed', {headers: createTokenHeader(this.authenticationService)})
  }
}
