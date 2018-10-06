import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


interface UserRegister {
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  password: string;
  confirmation_password: string
}

class RegistrationResponse {
  success: boolean;
  token: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  INVALID = 'INVALID';
  ALREADY_USED = 'ALREADY_USED';
  OK = 'OK';

  nameInvalid = false;
  emailInvalid = false;
  emailAlreadyUsed = false;
  usernameInvalid = false;
  usernameAlreadyUsed = false;
  passwordInvalidLength = false;
  passwordsDontMatch = false;
  registrationFailed = false;

  validationHeaders = new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  });

  constructor(private router: Router, private authenticationService: AuthenticationService, private http: HttpClient, private cookieService: CookieService) {
    if (this.authenticationService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

  }

  validateName(name: string) {
    this.http.get<string>('http://localhost:8080/api/registration/validate_name',
      {params: {name}, responseType: 'text' as 'json'}).subscribe(value => {

      this.nameInvalid = value === this.INVALID
    })
  }

  validateEmail(email: string) {
    this.http.get<string>('http://localhost:8080/api/registration/validate_email',
      {params: {email}, responseType: 'text' as 'json'}).subscribe(value => {

      this.emailInvalid = value === this.INVALID;
      this.emailAlreadyUsed = value === this.ALREADY_USED
    })
  }

  validateUsername(username: string) {
    this.http.get<string>('http://localhost:8080/api/registration/validate_username',
      {params: {username}, responseType: 'text' as 'json'}).subscribe(value => {

      this.usernameInvalid = value === this.INVALID;
      this.usernameAlreadyUsed = value === this.ALREADY_USED
    })
  }

  validatePasswordLength(password: string) {
    this.passwordInvalidLength = !((password.length >= 8) && (password.length <= 20));
  }

  validateConfirmation(password: string, confirmation: string) {
    this.passwordsDontMatch = password !== confirmation;
  }

  onSubmit(user: UserRegister) {
    this.http.post<RegistrationResponse>('http://localhost:8080/api/registration/register', user).subscribe(resp => {
      if (resp.success) {
        this.registrationFailed = false;
        this.authenticationService.setToken(resp.token);
        this.cookieService.set('Token', resp.token);
        this.router.navigate(['/']);
      } else {
        this.registrationFailed = true;
      }
    })
  }

}
