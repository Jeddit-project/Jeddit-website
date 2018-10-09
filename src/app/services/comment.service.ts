import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {createTokenHeader} from '../helpers/token';
import {CommentSorterComponent} from '../dashboard/post/article/comment-sorter/comment-sorter.component';


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

  fetchComments(postId: number) {
    this.http.get<[Comment]>(`http://localhost:8080/api/post/${postId}/comments`,
      this.authenticationService.token != null ? {headers: createTokenHeader(this.authenticationService)} : {}).subscribe(value => {

        // Sort comments by highest points(TOP)
        CommentSorterComponent.recursivelySortComments(value, (a, b) => b.points - a.points);
        this.comments = value;
    })
  }
}
