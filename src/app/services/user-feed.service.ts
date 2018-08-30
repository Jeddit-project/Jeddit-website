import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


class Poster {
  id: number;
  name: string;
}

class Subjeddit {
  id: number;
  name: string;
  image_url: string;
}

export class Post {
  id: number;
  subjeddit: Subjeddit;
  poster: Poster;
  time: number;

  title: string;
  text_content?: string;
  image_content_url?: string;
  points: number;
  comments: number;
}


const mockPosts: Post[] = [
  {
    id: 0,
    subjeddit: {
      id: 1,
      name: 'Terraria',
      image_url: '/assets/terraria-subjeddit-logo.png'
    },
    poster: {
      id: 2,
      name: 'AutoModerator'
    },
    title: 'Weekly Questions Thread 08/25/2018',
    time: 1535624703,
    text_content: 'Welcome to the Weekly Questions Thread! Feel free to ask questions such as help with the game, ' +
    'build advice, issues with the game, or whatever Terraria related questions you have. If you are able to help ' +
    'out your fellow Terrarians, feel free to lend your assistance! Please remember to include any relevant ' +
    'information when asking your questions.\n' +
    'Remember to check the sidebar for general links! Additional game information available in the wiki.',
    points: 9001,
    comments: 34
  }
];


@Injectable({
  providedIn: 'root'
})
export class UserFeedService {

  constructor() { }

  fetchFeedList(): Observable<Post[]> {
    return of(mockPosts)
  }
}
