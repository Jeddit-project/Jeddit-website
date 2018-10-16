import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {createTokenHeader} from '../helpers/token';
import {CommentListSorterComponent} from '../dashboard/post/article/comment-list-sorter/comment-list-sorter.component';
import {Observable} from 'rxjs';


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

  comments: [Comment];

  fetchComments(postId: number): Observable<[Comment]> {
    return this.http.get<[Comment]>(`http://localhost:8080/api/post/${postId}/comments`,
      this.authenticationService.token != null ? {headers: createTokenHeader(this.authenticationService)} : {})
  }
}
