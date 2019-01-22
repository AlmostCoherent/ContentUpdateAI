import { Injectable } from '@angular/core';
import { Content } from '../models/contentModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  getContentData(url: string, postObj: any): Observable<Array<Content>> {
    let httpParams = postObj;
    return this.httpClient.post<Array<Content>>(url, { query: postObj }, httpOptions)
  }

  //public GetContent(id: number) {
  //  return [
  //    new Content(1, "GoF Definition"),
  //    new Content(2, "This chapter covers the Singleton pattern."),
  //    new Content(3, "GoF Definition"),
  //    new Content(4, "Ensure a class has only one instance, and provide a global point of access to it."),
  //    new Content(5, "Concept"),
  //    new Content(6, "A particular class should have only one instance. You can use this instance whenever "),
  //    new Content(7, "you need it and therefore avoid creating unnecessary objects."),
  //  ]
  //}
}
