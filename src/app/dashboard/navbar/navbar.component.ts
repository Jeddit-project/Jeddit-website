import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ListSubjeddit, NavbarService} from '../../services/navbar.service';
import {AuthenticationService} from '../../services/authentication.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../helpers/token';
import {PostService} from '../../services/post.service';
import {Location} from '@angular/common';


class UserInfo {
  username: string;
  first_name: string;
  last_name: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService: NavbarService,
              private router: Router,
              public authenticationService: AuthenticationService,
              private cookieService: CookieService,
              private postService: PostService,
              private locationService: Location) {}

  subjeddits: Observable<ListSubjeddit[]>;
  location = location;

  ngOnInit() {
    this.subjeddits = this.navbarService.getSubscribedSubjeddits();

    // this.userInfo = this.authenticationService.userInfo.subscribe(
    //   value => this.userInfo = value
    // )
    // this.userInfo = this.authenticationService.userInfo;

    // console.log('uu' + this.authenticationService.userInfo.username);

    // this.userInfo = this.authenticationService.userInfo
    //   this.http.get<UserInfo>(`http://localhost:8080/api/user/me/info`, {headers: createTokenHeader(this.authenticationService)})
    //     .subscribe(value => {
    //       this.userInfo = value;
    //     })
  }



  logOut() {
    this.authenticationService.removeToken();
    this.cookieService.delete('Token');

    this.router.navigate(['/login']);
  }

  home() {
    this.postService.selectedPost = null;
    this.router.navigate(['/']);
    this.locationService.go('/');
  }

}
