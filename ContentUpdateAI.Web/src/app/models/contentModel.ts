export class Content {
  lineNumber: number;
  content: string;
  changeToContent: string;
  constructor(lineNumber: number, content: string, changeToContent: string = "") {
    this.content = content;
    this.lineNumber = lineNumber;
    this.changeToContent = changeToContent;
  }
}
