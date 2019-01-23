import { Injectable } from "@angular/core";
import { SimpleCompositeResponse } from "../models/luisResponseModel";
import { Content } from "../models/contentModel";

@Injectable({
  providedIn: 'root'
})
export class LuisService {
  public ProcessLuisResponseAndChanges(responseData: Array<SimpleCompositeResponse>, inputContent: Array<Content>) {

    responseData.forEach((value: SimpleCompositeResponse) => {
      let indexOfRecord = inputContent.findIndex(x => x.LineNumber.toString() == value.LineToUpdate);
      let currentContent = inputContent[indexOfRecord].Content;
      inputContent[indexOfRecord].ChangeToContent = currentContent.replace(value.UpdateFrom, "<del>" + value.UpdateFrom + "</del><ins>" + value.UpdateTo + "</ins>");;
    })

    let changedLuisResults: Array<Content> = inputContent.filter(v => v.ChangeToContent != "");

    return changedLuisResults;
  }

}
