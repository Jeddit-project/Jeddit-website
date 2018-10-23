import {Component, Input, OnInit} from '@angular/core';


export class UserComment {
  id: number;
  created_at: number;
  updated_at: number;
  text: string;
  points: number;
  user: Poster;
  post: Post;
}

class Post {
  id: number;
  title: string;
  subjeddit: Subjeddit;
  poster: Poster
}

class Subjeddit {
  id: number;
  name: string;
}

class Poster {
  id: number;
  username: string;
}


@Component({
  selector: 'app-user-comment-list',
  templateUrl: './user-comment-list.component.html',
  styleUrls: ['./user-comment-list.component.css']
})
export class UserCommentListComponent implements OnInit {

  @Input() comments: UserComment[];

  constructor() { }

  ngOnInit() {
  }

}
