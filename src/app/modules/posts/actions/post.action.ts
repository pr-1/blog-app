import { Action } from '@blog-modules/core/actions/index.action';
import { Post } from '@blog-app/models/post.model';

export enum PostActionTypes {
  FETCH_POSTS = '[Post] Fetch Posts',
  FETCH_POSTS_COMPLETE = '[Post] Fetch Posts Complete',
  CREATE_POST = '[Post] Create Post',
  CREATE_POST_COMPLETE = '[Post] Create Post Complete',
  DELETE_POST = '[Post] Delete Post'
}

export class FetchPost implements Action {
  readonly type = PostActionTypes.FETCH_POSTS;
  constructor() {}
}

export class FetchPostComplete implements Action {
  readonly type = PostActionTypes.FETCH_POSTS_COMPLETE;
  constructor(public payload: Post[]) {}
}

export class CreatePostComplete implements Action {
  readonly type = PostActionTypes.CREATE_POST_COMPLETE;
  constructor(public payload: Post) {}
}
export class CreatePost implements Action {
  readonly type = PostActionTypes.CREATE_POST;
  constructor() {}
}

export class DeletePost implements Action {
  readonly type = PostActionTypes.DELETE_POST;
  // Payload is id
  constructor(public payload: string) {}
}
