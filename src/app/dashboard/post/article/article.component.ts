import { Component, OnInit } from '@angular/core';
import {UserFeedService} from '../../../services/user-feed.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(public userFeedService: UserFeedService) { }

  ngOnInit() {
  }

}
