import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './dashboard/home/post-list/post-list.component';
import { TrendingCommunitiesComponent } from './side-panels/trending-communities/trending-communities.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PostComponent } from './dashboard/post/post.component';
import { ArticleComponent } from './dashboard/post/article/article.component';
import { AboutComponent } from './side-panels/about/about.component';
import { RulesComponent } from './side-panels/rules/rules.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentListComponent } from './dashboard/post/article/comment-list/comment-list.component';
import { CommentComponent } from './dashboard/post/article/comment-list/comment/comment.component';
import {CookieService} from 'ngx-cookie-service';
import {PostListItemComponent} from './dashboard/home/post-list/post-list-item/post-list-item.component';
import { PostVoterComponent } from './dashboard/home/post-list/post-list-item/post-voter/post-voter.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { ReplyEditorComponent } from './dashboard/post/article/comment-list/comment/reply-editor/reply-editor.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { CommentListSorterComponent } from './dashboard/post/article/comment-list-sorter/comment-list-sorter.component';
import { SubjedditComponent } from './dashboard/subjeddit/subjeddit.component';
import { PostListSorterComponent } from './dashboard/home/post-list-sorter/post-list-sorter.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    PostListComponent,
    TrendingCommunitiesComponent,
    HomeComponent,
    PostComponent,
    ArticleComponent,
    AboutComponent,
    RulesComponent,
    CommentListComponent,
    CommentComponent,
    PostListItemComponent,
    PostVoterComponent,
    ReplyEditorComponent,
    RelativeTimePipe,
    ShortNumberPipe,
    CommentListSorterComponent,
    SubjedditComponent,
    PostListSorterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    InfiniteScrollModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
