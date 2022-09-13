import { createAction, props } from '@ngrx/store';

export const userDat = createAction('userDat', props<{ data: number }>());
export const userLogout = createAction('userLogout');
