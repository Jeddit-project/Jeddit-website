import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostListSorterComponent} from '../home/post-list-sorter/post-list-sorter.component';
import {PostsTabService} from './posts-tab/posts-tab.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('post_sorter') postSorter: PostListSorterComponent;

  username: string;

  constructor(private route: ActivatedRoute,
              private postsTabService: PostsTabService,
              public postService: PostService) {

    this.username = this.route.snapshot.paramMap.get('username');
  }

  ngOnInit() {
    this.postsTabService.postSorter.next(this.postSorter);
  }
}
