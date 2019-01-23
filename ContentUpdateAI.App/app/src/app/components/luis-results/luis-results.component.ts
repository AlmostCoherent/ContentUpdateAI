import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Content } from 'src/app/models/contentModel';
import { SimpleCompositeResponse } from 'src/app/models/luisResponseModel';
import { NgForm } from '@angular/forms';
import { LuisRequestType } from 'src/app/models/enums';
import { LuisService } from 'src/app/services/luisResults.service';

@Component({
  selector: 'app-luis-results',
  templateUrl: './luis-results.component.html',
  styleUrls: ['./luis-results.component.sass']
})
export class LuisResultsComponent implements OnInit {
  //private currentContent: Array<Content>;
  private changedLuisResults: Array<Content>;
  private luisResult: Array<SimpleCompositeResponse>;
  private luisLinesToCheck: string[] = [];


  constructor(private _apiService: ApiService, private _luisService: LuisService) { }

  ngOnInit() {
  }

  @Input() currentContent: Array<Content>;
  @Input() luisInstructions: string[];

  //@Input() public setUpLuisChanges(currentContent: Array<Content>, content: string[])
  //{
  //  this.currentContent = currentContent;
  //}

  ngOnChanges(changes: SimpleChanges): void {
    let temp = "";
    //this.luisLinesToCheck = this.luisLinesToCheck;
  }

  private AddToLuisCheck(newLineToCheck: NgForm) {
    this.luisLinesToCheck.push(newLineToCheck.value["luis-query"]);
    newLineToCheck.reset();
  }

  private RemoveItemFromArray(indexer: number) {
    this.luisLinesToCheck.splice(indexer, 1);
  }

  private GetLuisResult() {
    if (this.luisLinesToCheck.length > 0) {
      this._apiService.postDataAndReturnCompositeEntitie('/contentupdate/v1/check-composite', this.luisLinesToCheck, LuisRequestType.CompositeEntity)
        .subscribe(
          data => {
            this.luisResult = data;
            this._luisService.ProcessLuisResponseAndChanges(this.luisResult, this.currentContent);
          }
        );
    }
  }

}
