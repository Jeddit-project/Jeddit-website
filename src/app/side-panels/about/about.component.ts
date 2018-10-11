import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../helpers/token';
import {AuthenticationService} from '../../services/authentication.service';


class SubjedditInfo {
  id: number;
  name: string;
  image: string;
  description: string;
  subscribed: boolean;
  subscribers: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() subjedditName: string;

  info: SubjedditInfo;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.http.get<SubjedditInfo>(`http://localhost:8080/api/subjeddit/${this.subjedditName}/info`, {headers: createTokenHeader(this.authenticationService)}).subscribe(
      value => this.info = value
    )
  }

  subscribe() {
    this.info.subscribed = true;
    this.http.post(`http://localhost:8080/api/subjeddit/${this.subjedditName}/subscribe`, null, {headers: createTokenHeader(this.authenticationService)}).subscribe();
  }

  unsubscribe() {
    this.info.subscribed = false;
    this.http.post(`http://localhost:8080/api/subjeddit/${this.subjedditName}/unsubscribe`, null, {headers: createTokenHeader(this.authenticationService)}).subscribe();
  }
}
