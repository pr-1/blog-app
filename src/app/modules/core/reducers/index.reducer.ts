import { User } from '@blog-app/models/user.model';
import { Action } from '../actions/index.action';

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
    default: {
      return state;
    }
  }
}
