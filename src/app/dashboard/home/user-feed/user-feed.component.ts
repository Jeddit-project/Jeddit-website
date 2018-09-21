import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post, UserFeedService} from '../../../services/user-feed.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  constructor(private userFeedService: UserFeedService) { }

  feedList: Observable<Post[]>;

  ngOnInit() {
    // console.log('FEED' + this.feedList);
    this.feedList = this.userFeedService.fetchFeedList();
    // console.log('FEED' + this.feedList);
  }

  selectPost(post: Post) {
    this.userFeedService.selectedPost = post;
  }

}
