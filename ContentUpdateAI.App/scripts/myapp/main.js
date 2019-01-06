(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"luis-display\">\r\n  <div *ngFor=\"let item of content;\">{{ item.lineNumber }} :: {{ item.content}}</div>\r\n</div>\r\n\r\n<div class=\"luis-form\">\r\n  <form #luisForm=\"ngForm\" (ngSubmit)=\"AddToLuisCheck(luisForm.form)\">\r\n    <label for=\"luis-query\">{{ this.labelForInput }}</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           name=\"luis-query\"\r\n           ngModel\r\n           minlength=\"3\"\r\n           #nameField=\"ngModel\" />\r\n    <button class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"luis-display\">\r\n  <div *ngFor=\"let item of luisLinesToCheck; let i = index\" >{{ item }} <div class=\"luis-remove\" (click)=\"RemoveItemFromArray(i)\">X</div></div>\r\n  <button class=\"btn btn-primary\" (click)=\"GetLuisResult()\">Check for Luis matches</button>\r\n</div>\r\n<div ng-if=\"this.changedLuisResults\" class=\"luis-display\">\r\n  <div *ngFor=\"let item of changedLuisResults\">{{ item.lineNumber }} :: <span [innerHTML]=\"item.changeToContent\"></span></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _models_contentModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/contentModel */ "./src/app/models/contentModel.ts");
/* harmony import */ var _models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/enums */ "./src/app/models/enums.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'AngularMVC';
        this.luisLinesToCheck = [];
        this.labelForInput = "Enter update instruction:";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.content = [
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](1, "GoF Definition"),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](2, "This chapter covers the Singleton pattern."),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](3, "GoF Definition"),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](4, "Ensure a class has only one instance, and provide a global point of access to it."),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](5, "Concept"),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](6, "A particular class should have only one instance. You can use this instance whenever "),
            new _models_contentModel__WEBPACK_IMPORTED_MODULE_2__["Content"](7, "you need it and therefore avoid creating unnecessary objects."),
        ];
    };
    AppComponent.prototype.AddToLuisCheck = function (newLineToCheck) {
        this.luisLinesToCheck.push(newLineToCheck.value["luis-query"]);
        newLineToCheck.reset();
    };
    AppComponent.prototype.GetLuisResult = function () {
        var _this = this;
        if (this.luisLinesToCheck.length > 0) {
            this.apiService.postDataAndReturnCompositeEntitie('/contentupdate/v1/check-composite', this.luisLinesToCheck, _models_enums__WEBPACK_IMPORTED_MODULE_3__["LuisRequestType"].CompositeEntity)
                .subscribe(function (data) {
                _this.luisResult = data;
                _this.ProcessLuisResponseAndChanges(_this.luisResult);
                //this.luisResult = data,
                //  console.log("data: ", data, "luisResult: ", this.luisResult)
            });
            //      this.ProcessLuisResponseAndChanges(this.content, this.luisResult);
        }
        console.log("Result: ", this.luisResult);
    };
    AppComponent.prototype.RemoveItemFromArray = function (indexer) {
        this.luisLinesToCheck.splice(indexer, 1);
    };
    AppComponent.prototype.ProcessLuisResponseAndChanges = function (responseData) {
        var _this = this;
        responseData.forEach(function (value) {
            var indexOfRecord = _this.content.findIndex(function (x) { return x.lineNumber.toString() == value.LineToUpdate; });
            var currentContent = _this.content[indexOfRecord].content;
            _this.content[indexOfRecord].changeToContent = currentContent.replace(value.UpdateFrom, "<del>" + value.UpdateFrom + "</del><ins>" + value.UpdateTo + "</ins>");
            ;
        });
        this.changedLuisResults = this.content.filter(function (v) { return v.changeToContent != ""; });
        //for (let change in responseData) {
        //  let number = change.LineToUpdate;
        //}
        //console.log(currentData);
        //let filteredList = luisResult.Children;
        //console.log(filteredList);
        //for (let luis of luisResult.Children) {
        //  if (existingContent.find(c => c.lineNumber == luis.))
        //}
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/contentModel.ts":
/*!****************************************!*\
  !*** ./src/app/models/contentModel.ts ***!
  \****************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
var Content = /** @class */ (function () {
    function Content(lineNumber, content, changeToContent) {
        if (changeToContent === void 0) { changeToContent = ""; }
        this.content = content;
        this.lineNumber = lineNumber;
        this.changeToContent = changeToContent;
    }
    return Content;
}());



/***/ }),

/***/ "./src/app/models/enums.ts":
/*!*********************************!*\
  !*** ./src/app/models/enums.ts ***!
  \*********************************/
/*! exports provided: CompositeType, LuisRequestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeType", function() { return CompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuisRequestType", function() { return LuisRequestType; });
var CompositeType;
(function (CompositeType) {
    CompositeType[CompositeType["LineToUpdate"] = 0] = "LineToUpdate";
    CompositeType[CompositeType["UpdateFrom"] = 1] = "UpdateFrom";
    CompositeType[CompositeType["UpdateTo"] = 2] = "UpdateTo";
})(CompositeType || (CompositeType = {}));
var LuisRequestType;
(function (LuisRequestType) {
    LuisRequestType[LuisRequestType["FullLuisModel"] = 0] = "FullLuisModel";
    LuisRequestType[LuisRequestType["CompositeEntity"] = 1] = "CompositeEntity";
    LuisRequestType[LuisRequestType["TopScoringIntent"] = 2] = "TopScoringIntent";
})(LuisRequestType || (LuisRequestType = {}));


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.statusText);
    };
    ApiService.prototype.postDataAndReturnCompositeEntitie = function (url, postObj, requestType) {
        var httpParams = postObj; //new HttpParams().set('query', postObj).set('responseType', requestType.toString());
        return this.httpClient.post(url, { query: postObj, responseType: requestType }, httpOptions);
    };
    ApiService.prototype.getData = function (url, postQuery, getType) {
        return this.httpClient.get(url, { params: { query: postQuery, responseType: getType } });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben-Harman\Source\Repos\ContentUpdateAI\ContentUpdateAI.App\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map