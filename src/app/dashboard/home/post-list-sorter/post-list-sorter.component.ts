import {Component, Input, OnInit} from '@angular/core';
import {PostListComponent} from '../post-list/post-list.component';
import {Post} from '../../../services/user-feed.service';

@Component({
  selector: 'app-post-list-sorter',
  templateUrl: './post-list-sorter.component.html',
  styleUrls: ['./post-list-sorter.component.css']
})
export class PostListSorterComponent implements OnInit {

  @Input() postList: PostListComponent;
  sortingType = 'TOP';

  constructor() { }

  ngOnInit() {
  }

  sortBy(type: string) {
    if (type !== this.sortingType) {
      this.sortingType = type;

      let compareFun: (a: Post, b: Post) => number;
      switch (this.sortingType) {
        case 'TOP': {
          compareFun = (a: Post, b: Post) => b.points - a.points;
          break;
        }
        case 'NEW': {
          compareFun = (a: Post, b: Post) => b.created_at - a.created_at;
          break;
        }
      }

      this.postList.feedList.sort(compareFun);
    }
  }

}
