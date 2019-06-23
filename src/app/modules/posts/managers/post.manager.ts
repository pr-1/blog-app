import { Injectable } from '@angular/core';
import { PostRootState, getAllPosts, getIsPostLoading, getIsPostLoaded } from '../reducers/index.reducer';
import { PostService } from '../services/posts.service';
import { Post } from '@blog-app/models/post.model';
import {CreatePost, CreatePostComplete, FetchPost, FetchPostComplete} from '../actions/post.action';
import { Store } from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import { take, map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class PostManager {
  constructor(private _store: Store<PostRootState>,
              private _postService: PostService) {}
  // Store Selector Functions
  getIsPostLoading(): Observable<boolean> {
    return this._store.select(getIsPostLoading);
  }
  getIsPostLoaded(): Observable<boolean> {
    return this._store.select(getIsPostLoaded);
  }

  // Api requests

  fetchPosts(force = false): Observable<Post[]> {
    const isLoaded$ = this.getIsPostLoaded();
    const isLoading$ = this.getIsPostLoading();

    combineLatest(isLoaded$, isLoading$).pipe(
      take(1),
      map(([isLoaded, isLoading]) => isLoaded || isLoading),
      filter(res => !res || force),
      switchMap(() => {
        this._store.dispatch(new FetchPost());
        return this._postService.getPosts();
      })
    ).subscribe((posts: Post[]) => {
      console.log('post list is', posts);
      this._store.dispatch(new FetchPostComplete(posts));
    }, (err) => {
      console.log('error from backjend');
      this._store.dispatch(new FetchPostComplete([]));
    });

    return this._store.select(getAllPosts);
  }
  createPost(post) {
    this._store.dispatch(new CreatePost());
    this._postService.createPost(post).subscribe((res: Post) => {
      console.log('post created is', res);
      this._store.dispatch(new CreatePostComplete(res));
    });
  }
}
