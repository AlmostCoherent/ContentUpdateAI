import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

import { CompositeEntities } from '../models/luisResponseModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleError(error: any): any {
    return Observable.throw(error.statusText);
  }

  postDataAndReturnCompositeEntitie(url: string, postObj: any): Observable<CompositeEntities> {
    return this.httpClient.post<CompositeEntities>(url, postObj, httpOptions)
  }

  getData(url: string, postQuery: string) {
    return this.httpClient.get(url, { params: { query: postQuery } });
  }

  constructor(private httpClient: HttpClient) {
  }
}
