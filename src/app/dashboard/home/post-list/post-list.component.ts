import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post, UserFeedService} from '../../../services/user-feed.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private userFeedService: UserFeedService) { }

  feedList: Post[];

  ngOnInit() {
    this.userFeedService.fetchFeedList().subscribe(value => this.feedList = value);
  }
}
