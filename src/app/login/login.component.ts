import { Component, OnInit } from '@angular/core';
// import {HttpClient} from "@angular/common/http";


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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user: UserLogin) {
    // let requestthis.http.post(SERVER_URL, user, {withCredentials: true})
    console.log(user);
  }
}
