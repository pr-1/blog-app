import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '@blog-app/app.component';
import {PostsComponent} from '@blog-modules/posts/posts.component';
import {PostsModule} from '@blog-modules/posts/posts.module';

const routes: Routes = [
  { path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PostsComponent,
      }
    ]
  },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PostsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
