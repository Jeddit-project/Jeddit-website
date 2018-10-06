import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserFeedService} from '../../../services/user-feed.service';
import {Comment, CommentService} from '../../../services/comment.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AuthenticationService, UserInfo} from '../../../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../../helpers/token';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  editorClass = ClassicEditor;
  editor: ClassicEditor;

  @ViewChild('comment_btn') comment_btn: ElementRef;

  constructor(public userFeedService: UserFeedService,
              public commentService: CommentService,
              public authenticationService: AuthenticationService,
              private http: HttpClient) { }

  onReady(editor) {
    this.editor = editor;
  }

  onChange() {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = this.editor.getData();
    const text = tmp.textContent || tmp.innerText || '';

    // If whitespace
    const whitespace = (text.replace(/^\s+/, '').replace(/\s+$/, '') === '');
    this.comment_btn.nativeElement.disabled = whitespace;
  }

  comment() {
    this.http.post(`http://localhost:8080/api/post/${this.userFeedService.selectedPost.id}/comments`,
      {'text': this.editor.getData()},
      {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
        this.editor.setData('');
        this.commentService.fetchComments(this.userFeedService.selectedPost.id);
    })
  }

  ngOnInit() {
    // this.userInfo = this.authenticationService.userInfo
    // Array.from( this.editor.ui.componentFactory.names() );

    // FIXME remove afterwards
    // this.userFeedService.selectedPost = {
    //   id: 1,
    //   subjeddit: {
    //     id: 1,
    //     name: 'Terraira',
    //     image: 'da',
    //   },
    //   poster: {
    //     id: 1,
    //     username: 'roscaalex19'
    //   },
    //
    //   title: 'test',
    //   text: 'test',
    //   points: 34,
    //   vote: 'NONE',
    //   comments: 55,
    // };

    console.log(this.userFeedService.selectedPost.id);
    this.commentService.fetchComments(this.userFeedService.selectedPost.id)
  }
}
