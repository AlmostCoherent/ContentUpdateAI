import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

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

  postData(url: string, postObj: any) {
    return this.httpClient.post(url, postObj, httpOptions)
      .pipe(catchError(this.handleError(postObj))
    );
  }

  getData(url: string, postQuery: string) {
    return this.httpClient.get(url, { params: { query: postQuery } });
  }

  constructor(private httpClient: HttpClient) {
  }
}
