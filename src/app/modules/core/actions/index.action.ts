import { Action as NgrxAction } from '@ngrx/store';

export interface Action extends NgrxAction {
  payload?: any;
}
