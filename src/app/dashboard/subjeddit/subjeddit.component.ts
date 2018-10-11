import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../services/user-feed.service';
import {createTokenHeader} from '../../helpers/token';
import {AuthenticationService} from '../../services/authentication.service';


class Subjeddit {
  id: number;
  name: string;
  image: string;
  description: string;
}


@Component({
  selector: 'app-subjeddit',
  templateUrl: './subjeddit.component.html',
  styleUrls: ['./subjeddit.component.css']
})
export class SubjedditComponent implements OnInit {

  subjeddit: Subjeddit;
  posts: Post[];

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const subjeddit = this.route.snapshot.paramMap.get('subjeddit');

    this.http.get<Subjeddit>(`http://localhost:8080/api/subjeddit/${subjeddit}/info`, {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
      this.subjeddit = value;
    });

    this.http.get<Post[]>(`http://localhost:8080/api/subjeddit/${subjeddit}/posts`, {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
      this.posts = value;
    })
  }

}
