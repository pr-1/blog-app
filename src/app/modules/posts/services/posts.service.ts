import { Injectable } from '@angular/core';
import {BlogApiService} from '@blog-services/blog-app-api.service';
import {Observable} from 'rxjs';
import {Post} from '@blog-app/models/post.model';

@Injectable()
export class PostService extends BlogApiService {
  getPosts(): Observable<Post[]> {
    return this.get('/posts', true);
  }
}
