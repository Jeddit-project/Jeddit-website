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

  fetchFeedList(offset: number, sort_by: string = 'top'): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/feed?offset=${offset}&sort_by=${sort_by}`, {headers: createTokenHeader(this.authenticationService)})
  }

  fetchSubjedditPosts(subjeddit: string, offset: number, sort_by: string = 'top') {
    return this.http.get<Post[]>(`http://localhost:8080/api/subjeddit/${subjeddit}/posts?offset=${offset}&sort_by=${sort_by}`, {headers: createTokenHeader(this.authenticationService)});
  }

  fetchUserPosts(username: string, offset: number, sort_by: string = 'top') {
    return this.http.get<[Post]>(`http://localhost:8080/api/user/${username}/posts?offset=${offset}&sort_by=${sort_by}`, {headers: createTokenHeader(this.authenticationService)});
  }
}
