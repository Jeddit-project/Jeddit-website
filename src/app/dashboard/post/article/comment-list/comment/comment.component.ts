import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../../services/comment.service';
import {createTokenHeader} from '../../../../../helpers/token';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../../../../services/authentication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  collapsed = false;
  toggleReply = false;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  upvote() {
    if (this.comment.vote === 'UPVOTE') {
      this.comment.vote = 'NONE';
      this.comment.points -= 1;

    } else if (this.comment.vote === 'NONE') {
      this.comment.vote = 'UPVOTE';
      this.comment.points += 1

    } else if (this.comment.vote === 'DOWNVOTE') {
      this.comment.vote = 'UPVOTE';
      this.comment.points += 2
    }

    this.http.post('http://localhost:8080/api/vote/comment', {
      'id': this.comment.id,
      'vote_type': this.comment.vote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }

  downvote() {
    if (this.comment.vote === 'DOWNVOTE') {
      this.comment.vote = 'NONE';
      this.comment.points += 1

    } else if (this.comment.vote === 'NONE') {
      this.comment.vote = 'DOWNVOTE';
      this.comment.points -= 1

    } else if (this.comment.vote === 'UPVOTE') {
      this.comment.vote = 'DOWNVOTE';
      this.comment.points -= 2
    }

    this.http.post('http://localhost:8080/api/vote/comment', {
      'id': this.comment.id,
      'vote_type': this.comment.vote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }
}
