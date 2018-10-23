import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Post, PostService} from '../../services/post.service';
import {PostListSorterComponent} from './post-list-sorter/post-list-sorter.component';
import {PostListComponent} from './post-list/post-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('post_sorter') postSorter: PostListSorterComponent;

  feedPosts: Post[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private cookieService: CookieService,
              public postService: PostService) {

    if (!this.authenticationService.loggedIn()) {
      if (this.cookieService.check('Token')) {
        this.authenticationService.setToken(this.cookieService.get('Token'));
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit() {
    this.postSorter.sortingType.subscribe(value => {
      this.postService.fetchFeedList(0, value)
        .subscribe(v => this.feedPosts = v);
    });
  }

  onScroll() {
    this.postService.fetchFeedList(this.feedPosts.length, this.postSorter.sortingType.getValue())
      .subscribe(value => this.feedPosts.push(...value));
  }
}
