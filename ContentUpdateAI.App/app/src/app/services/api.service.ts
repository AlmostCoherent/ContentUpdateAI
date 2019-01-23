import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Response, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

import { SimpleCompositeResponse } from '../models/luisResponseModel';
import { LuisRequestType } from '../models/enums';

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

  postDataAndReturnCompositeEntitie(url: string, postObj: any, requestType: LuisRequestType): Observable<Array<SimpleCompositeResponse>> {
    let httpParams = postObj; //new HttpParams().set('query', postObj).set('responseType', requestType.toString());
    return this.httpClient.post<Array<SimpleCompositeResponse>>(url, { query: postObj, responseType: requestType }, httpOptions)
  }

  getData(url: string, postQuery: string, getType) {
    return this.httpClient.get(url, { params: { query: postQuery, responseType: getType } });
  }

  constructor(private httpClient: HttpClient) {
  }
}
