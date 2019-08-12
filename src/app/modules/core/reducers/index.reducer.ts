import { User } from '@blog-app/models/user.model';
import {Action, BlogActionTypes} from '../actions/index.action';

export interface BlogState {
  loggedInUser: LoggedInUserState;
}

export const reducers = {
  loggedInUser: loginReducer
};
export interface LoggedInUserState {
  user: User;
  isLoading: boolean;
  isLoaded: boolean;
}
export function loginReducer(state: LoggedInUserState, action: Action): LoggedInUserState {
  switch (action.type) {
    case BlogActionTypes.LOGGED_IN_USER_COMPLETE: {
      return {
        ...state,
        user: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
