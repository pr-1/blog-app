import { Component, OnInit } from '@angular/core';
import { Post } from '@blog-app/models/post.model';
import { PostService } from '@blog-modules/posts/services/posts.service';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'blog-create-post',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {
  createPostForm: FormGroup;
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  constructor(public matDialogRef: MatDialogRef<CreatePostDialogComponent>) {}
  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: this.title,
      description: this.description
    });
  }
  onSubmit() {
    this.matDialogRef.close(this.createPostForm.value);
  }
}
