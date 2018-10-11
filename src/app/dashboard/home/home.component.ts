import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Post, UserFeedService} from '../../services/user-feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feedPosts: Post[];

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private cookieService: CookieService,
              private userFeedService: UserFeedService) {

    if (!this.authenticationService.loggedIn()) {
      if (this.cookieService.check('Token')) {
        this.authenticationService.setToken(this.cookieService.get('Token'));
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit() {
    this.userFeedService.fetchFeedList().subscribe(value => this.feedPosts = value);
  }
}
