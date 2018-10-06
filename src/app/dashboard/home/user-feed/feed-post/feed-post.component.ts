import {Component, Input, OnInit} from '@angular/core';
import {Post, UserFeedService} from '../../../../services/user-feed.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent implements OnInit {
  @Input() post: Post;

  constructor(private userFeedService: UserFeedService, private http: HttpClient) { }

  ngOnInit() {
  }

  selectPost() {
    this.userFeedService.selectedPost = this.post;
  }
}
