import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string = null;

  constructor(private http: HttpClient) { }

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
      success.next(true)
    }, error => {
      success.next(false)
    });

    return success
  }

  removeToken() {
    this.token = null;
  }
}
