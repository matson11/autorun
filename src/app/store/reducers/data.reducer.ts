import { createReducer, on } from '@ngrx/store';
import { DataMock } from 'src/app/models/mock.model';
import { getDataSuccess } from '../actions/data.action';

export interface AppState {
  data: DataMock[];
}
const initialState: AppState = {
  data: [],
};

export const dataReducer = createReducer(
  initialState,
  on(getDataSuccess, (state, { data }) => ({
    ...state,
    data,
  }))
);
