import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {UserFeedService} from '../../services/user-feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private location: Location,
              public userFeedService: UserFeedService) { }

  ngOnInit() {
  }

  goBack(event: Event) {
    if (event.target === event.currentTarget) {
      this.location.back();
    }
  }

}
