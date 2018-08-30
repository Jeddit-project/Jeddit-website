import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ListSubjeddit, NavbarService} from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbarService: NavbarService
  ) { }

  subjeddits: Observable<ListSubjeddit[]>;
  location: Location = location;

  ngOnInit() {
    this.subjeddits = this.navbarService.getSubscribedSubjeddits();
  }

}
