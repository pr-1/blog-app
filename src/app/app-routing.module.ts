import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '@blog-app/app.component';

const routes: Routes = [
  { path: '',
    component: AppComponent,
    children: [
      {
        path: '',
      loadChildren: () => import('./modules/posts/posts.module')
                          .then((module) => module.PostsModule)
      }
    ]
  },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
