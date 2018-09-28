import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    if (this.cookieService.check('Token')) {
      this.token = this.cookieService.get('Token');
    }
  }

  tokenExists(): boolean {
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
      this.token = resp.token;

      console.log(this.token);
      success.next(true);

    }, error => {
      success.next(false)
    });

    return success
  }

  removeToken() {
    this.token = null;
  }
}
