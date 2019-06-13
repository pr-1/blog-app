import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'posts',
    loadChildren:
      () => import('./modules/posts/posts.module')
          .then((module) => module.PostsModule)
  },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
