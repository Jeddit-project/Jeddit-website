import {Component, Input, OnInit} from '@angular/core';
import {createTokenHeader} from '../../../../../helpers/token';
import {Post} from '../../../../../services/post.service';
import {AuthenticationService} from '../../../../../services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-voter',
  templateUrl: './post-voter.component.html',
  styleUrls: ['./post-voter.component.css']
})
export class PostVoterComponent implements OnInit {

  @Input() post: Post;
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  upvote() {
    if (this.post.vote === 'UPVOTE') {
      this.post.vote = 'NONE';
      this.post.points -= 1;

    } else if (this.post.vote === 'NONE') {
      this.post.vote = 'UPVOTE';
      this.post.points += 1

    } else if (this.post.vote === 'DOWNVOTE') {
      this.post.vote = 'UPVOTE';
      this.post.points += 2
    }

    this.http.post('http://localhost:8080/api/vote/post', {
      'id': this.post.id,
      'vote_type': this.post.vote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }

  downvote() {
    if (this.post.vote === 'DOWNVOTE') {
      this.post.vote = 'NONE';
      this.post.points += 1

    } else if (this.post.vote === 'NONE') {
      this.post.vote = 'DOWNVOTE';
      this.post.points -= 1

    } else if (this.post.vote === 'UPVOTE') {
      this.post.vote = 'DOWNVOTE';
      this.post.points -= 2
    }

    this.http.post('http://localhost:8080/api/vote/post', {
      'id': this.post.id,
      'vote_type': this.post.vote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }
}
