import {Component, Input, OnInit} from '@angular/core';
import {PostListComponent} from '../post-list/post-list.component';
import {Post} from '../../../services/post.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {updateQueryStringParameter} from '../../../helpers/url';


enum SortingType {
  TOP = 'top',
  NEW = 'new'
}


@Component({
  selector: 'app-post-list-sorter',
  templateUrl: './post-list-sorter.component.html',
  styleUrls: ['./post-list-sorter.component.css']
})
export class PostListSorterComponent implements OnInit {

  @Input() postList: PostListComponent;
  sortingType: string;

  constructor(private locationService: Location) {

    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('sort_by');

    if (type != null && Object.values(SortingType).includes(type)) {
      this.sortingType = type
    } else {
      this.sortingType = SortingType.TOP;
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType))
    }
  }

  ngOnInit() {
  }

  sortBy(type: string) {
    if (type !== this.sortingType) {
      this.sortingType = type;

      let compareFun: (a: Post, b: Post) => number;
      switch (this.sortingType) {
        case SortingType.TOP: {
          compareFun = (a: Post, b: Post) => b.points - a.points;
          break;
        }
        case SortingType.NEW: {
          compareFun = (a: Post, b: Post) => b.created_at - a.created_at;
          break;
        }
      }

      this.postList.posts.sort(compareFun);
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType))
    }
  }

}
