import {Component, Input, OnInit} from '@angular/core';
import {Post, PostService} from '../../../../services/post.service';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-feed-post',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() showSubjeddit: boolean;

  constructor(private postService: PostService,
              private http: HttpClient,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    // function toSnakeCase(string: String): String {
    //   let s = string.replace(/[^\w\s]/g, '');
    //   s = s.replace(/\s+/g, ' ');
    //   return s.toLowerCase().split(' ').join('_');
    // }
    //
    // const snakeString = toSnakeCase('Weekly Questions Thread 08/25/2018');
    //
    // console.log(snakeString);
    //
    // let finalString = '';
    // for (const token of snakeString.split('_')) {
    //   if (finalString.length + token.length <= 40) {
    //     finalString += token + '_';
    //   } else {
    //     break;
    //   }
    // }
    //
    // finalString = finalString.slice(0, -1);
    // console.log(finalString);
    //
    //
    // const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // let randomId = '';
    // for (let i = 0; i < 6; i++) {
    //   console.log('chosen: ' + Math.floor(Math.random() * chars.length));
    //   randomId += chars[Math.floor(Math.random() * chars.length)];
    // }
    //
    // console.log(randomId);
  }

  selectPost() {
    // sort_by workaround, post snapshots dashboard url with previous sort_by, forcing 'top' by default
    this.location.go(`/j/${this.post.subjeddit.name }/${this.post.random_id }/${this.post.title_id }?sort_by=top`);
    this.postService.selectedPost = this.post;
    // this.router.navigate()
  }
}
