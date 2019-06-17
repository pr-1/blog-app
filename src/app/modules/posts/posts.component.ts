import {Component, OnInit} from '@angular/core';
import {Post} from '@blog-app/models/post.model';
import {PostService} from '@blog-modules/posts/services/posts.service';
import {MatDialog} from '@angular/material';
import {CreatePostDialogComponent} from '@blog-modules/posts/dialogs/create-post/create-post-dialog.component';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService, public dialog: MatDialog) {}
  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
  openCreatePostDialog() {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: Post) => {
      console.log('The dialog was closed');
      if (!!result) {
        this.createPost(result);
      }
    });
  }
  createPost(post: Post) {
  }
  deletePost(id: string) {}
  updatePost(id: string, update: Partial<Post>) {}
}
