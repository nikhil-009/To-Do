import { createReducer, on } from '@ngrx/store';
import { userDat, userLogout } from './data.action';
import { initialState } from './data.state';

export const dataReducer = createReducer(
  initialState,
  on(userDat, (state, action) => {
    console.log('id:', action);
    //debugger;
    return {
      ...state,
      total: action.data,
    };
  }),
  on(userLogout, (state) => {
    return {
      ...state,
      total: 0,
    };
  })
);
