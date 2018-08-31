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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
