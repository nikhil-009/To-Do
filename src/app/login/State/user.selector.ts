import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

const getLoginState = createFeatureSelector<UserState>('userlogin');

export const getLogin = createSelector(getLoginState, (state) => {
  return state.userId;
});
