import { Component, OnInit } from '@angular/core';
import {UserFeedService} from '../../../services/user-feed.service';
import {Comment, CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  comments: [Comment];

  constructor(public userFeedService: UserFeedService, private commentService: CommentService) { }

  ngOnInit() {

    // FIXME remove afterwards
    // this.userFeedService.selectedPost = {
    //   id: 1,
    //   subjeddit: {
    //     id: 1,
    //     name: 'Terraira',
    //     image: 'da',
    //   },
    //   poster: {
    //     id: 1,
    //     username: 'roscaalex19'
    //   },
    //
    //   title: 'test',
    //   text: 'test',
    //   points: 34,
    //   comments: 55
    // };

    console.log(this.userFeedService.selectedPost.id);
    this.commentService.getComments(this.userFeedService.selectedPost.id).subscribe(value => this.comments = value)
  }

}
