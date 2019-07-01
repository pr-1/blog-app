import { NgModule } from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostsRoutingModule} from './posts-routing.module';
import {MaterialModule} from '@blog-modules/shared/material.module';
import {PostCardComponent} from '@blog-modules/posts/components/post-card/post-card.component';
import {SharedModule} from '@blog-modules/shared/shared.module';
import {PostService} from '@blog-modules/posts/services/posts.service';
import {CoreModule} from '@blog-modules/core/core.module';
import {CreatePostDialogComponent} from '@blog-modules/posts/dialogs/create-post/create-post-dialog.component';
import { StoreModule } from '@ngrx/store';
import { postsRootReducer } from './reducers/index.reducer';
import { PostManager } from './managers/post.manager';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    CreatePostDialogComponent
  ],
  imports: [
    PostsRoutingModule,
    SharedModule,
    StoreModule.forFeature('posts', postsRootReducer)
  ],
  providers: [
    PostService,
    PostManager
  ],
  entryComponents: [
    CreatePostDialogComponent
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
