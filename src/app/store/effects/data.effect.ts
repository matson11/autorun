import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ItemsService } from '../../services/items.service';
import { getData, getDataSuccess } from '../actions/data.action';

@Injectable({
  providedIn: 'root',
})
export class DataEffects {
  constructor(private actions: Actions, private itemsService: ItemsService) {}

  getData$ = createEffect(() =>
    this.actions.pipe(
      ofType(getData),
      switchMap(() =>
        this.itemsService
          .getDataMocks()
          .pipe(map((data) => getDataSuccess({ data })))
      )
    )
  );
}
