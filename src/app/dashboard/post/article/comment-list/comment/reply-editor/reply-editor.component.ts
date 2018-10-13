import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {createTokenHeader} from '../../../../../../helpers/token';
import {PostService} from '../../../../../../services/post.service';
import {AuthenticationService} from '../../../../../../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Comment, CommentService} from '../../../../../../services/comment.service';


@Component({
  selector: 'app-reply-editor',
  templateUrl: './reply-editor.component.html',
  styleUrls: ['./reply-editor.component.css']
})
export class ReplyEditorComponent implements OnInit {

  @Input() comment: Comment;
  @Output() close = new EventEmitter();

  editorClass = ClassicEditor;
  editor: ClassicEditor;

  @ViewChild('comment_btn') comment_btn: ElementRef;

  constructor(public postService: PostService,
              public authenticationService: AuthenticationService,
              private http: HttpClient, private commentService: CommentService) { }

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

  postComment() {
    this.http.post(`http://localhost:8080/api/post/${this.postService.selectedPost.id}/comments`,
      {'text': this.editor.getData(), 'parent': this.comment.id},
      {headers: createTokenHeader(this.authenticationService)}).subscribe(value => {
      this.editor.setData('');
      this.commentService.fetchComments(this.postService.selectedPost.id);
    })
  }

  ngOnInit() {
  }

}
