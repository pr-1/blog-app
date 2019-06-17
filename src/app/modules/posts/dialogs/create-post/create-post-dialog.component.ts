import {Component, OnInit} from '@angular/core';
import {Post} from '@blog-app/models/post.model';
import {PostService} from '@blog-modules/posts/services/posts.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'blog-create-post',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent {
 constructor(public matDialogRef: MatDialogRef<CreatePostDialogComponent>) {}

}
