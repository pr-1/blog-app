import { Action as NgrxAction } from '@ngrx/store';
import {User} from '@blog-app/models/user.model';

export interface Action extends NgrxAction {
  payload?: any;
}

export enum BlogActionTypes {
  LOGGED_IN_USER_COMPLETE = '[LOGIN] Fetch User Complete',
}

export class SetLoginUser implements Action {
  readonly type = BlogActionTypes.LOGGED_IN_USER_COMPLETE;
  constructor(public payload: User) {}
}
