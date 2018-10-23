import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PostComponent} from './dashboard/post/post.component';
import {HomeComponent} from './dashboard/home/home.component';
import {SubjedditComponent} from './dashboard/subjeddit/subjeddit.component';
import {UserComponent} from './dashboard/user/user.component';
import {PostListComponent} from './dashboard/home/post-list/post-list.component';
import {PostsTabComponent} from './dashboard/user/posts-tab/posts-tab.component';
import {CommentsTabComponent} from './dashboard/user/comments-tab/comments-tab.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'j/:subjeddit', component: SubjedditComponent},
    {path: 'j/:subjeddit/:random_id/:title_id', component: PostComponent},
    {path: 'user/:username', component: UserComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', component: PostsTabComponent},
      {path: 'comments', component: CommentsTabComponent}
    ]}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
