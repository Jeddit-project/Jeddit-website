import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserFeedComponent } from './home/user-feed/user-feed.component';
import { TrendingCommunitiesComponent } from './home/side-panels/trending-communities/trending-communities.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    UserFeedComponent,
    TrendingCommunitiesComponent,
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
