import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../app/services/api.service';

import { CompositeEntities } from './models/luisResponseModel';
import { Content } from './models/contentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMVC';
  private luisResult: CompositeEntities;
  private content: Array<Content>;
  private luisLinesToCheck: string[] = [];
  private luisUrl: any;
  private labelForInput: string = "Enter update instruction:";

  ngOnInit() {
    this.content = [

      new Content(1, "GoF Definition"),
      new Content(1, "GoF Definition"),
      new Content(2, "This chapter covers the Singleton pattern."),
      new Content(3, "GoF Definition"),
      new Content(4, "Ensure a class has only one instance, and provide a global point of access to it."),
      new Content(5, "Concept"),
      new Content(6, "A particular class should have only one instance. You can use this instance whenever "),
      new Content(7, "you need it and therefore avoid creating unnecessary objects."),
    ];
  }

  private AddToLuisCheck(newLineToCheck: any) {
    this.luisLinesToCheck.push(newLineToCheck.value["luis-query"]);
  }

  private GetLuisResult() {
    if (this.luisLinesToCheck.length > 0) {
      this.apiService.postDataAndReturnCompositeEntitie('/contentupdate/v1/check-composite', this.luisLinesToCheck)
          .subscribe(
              data => this.luisResult = data
      );
      this.ProcessLuisResponseAndChanges(this.content, this.luisResult);
      //this.http.post('/contentupdate/v1/check-composite', this.luisLinesToCheck)
      //  .subscribe(
      //    (val) => {
      //      console.log("POST call successful value returned in body",
      //        val);
      //    },
      //    response => {
      //      console.log("POST call in error", response);
      //    },
      //    () => {
      //      console.log("The POST observable is now completed.");
      //    }
        //)
      //this.apiService.postData('/contentupdate/v1/check-composite', this.luisLinesToCheck).subscribe((data: Array<object>) => {
      //  this.luisResult = data;
      //});
    }
    console.log("Result: ", this.luisResult);
  }

  private RemoveItemFromArray(indexer: number) {
    this.luisLinesToCheck.splice(indexer, 1);
  }

  private ProcessLuisResponseAndChanges(existingContent: Array<Content>, luisResult: CompositeEntities) {
    let filteredList = luisResult.Children;
    console.log(filteredList);
    //for (let luis of luisResult.Children) {
    //  if (existingContent.find(c => c.lineNumber == luis.))

    //}

  }

  constructor(private http: HttpClient, private apiService: ApiService) {
  }


}
