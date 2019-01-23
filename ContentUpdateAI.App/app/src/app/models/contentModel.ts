export class Content {
  LineNumber: number;
  ContentId: number;
  Content: string;
  ChangeToContent: string;
  constructor(lineNumber: number, content: string, contentId: number, changeToContent: string = "") {
    this.Content = content;
    this.ContentId = contentId;
    this.LineNumber = lineNumber;
    this.ChangeToContent = changeToContent;
  }
}
