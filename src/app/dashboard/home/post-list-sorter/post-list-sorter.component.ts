import {Component, Input, OnInit} from '@angular/core';
import {PostListComponent} from '../post-list/post-list.component';
import {Location} from '@angular/common';
import {updateQueryStringParameter} from '../../../helpers/url';
import {BehaviorSubject} from 'rxjs';


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
  sortingType: BehaviorSubject<string>;

  constructor(private locationService: Location) {

    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('sort_by');

    if (type != null && Object.values(SortingType).includes(type)) {
      this.sortingType = new BehaviorSubject<string>(type)
    } else {
      this.sortingType = new BehaviorSubject<string>(SortingType.TOP);
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType.getValue()))
    }
  }

  ngOnInit() {
  }

  sortBy(type: string) {
    if (type !== this.sortingType.getValue()) {
      this.sortingType.next(type);
      this.locationService.replaceState(updateQueryStringParameter(this.locationService.path(), 'sort_by', this.sortingType.getValue()))
    }
  }

}
