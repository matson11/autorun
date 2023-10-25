import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataMock } from '../models/mock.model';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  getDataMocks(): Observable<DataMock[]> {
    return this.http.get<DataMock[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
