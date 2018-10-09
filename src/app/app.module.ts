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
import { UserFeedComponent } from './dashboard/home/user-feed/user-feed.component';
import { TrendingCommunitiesComponent } from './dashboard/home/side-panels/trending-communities/trending-communities.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PostComponent } from './dashboard/post/post.component';
import { ArticleComponent } from './dashboard/post/article/article.component';
import { AboutComponent } from './dashboard/post/side-panels/about/about.component';
import { RulesComponent } from './dashboard/post/side-panels/rules/rules.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentListComponent } from './dashboard/post/article/comment-list/comment-list.component';
import { CommentComponent } from './dashboard/post/article/comment-list/comment/comment.component';
import {CookieService} from 'ngx-cookie-service';
import {FeedPostComponent} from './dashboard/home/user-feed/feed-post/feed-post.component';
import { PostVoterComponent } from './dashboard/home/user-feed/feed-post/post-voter/post-voter.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { ReplyEditorComponent } from './dashboard/post/article/comment-list/comment/reply-editor/reply-editor.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { CommentSorterComponent } from './dashboard/post/article/comment-sorter/comment-sorter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    UserFeedComponent,
    TrendingCommunitiesComponent,
    HomeComponent,
    PostComponent,
    ArticleComponent,
    AboutComponent,
    RulesComponent,
    CommentListComponent,
    CommentComponent,
    FeedPostComponent,
    PostVoterComponent,
    ReplyEditorComponent,
    RelativeTimePipe,
    ShortNumberPipe,
    CommentSorterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
