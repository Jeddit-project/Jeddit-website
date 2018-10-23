import {Component, Input, OnInit} from '@angular/core';
import {UserComment} from '../user-comment-list.component';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  @Input() commentGroup: UserComment;

  constructor() { }

  ngOnInit() {
  }

}
