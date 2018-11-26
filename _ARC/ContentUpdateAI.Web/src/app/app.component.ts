import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'ContentUpdateAIWeb';

  submitLuis(form) {
    console.log(form.value["luis-query"]);

    alert("Form was submitted: " + form.value["luis-query"])

    form.reset();
  }

}
