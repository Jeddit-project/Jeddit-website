




// TODO Retain user information(first/last name, username) to be available when needed(navbar, making a comment etc.)






import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {createTokenHeader} from '../helpers/token';


export class UserInfo {
  username: string;
  first_name: string;
  last_name: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  userInfo = new BehaviorSubject<UserInfo>(null);

  constructor(private http: HttpClient, private cookieService: CookieService) {
    if (this.cookieService.check('Token')) {
      this.setToken(this.cookieService.get('Token'));
    }
  }

  setToken(token: string) {
    this.token = token;

    this.http.get<UserInfo>('http://localhost:8080/api/user/me/info', {headers: createTokenHeader(this)}).subscribe(
      value => this.userInfo.next(value)
    )
  }

  removeToken() {
    this.token = null;
    this.userInfo.next(null)
  }

  loggedIn(): boolean {
    return this.token != null
  }

  obtainNewToken(username: string, password: string): Subject<boolean> {
    class Token {
      token: string
    }

    const success = new Subject<boolean>();

    this.http.post<Token>('http://localhost:8080/auth', {
      'username': username,
      'password': password
    }).subscribe(resp => {
      this.setToken(resp.token);

      console.log(this.token);
      success.next(true);

    }, error => {
      success.next(false)
    });

    return success
  }
}
