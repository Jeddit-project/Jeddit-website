import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Post, PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../helpers/token';
import {AuthenticationService} from '../../services/authentication.service';
import * as $ from 'jquery/dist/jquery.min.js';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @ViewChild('root') root: ElementRef;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              public postService: PostService) {

    const subjeddit = this.route.snapshot.paramMap.get('subjeddit');
    const random_id = this.route.snapshot.paramMap.get('random_id');
    const title_id = this.route.snapshot.paramMap.get('title_id');

    if (!this.postService.selectedPost) {
      this.http.get<Post>(`http://localhost:8080/api/post/${subjeddit}/${random_id}/${title_id}`,
        {headers: createTokenHeader(authenticationService)}).subscribe(value => {

          this.postService.selectedPost = value;
        });
    }
  }

  ngOnInit() {
    $('body').addClass('noscroll');
    $(this.root.nativeElement).attr('aria-hidden', false);
  }

  goBack(event: Event) {
    if (event.target === event.currentTarget) {
      this.postService.selectedPost = null;
      this.location.back();
    }
  }

  @HostListener('document:keypress', ['$event'])
  goBackOnEscape(event: KeyboardEvent) {
    console.log(event);

    if (event.key === 'Escape') {
      this.postService.selectedPost = null;
      this.location.back();
    }
  }

  ngOnDestroy() {
    $('body').removeClass('noscroll');
    $(this.root.nativeElement).attr('aria-hidden', true);
    this.postService.selectedPost = null;
  }
}
