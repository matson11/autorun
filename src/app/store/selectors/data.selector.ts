import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/data.reducer';

const selectDataState = createFeatureSelector<AppState>('data');

export const selectData = createSelector(
  selectDataState,
  (state) => state.data
);

export const selectItemDetails = (itemId: number) =>
  createSelector(selectDataState, (state) => {
    return state.data.find((item) => item.id === itemId);
  });
