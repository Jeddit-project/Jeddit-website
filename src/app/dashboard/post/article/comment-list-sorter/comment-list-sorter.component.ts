import {Component, Input, OnInit} from '@angular/core';
import {CommentListComponent} from '../comment-list/comment-list.component';
import {Comment} from '../../../../services/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {updateQueryStringParameter} from '../../../../helpers/url';
import {Location} from '@angular/common';


enum SortingType {
  TOP = 'top',
  NEW = 'new',
  OLD = 'old'
}


@Component({
  selector: 'app-comment-sorter',
  templateUrl: './comment-list-sorter.component.html',
  styleUrls: ['./comment-list-sorter.component.css']
})
export class CommentListSorterComponent implements OnInit {

  @Input() commentList: CommentListComponent;
  sortingType: string;

  static recursivelySortComments(comments: [Comment], compareFn: (a: Comment, b: Comment) => number) {
    comments.sort(compareFn);

    for (const comment of comments) {
      this.recursivelySortComments(comment.replies, compareFn);
    }
  }

  constructor(private locationService: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('sort_by');

    if (type != null && Object.values(SortingType).includes(type)) {
      this.sortingType = type
    } else {
      this.sortingType = SortingType.TOP;
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType))
    }

    this.commentList.commentsFetched.subscribe(() => {
      this.sortBy(type, true);
    })
  }

  sortBy(type: string, force: boolean = false) {
    if (force || type !== this.sortingType) {
      this.sortingType = type;

      let compareFun: (a: Comment, b: Comment) => number;
      switch (this.sortingType) {
        case SortingType.TOP: {
          compareFun = (a: Comment, b: Comment) => b.points - a.points;
          break;
        }
        case SortingType.NEW: {
          compareFun = (a: Comment, b: Comment) => b.created_at - a.created_at;
          break;
        }
        case SortingType.OLD: {
          compareFun = (a: Comment, b: Comment) => a.created_at - b.created_at;
          break;
        }
      }

      CommentListSorterComponent.recursivelySortComments(this.commentList.comments, compareFun);
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType))
    }
  }
}
