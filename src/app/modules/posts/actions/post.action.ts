import { Action } from '@blog-modules/core/actions/index.action';
import { Post } from '@blog-app/models/post.model';

export enum PostActionTypes {
  FETCH_POSTS = '[Post] Fetch Posts',
  FETCH_POSTS_COMPLETE = '[Post] Fetch Posts Complete',
  CREATE_POST = '[Post] Create Post',
  CREATE_POST_COMPLETE = '[Post] Create Post Complete'
}

export class FetchPost implements Action {
  readonly type = PostActionTypes.FETCH_POSTS;
  constructor() {}
}

export class FetchPostComplete implements Action {
  readonly type = PostActionTypes.FETCH_POSTS_COMPLETE;
  constructor(public payload: Post[]) {}
}