import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataMock } from 'src/app/models/mock.model';
import { getData } from 'src/app/store/actions/data.action';
import { AppState } from 'src/app/store/reducers/data.reducer';
import { selectData } from 'src/app/store/selectors/data.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title'];
  dataSource$: Observable<DataMock[]> = this.store.select(selectData);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.store.dispatch(getData());
  }
}
