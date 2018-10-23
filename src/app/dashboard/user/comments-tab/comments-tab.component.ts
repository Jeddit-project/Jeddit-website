import { Component, OnInit } from '@angular/core';
import {UserComment} from './user-comment-list/user-comment-list.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments-tab',
  templateUrl: './comments-tab.component.html',
  styleUrls: ['./comments-tab.component.css']
})
export class CommentsTabComponent implements OnInit {

  username: string;
  comments: UserComment[] = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {

    this.username = this.route.parent.snapshot.paramMap.get('username');
  }

  ngOnInit() {
    this.http.get<UserComment[]>(`http://localhost:8080/api/user/${this.username}/comments`).subscribe(value => {
      this.comments = value;
    })
  }

}
