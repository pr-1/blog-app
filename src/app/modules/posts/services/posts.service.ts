import { Injectable } from '@angular/core';
import {BlogApiService} from '@blog-services/blog-app-api.service';
import {Observable} from 'rxjs';
import {Post} from '@blog-app/models/post.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService extends BlogApiService {
  constructor(public http: HttpClient) {
    super(http);
  }
  getPosts(): Observable<Post[]> {
    return this.get<Post[]>('/posts', false);
  }
  createPost(post): Observable<Post> {
    return this.post('/posts', true, post);
  }
  deletePost(id): Observable<{success: boolean}> {
    return this.delete(`/posts/${id}`, true);
  }
}
