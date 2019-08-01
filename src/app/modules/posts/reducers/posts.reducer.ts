import { Post } from '@blog-app/models/post.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@blog-modules/core/actions/index.action';
import { PostActionTypes } from '../actions/post.action';

export interface PostState extends EntityState<Post> {
  isLoading: boolean;
  isLoaded: boolean;
}
export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => post._id,
  sortComparer: false,
});
const initialState: PostState = postAdapter.getInitialState({
  isLoading: false,
  isLoaded: false,
});
export function postReducer(state = initialState, action: Action): PostState {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS: {
      return postAdapter.removeAll({
        ...state,
        isLoading: true,
        isLoaded: false
      });
    }
    case PostActionTypes.FETCH_POSTS_COMPLETE: {
      const posts = action.payload as Post[];
      console.log('in reducer posts', posts);
      return {
        ...postAdapter.addAll(posts, state),
        isLoading: false,
        isLoaded: true
      };
    }
    case PostActionTypes.CREATE_POST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PostActionTypes.CREATE_POST_COMPLETE: {
      return {
        ...state,
        ...postAdapter.addOne(action.payload, state),
        isLoading: false
      };
    }
    case PostActionTypes.DELETE_POST: {
      return {
        ...postAdapter.removeOne(action.payload, state)
      };
    }
    default:
    return state;
  }
}

export const _getIsPostLoading = (state: PostState) => state.isLoading;
export const _getIsPostLoaded = (state: PostState) => state.isLoaded;
