import {Component, Input, OnInit} from '@angular/core';
import {CommentListComponent} from '../comment-list/comment-list.component';
import {Comment} from '../../../../services/comment.service';

@Component({
  selector: 'app-comment-sorter',
  templateUrl: './comment-sorter.component.html',
  styleUrls: ['./comment-sorter.component.css']
})
export class CommentSorterComponent implements OnInit {

  @Input() commentList: CommentListComponent;
  sortingType = 'TOP';

  static recursivelySortComments(comments: [Comment], compareFn: (a: Comment, b: Comment) => number) {
    comments.sort(compareFn);

    for (const comment of comments) {
      this.recursivelySortComments(comment.replies, compareFn);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  sortBy(type: string) {
    if (type !== this.sortingType) {
      this.sortingType = type;

      let compareFun: (a: Comment, b: Comment) => number;
      switch (this.sortingType) {
        case 'TOP': {
          compareFun = (a: Comment, b: Comment) => b.points - a.points;
          break;
        }
        case 'NEW': {
          compareFun = (a: Comment, b: Comment) => b.created_at - a.created_at;
          break;
        }
        case 'OLD': {
          compareFun = (a: Comment, b: Comment) => a.created_at - b.created_at;
          break;
        }
      }

      CommentSorterComponent.recursivelySortComments(this.commentList.comments, compareFun);
    }
  }
}
