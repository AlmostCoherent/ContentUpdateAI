import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/contentModel';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.sass']
})
export class ContentDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() currentContent: Array<Content>;

}
