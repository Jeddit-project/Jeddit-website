import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

class Poster {
  id: number;
  username: string;
}

class Subjeddit {
  id: number;
  name: string;
  image: string;
}

export class Post {
  id: number;
  subjeddit: Subjeddit;
  poster: Poster;

  title: string;
  text?: string;
  points: number;
  comments: number;
}


let mockPosts: Post[] = [
  // {
  //   id: 0,
  //   subjeddit: {
  //     id: 1,
  //     name: 'Terraria',
  //     image: '/assets/terraria-subjeddit-logo.png'
  //   },
  //   poster: {
  //     id: 2,
  //     name: 'AutoModerator'
  //   },
  //   title: 'Weekly Questions Thread 08/25/2018',
  //   text: 'Welcome to the Weekly Questions Thread! Feel free to ask questions such as help with the game, ' +
  //   'build advice, issues with the game, or whatever Terraria related questions you have. If you are able to help ' +
  //   'out your fellow Terrarians, feel free to lend your assistance! Please remember to include any relevant ' +
  //   'information when asking your questions.\n' +
  //   'Remember to check the sidebar for general links! Additional game information available in the wiki.',
  //   points: 9001,
  //   comments: 34
  // }
];


@Injectable({
  providedIn: 'root'
})
export class UserFeedService {
  selectedPost: Post;

  constructor(private http: HttpClient) {

    // for (const i of [1, 2, 3, 4, 5, 6, 8, 7, 9, 0]) {
    //   mockPosts.push({
    //     id: 0,
    //     subjeddit: {
    //       id: 1,
    //       name: 'Terraria',
    //       image: '/assets/terraria-subjeddit-logo.png'
    //     },
    //     poster: {
    //       id: 2,
    //       name: 'AutoModerator'
    //     },
    //     title: 'Weekly Questions Thread 08/25/2018',
    //     text: 'Welcome to the Weekly Questions Thread! Feel free to ask questions such as help with the game, ' +
    //     'build advice, issues with the game, or whatever Terraria related questions you have. If you are able to help ' +
    //     'out your fellow Terrarians, feel free to lend your assistance! Please remember to include any relevant ' +
    //     'information when asking your questions.\n' +
    //     'Remember to check the sidebar for general links! Additional game information available in the wiki.',
    //     points: 9001,
    //     comments: 34
    //   });
    // }
  }

  fetchFeedList(): Observable<Post[]> {
    // return of(mockPosts)
    return this.http.get<Post[]>('http://localhost:8080/test')
  }
}
