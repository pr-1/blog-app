import { BlogState } from '@blog-modules/core/reducers/index.reducer';
import { PostState, postReducer, postAdapter, _getIsPostLoading, _getIsPostLoaded } from './posts.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
posts: PostState;
}

export interface PostRootState extends BlogState {
  posts: State;
}

export const getPostRootState = createFeatureSelector<State>('posts');

export const postsRootReducer = {
  posts: postReducer
};

// Post State

export const getPostState = createSelector(
  getPostRootState,
  state => {
    return state.posts;
  }
);

export const {
  selectIds: getPostIds,
  selectEntities: getPostEntities,
  selectAll: getPosts,
  selectTotal: getTotalPosts,
} = postAdapter.getSelectors(getPostState);

export const getAllPosts = (state: PostRootState) => getPosts(state);
export const getIsPostLoading = createSelector(getPostState, _getIsPostLoading);
export const getIsPostLoaded = createSelector(getPostState, _getIsPostLoaded);
