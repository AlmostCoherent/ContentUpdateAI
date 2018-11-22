import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'luis',
    templateUrl: './luis.component.html'
})
export class LuisComponent implements OnInit {
    public luisResult: any;
    public luisUrl: any;

    ngOnInit() {
        this.luisResult = "Tadaaaa!";
    }

    constructor() {
    }

    public GetLuisResult(luisQuery: any, http: Http) {
        this.luisResult = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55bc8e00-8ab9-48c0-8e36-00d115f039ec?subscription-key=e8ed78ec10214dbaa87d3721e6017e28&q=" + luisQuery.value["luis-query"];

        http.get("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55bc8e00-8ab9-48c0-8e36-00d115f039ec?subscription-key=e8ed78ec10214dbaa87d3721e6017e28&q=" + luisQuery.value["luis-query"])
            .subscribe(result => {
                this.luisResult = result.json()
            }, error => console.error(error))
//        this.luisResult = luisQuery.value["luis-query"];
    }
}
