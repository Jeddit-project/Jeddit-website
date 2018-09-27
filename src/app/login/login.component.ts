import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


interface UserLogin {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  incorrect = false;

  constructor(private router: Router, private authenticationService: AuthenticationService, private cookieService: CookieService) { }

  ngOnInit() {
    if (this.authenticationService.tokenExists()) {
      this.router.navigate(['/']);
    } else {
      if (this.cookieService.check('Token')) {
        this.authenticationService.token = this.cookieService.get('Token');
        this.router.navigate(['/']);
      }
    }
  }

  onSubmit(user: UserLogin) {
    console.log(user);

    this.incorrect = false;
    this.authenticationService.obtainNewToken(user.username, user.password).subscribe(success => {
      this.incorrect = !success;

      if (success) {
        this.cookieService.set('Token', this.authenticationService.token);
        this.router.navigate(['/']);
      }
    });
  }
}
