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
  public temp: string = "";

  ngOnInit() {
    this.luisResult = "Tadaaaa!";
  }

  constructor(private http: HttpClient) {
  }

  public GetLuisResult(luisQuery: any) {
    this.luisResult = this.http.get("/contentupdate/v1/check-composite", { params: { query: luisQuery.value["luis-query"] } })
      .subscribe(result => { this.luisResult = JSON.stringify(result) },
        error => console.log(error));

    console.log("Result: ", this.luisResult);
  }

}
