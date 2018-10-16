import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentService} from '../../../../services/comment.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {PostService} from '../../../../services/post.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: [Comment];
  commentsFetched = new Subject();

  constructor(private commentService: CommentService,
              private postService: PostService) {}

  ngOnInit() {
    // this.fetchComments();
    // console.log('CE?');
  }

  fetchComments() {
    this.commentService.fetchComments(this.postService.selectedPost.id).subscribe(value => {
      this.comments = value;
      this.commentsFetched.next();

      // console.log('DA ' + this.comment_sorter.sortingType);
      // this.comment_sorter.sortBy(this.comment_sorter.sortingType);
    })
  }

}
