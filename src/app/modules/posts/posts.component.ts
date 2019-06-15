import {Component, OnInit} from '@angular/core';
import {Post} from '@blog-app/models/post.model';
import {PostService} from '@blog-modules/posts/services/posts.service';

@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
}
