import { Component, OnInit } from '@angular/core';


interface UserRegister {
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  password: string
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user: UserRegister) {
    console.log(user);
  }

}
