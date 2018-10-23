import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Post, PostService} from '../../services/post.service';
import {createTokenHeader} from '../../helpers/token';
import {AuthenticationService} from '../../services/authentication.service';
import {PostListSorterComponent} from '../home/post-list-sorter/post-list-sorter.component';


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

  @ViewChild('post_sorter') postSorter: PostListSorterComponent;

  subjeddit: Subjeddit;
  posts: Post[] = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              public postService: PostService) { }

  ngOnInit() {
    this.postSorter.sortingType.subscribe(value => console.log(value))

    const subjedditName = this.route.snapshot.paramMap.get('subjeddit');

    this.http.get<Subjeddit>(`http://localhost:8080/api/subjeddit/${subjedditName}/info`, {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
      this.subjeddit = value;
    });

    this.postSorter.sortingType.subscribe(() => {
      this.postService.fetchSubjedditPosts(subjedditName, 0).subscribe(value => {
        this.posts = value;
      })
    });
  }

  onScroll() {
    this.postService.fetchSubjedditPosts(this.subjeddit.name, this.posts.length, this.postSorter.sortingType.getValue()).subscribe(value => {
      this.posts.push(...value);
    })
  }

}
