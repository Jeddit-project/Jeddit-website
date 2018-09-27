import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  user: User;
  replies: [Comment]
}


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<[Comment]> {
    return this.http.get<[Comment]>(`http://localhost:8080/api/post/${postId}/comments`)
  }
}
