import { Injectable } from '@angular/core';
import { PostRootState, getAllPosts, getIsPostLoading, getIsPostLoaded } from '../reducers/index.reducer';
import { PostService } from '../services/posts.service';
import { Post } from '@blog-app/models/post.model';
import { FetchPost, FetchPostComplete } from '../actions/post.action';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class PostManager {
  constructor(private _store: Store<PostRootState>,
              private _postService: PostService) {}

  fetchPosts(force = false) {
    const isLoaded$ = this._store.select(getIsPostLoaded);
    const isLoading$ = this._store.select(getIsPostLoading);

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
    });

    return this._store.select(getAllPosts);
  }
}
