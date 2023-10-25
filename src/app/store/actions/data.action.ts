import { createAction, props } from '@ngrx/store';
import { DataMock } from 'src/app/models/mock.model';

export const getData = createAction('[Data] Get all data');
export const getDataSuccess = createAction(
  '[Data] Get all data success',
  props<{ data: DataMock[] }>()
);
