import { Injectable } from '@angular/core';
import {PostListSorterComponent} from '../../home/post-list-sorter/post-list-sorter.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsTabService {

  postSorter = new BehaviorSubject<PostListSorterComponent>(null);

  constructor() { }
}
