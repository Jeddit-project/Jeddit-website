import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService, private cookieService: CookieService) {
    if (!this.authenticationService.tokenExists()) {
      if (this.cookieService.check('Token')) {
        this.authenticationService.token = this.cookieService.get('Token');
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit() {
  }
}
