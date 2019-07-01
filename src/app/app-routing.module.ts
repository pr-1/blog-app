import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsModule} from '@blog-modules/posts/posts.module';

const routes: Routes = [
  { path: 'posts',
    loadChildren: PostsModule
  },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
