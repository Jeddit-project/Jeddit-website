import {Component, Input, OnInit} from '@angular/core';
import {Post, UserFeedService} from '../../../../services/user-feed.service';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../../../helpers/token';
import {AuthenticationService} from '../../../../services/authentication.service';


@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent implements OnInit {
  @Input() post: Post;
  currentVote = 'NONE';

  constructor(private userFeedService: UserFeedService, private http: HttpClient, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.currentVote = this.post.vote;
  }

  selectPost() {
    this.userFeedService.selectedPost = this.post;
  }

  upvote() {
    if (this.currentVote === 'UPVOTE') {
      this.currentVote = 'NONE';
      this.post.points -= 1;

    } else if (this.currentVote === 'NONE') {
      this.currentVote = 'UPVOTE';
      this.post.points += 1

    } else if (this.currentVote === 'DOWNVOTE') {
      this.currentVote = 'UPVOTE';
      this.post.points += 2
    }

    this.http.post('http://localhost:8080/api/vote/post', {
      'id': this.post.id,
      'vote_type': this.currentVote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }

  downvote() {
    if (this.currentVote === 'DOWNVOTE') {
      this.currentVote = 'NONE';
      this.post.points += 1

    } else if (this.currentVote === 'NONE') {
      this.currentVote = 'DOWNVOTE';
      this.post.points -= 1

    } else if (this.currentVote === 'UPVOTE') {
      this.currentVote = 'DOWNVOTE';
      this.post.points -= 2
    }

    this.http.post('http://localhost:8080/api/vote/post', {
      'id': this.post.id,
      'vote_type': this.currentVote
    }, {headers: createTokenHeader(this.authenticationService)}).subscribe()
  }
}
