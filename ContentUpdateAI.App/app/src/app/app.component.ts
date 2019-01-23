import { Component } from '@angular/core';
import { ApiService } from '../app/services/api.service';
import { NgForm } from '@angular/forms';

import { SimpleCompositeResponse } from './models/luisResponseModel';
import { Content } from './models/contentModel';
import { LuisRequestType } from './models/enums';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMVC';
  private currentContent: Array<Content>;
  private labelForInput: string = "Enter update instruction:";

  constructor(private _contentService: ContentService) {}
  
  ngOnInit() {
    this._contentService.getContentData("content/v1/get-content", "1")
      .subscribe(
      data => {
        this.currentContent = data;
      });
  }


}
