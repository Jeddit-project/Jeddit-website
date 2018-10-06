import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {createTokenHeader} from '../helpers/token';


class User {
  id: number;
  username: string;
}

export class Comment {
  id: number;
  text: string;
  created_at: number;
  updated_at: number;
  points: number;
  vote: string;

  user: User;
  replies: [Comment]
}


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getComments(postId: number): Observable<[Comment]> {
    return this.http.get<[Comment]>(`http://localhost:8080/api/post/${postId}/comments`,
      this.authenticationService.token != null ? {headers: createTokenHeader(this.authenticationService)} : {})
  }
}
