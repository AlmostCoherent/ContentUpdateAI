import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMVC';
  public luisResult: any;
  public luisUrl: any;

  ngOnInit() {
    this.luisResult = "Tadaaaa!";
  }

  constructor() {
  }

  public GetLuisResult(luisQuery: any, http: HttpClient) {
    this.luisResult = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55bc8e00-8ab9-48c0-8e36-00d115f039ec?subscription-key=e8ed78ec10214dbaa87d3721e6017e28&q=" + luisQuery.value["luis-query"];

    this.luisResult = http.get("contentupdate/v1/get");

    //this.luisResult = http.get("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55bc8e00-8ab9-48c0-8e36-00d115f039ec?subscription-key=e8ed78ec10214dbaa87d3721e6017e28", { params: { q: luisQuery.value["luis-query"] } })

    //http.get("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55bc8e00-8ab9-48c0-8e36-00d115f039ec?subscription-key=e8ed78ec10214dbaa87d3721e6017e28", { params: { q: luisQuery.value["luis-query"] } })
    //  .subscribe(result => {
    //    this.luisResult = result
    //  }, error => console.error(error))

    //this.luisResult = luisQuery.value["luis-query"];
  }

}
