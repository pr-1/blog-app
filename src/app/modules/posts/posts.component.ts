import {Component, OnInit} from '@angular/core';
import {Post} from '@blog-app/models/post.model';
import {PostService} from '@blog-modules/posts/services/posts.service';
import {MatDialog} from '@angular/material';
import {CreatePostDialogComponent} from '@blog-modules/posts/dialogs/create-post/create-post-dialog.component';
import { PostManager } from './managers/post.manager';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  constructor(private _postManager: PostManager, public dialog: MatDialog) {}
  ngOnInit() {
    this._postManager.getIsPostLoading().subscribe((res) => this.isLoading = res);
    this._postManager.fetchPosts().subscribe((res) => {
      console.log('fetch posts subscribe');
      this.posts = res;
    });
  }
  openCreatePostDialog() {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (!!result) {
        this.createPost(result);
      }
    });
  }
  createPost(post: any) {
    this._postManager.createPost(post);
  }
  deletePost(id: string) {}
  updatePost(id: string, update: Partial<Post>) {}
}
