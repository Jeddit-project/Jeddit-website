import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Comment, CommentService} from '../../../services/comment.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AuthenticationService, UserInfo} from '../../../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {createTokenHeader} from '../../../helpers/token';
import {CommentListComponent} from './comment-list/comment-list.component';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  editorClass = ClassicEditor;
  editor: ClassicEditor;
  @ViewChild('comment_btn') comment_btn: ElementRef;

  constructor(public postService: PostService,
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

    const isWhitespace = (text.replace(/^\s+/, '').replace(/\s+$/, '') === '');
    this.comment_btn.nativeElement.disabled = isWhitespace;
  }

  comment() {
    this.http.post(`http://localhost:8080/api/post/${this.postService.selectedPost.id}/comments`,
      {'text': this.editor.getData()},
      {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
        this.editor.setData('');
        this.commentService.fetchComments(this.postService.selectedPost.id);
    })
  }


  ngOnInit() {
    this.commentService.fetchComments(this.postService.selectedPost.id)
  }
}
