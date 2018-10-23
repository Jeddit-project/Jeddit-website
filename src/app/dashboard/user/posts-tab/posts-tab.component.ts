import { Component, OnInit } from '@angular/core';
import {Post, PostService} from '../../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {PostsTabService} from './posts-tab.service';

@Component({
  selector: 'app-posts-tab',
  templateUrl: './posts-tab.component.html',
  styleUrls: ['./posts-tab.component.css']
})
export class PostsTabComponent implements OnInit {

  username: string;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private postsTabService: PostsTabService) {

    this.username = this.route.parent.snapshot.paramMap.get('username');
  }

  ngOnInit() {
    this.postsTabService.postSorter.subscribe(value => {
      if (value != null) {
        value.sortingType.subscribe(sorting => {
          this.postService.fetchUserPosts(this.username, 0, sorting).subscribe(posts => this.posts = posts);
        });
      }
    })
  }

}
