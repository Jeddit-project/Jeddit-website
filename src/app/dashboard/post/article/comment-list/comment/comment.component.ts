import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  collapsed = false;

  constructor() { }

  ngOnInit() {
  }
}
