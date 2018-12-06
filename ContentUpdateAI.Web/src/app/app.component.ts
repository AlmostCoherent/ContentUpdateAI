import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../app/services/api.service';

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

  public GetLuisResult(luisQuery: any) {
    this.apiService.getData('/contentupdate/v1/check-composite', luisQuery).subscribe((data: Array<object>) => {
      this.luisResult = data;
      console.log(data);
    });
    //this.luisResult = this.http.get("/contentupdate/v1/check-composite", { params: { query: luisQuery.value["luis-query"] } })
    //  .subscribe(result => { this.luisResult = JSON.stringify(result) },
    //    error => console.log(error));

    console.log("Result: ", this.luisResult);
  }

  constructor(private http: HttpClient, private apiService: ApiService) {
  }


}
