import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap, tap } from 'rxjs';
import { DataMock } from 'src/app/models/mock.model';
import { getData } from 'src/app/store/actions/data.action';
import { AppState } from 'src/app/store/reducers/data.reducer';
import { selectItemDetails } from 'src/app/store/selectors/data.selector';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  itemDetails$?: Observable<DataMock | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.itemDetails$ = this.route.params.pipe(
      switchMap((p) =>
        p['id'] ? this.store.select(selectItemDetails(Number(p['id']))) : of()
      ),
      tap((details) => !details && this.store.dispatch(getData()))
    );
  }
}
