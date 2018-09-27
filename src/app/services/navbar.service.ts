import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

interface IListSubjeddit {
  image: string
  name: string
}

export class ListSubjeddit implements IListSubjeddit {
  image: string;
  name: string;
}

const demoList: ListSubjeddit[] = [
  {image: 'nada1', name: 'all'},
  {image: 'nada2', name: 'androiddev'},
  {image: 'nada3', name: 'programming'},
];

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getSubscribedSubjeddits(): Observable<IListSubjeddit[]> {
    return of(demoList)
  }
}
