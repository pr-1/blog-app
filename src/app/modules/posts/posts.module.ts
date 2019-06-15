import { NgModule } from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostsRoutingModule} from './posts-routing.module';
import {MaterialModule} from '@blog-modules/shared/material.module';
import {PostCardComponent} from '@blog-modules/posts/components/post-card/post-card.component';
import {SharedModule} from '@blog-modules/shared/shared.module';
import {PostService} from '@blog-modules/posts/services/posts.service';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent
  ],
  imports: [
    PostsRoutingModule,
    SharedModule,
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
