import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Post, UserFeedService} from '../../services/user-feed.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../helpers/token';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private location: Location,
              private route: ActivatedRoute,
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              public userFeedService: UserFeedService) {

    const subjeddit = this.route.snapshot.paramMap.get('subjeddit');
    const random_id = this.route.snapshot.paramMap.get('random_id');
    const title_id = this.route.snapshot.paramMap.get('title_id');

    if (!this.userFeedService.selectedPost) {
      this.http.get<Post>(`http://localhost:8080/api/post/${subjeddit}/${random_id}/${title_id}`,
        {headers: createTokenHeader(authenticationService)}).subscribe(value => {

          this.userFeedService.selectedPost = value;
        });
    }
  }

  ngOnInit() {
  }

  goBack(event: Event) {
    if (event.target === event.currentTarget) {
      this.location.back();
    }
  }

}
