import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post, PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts: Post[];
  @Input() showSubjeddit: boolean;

  ngOnInit() {
  }
}
