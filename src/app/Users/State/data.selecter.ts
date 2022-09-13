import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from './data.state';

const getDataState = createFeatureSelector<DataState>('userDat');

export const getTotal = createSelector(getDataState, (state) => {
  return state.total;
});
