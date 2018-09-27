import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ListSubjeddit, NavbarService} from '../../services/navbar.service';
import {AuthenticationService} from '../../services/authentication.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbarService: NavbarService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService
  ) { }

  subjeddits: Observable<ListSubjeddit[]>;
  location: Location = location;

  ngOnInit() {
    this.subjeddits = this.navbarService.getSubscribedSubjeddits();
  }

  logOut() {
    this.authenticationService.removeToken();
    this.cookieService.delete('Token');

    this.router.navigate(['/login']);
  }

}
