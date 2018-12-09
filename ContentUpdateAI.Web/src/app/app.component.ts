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
  private luisResult: any;
  private luisLinesToCheck: string[] = [];
  private luisUrl: any;

  ngOnInit() {
  }

  private AddToLuisCheck(newLineToCheck: any) {
    this.luisLinesToCheck.push(newLineToCheck.value["luis-query"]);
  }

  private GetLuisResult() {
    if (this.luisLinesToCheck.length > 0) {
      this.http.post('/contentupdate/v1/check-composite', this.luisLinesToCheck)
        .subscribe(
          (val) => {
            console.log("POST call successful value returned in body",
              val);
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          }
        )
      //this.apiService.postData('/contentupdate/v1/check-composite', this.luisLinesToCheck).subscribe((data: Array<object>) => {
      //  this.luisResult = data;
      //});
    }
    else {
      this.luisResult = ["Sorry, no results returned."];
    }
    console.log("Result: ", this.luisResult);
  }

  constructor(private http: HttpClient, private apiService: ApiService) {
  }


}
