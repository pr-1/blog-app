import { NgModule } from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostsRoutingModule} from './posts-routing.module';
import {MaterialModule} from '@blog-modules/shared/material.module';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsRoutingModule,
    MaterialModule
  ]
})
export class PostsModule { }
