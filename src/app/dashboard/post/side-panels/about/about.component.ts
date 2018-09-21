import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


class SubjedditInfo {
  id: number;
  name: string;
  image: string;
  description: string;
  subscribers: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() subjedditId: number;

  info: SubjedditInfo;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<SubjedditInfo>(`http://localhost:8080/api/subjeddit/${this.subjedditId}/info`).subscribe(
      value => this.info = value
    )
  }

}
