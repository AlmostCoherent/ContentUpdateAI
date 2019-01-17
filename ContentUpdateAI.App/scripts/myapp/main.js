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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-content-display [currentContent]=\"currentContent\"></app-content-display>\r\n<app-luis-results [currentContent]=\"currentContent\"></app-luis-results>\r\n"

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
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/content.service */ "./src/app/services/content.service.ts");
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
    function AppComponent(_contentService) {
        this._contentService = _contentService;
        this.title = 'AngularMVC';
        this.labelForInput = "Enter update instruction:";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.getContentData("content/v1/get-content", "1")
            .subscribe(function (data) {
            _this.currentContent = data;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
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
/* harmony import */ var _components_luis_results_luis_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/luis-results/luis-results.component */ "./src/app/components/luis-results/luis-results.component.ts");
/* harmony import */ var _components_content_display_content_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content-display/content-display.component */ "./src/app/components/content-display/content-display.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_luis_results_luis_results_component__WEBPACK_IMPORTED_MODULE_5__["LuisResultsComponent"],
                _components_content_display_content_display_component__WEBPACK_IMPORTED_MODULE_6__["ContentDisplayComponent"]
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

/***/ "./src/app/components/content-display/content-display.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-display/content-display.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"luis-page-header\">Current Content</div>\r\n<div class=\"luis-display\">\r\n  <div class=\"row\" *ngFor=\"let item of currentContent;\">\r\n    <div class=\"col-md-1\">{{ item.LineNumber }}</div>\r\n    <div class=\"col-md-11\">\r\n      <div [innerHTML]=\"item.Content\"></div>\r\n      <div [innerHTML]=\"item.ChangeToContent\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content-display/content-display.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-display/content-display.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2NvbnRlbnQtZGlzcGxheS9jb250ZW50LWRpc3BsYXkuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/content-display/content-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-display/content-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContentDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDisplayComponent", function() { return ContentDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentDisplayComponent = /** @class */ (function () {
    function ContentDisplayComponent() {
    }
    ContentDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContentDisplayComponent.prototype, "currentContent", void 0);
    ContentDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-display',
            template: __webpack_require__(/*! ./content-display.component.html */ "./src/app/components/content-display/content-display.component.html"),
            styles: [__webpack_require__(/*! ./content-display.component.sass */ "./src/app/components/content-display/content-display.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentDisplayComponent);
    return ContentDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/luis-results/luis-results.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/luis-results/luis-results.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"luis-form\">\r\n  <form #luisForm=\"ngForm\" (ngSubmit)=\"AddToLuisCheck(luisForm.form)\">\r\n    <label for=\"luis-query\">{{ this.labelForInput }}</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           name=\"luis-query\"\r\n           ngModel\r\n           minlength=\"3\"\r\n           #nameField=\"ngModel\" />\r\n    <button class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n<div class=\"luis-page-header\">Instructions for LUIS</div>\r\n<div class=\"luis-display\">\r\n  <div *ngFor=\"let item of luisLinesToCheck; let i = index\">{{ item }} <div class=\"luis-remove\" (click)=\"RemoveItemFromArray(i)\">X</div></div>\r\n  <button class=\"btn btn-primary\" (click)=\"GetLuisResult()\">Check for Luis matches</button>\r\n</div>\r\n\r\n<div class=\"luis-page-header\">Changes to Content</div>\r\n<div ng-if=\"this.currentLuisChanges\" class=\"luis-display\">\r\n  <div *ngFor=\"let item of currentLuisChanges\">{{ item.LineNumber }} :: <span [innerHTML]=\"item.ChangeToContent\"></span></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/luis-results/luis-results.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/luis-results/luis-results.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2x1aXMtcmVzdWx0cy9sdWlzLXJlc3VsdHMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/luis-results/luis-results.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/luis-results/luis-results.component.ts ***!
  \*******************************************************************/
/*! exports provided: LuisResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuisResultsComponent", function() { return LuisResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/enums */ "./src/app/models/enums.ts");
/* harmony import */ var src_app_services_luisResults_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/luisResults.service */ "./src/app/services/luisResults.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LuisResultsComponent = /** @class */ (function () {
    function LuisResultsComponent(_apiService, _luisService) {
        this._apiService = _apiService;
        this._luisService = _luisService;
        this.luisLinesToCheck = [];
    }
    LuisResultsComponent.prototype.ngOnInit = function () {
    };
    //@Input() public setUpLuisChanges(currentContent: Array<Content>, content: string[])
    //{
    //  this.currentContent = currentContent;
    //}
    LuisResultsComponent.prototype.ngOnChanges = function (changes) {
        var temp = "";
        //this.luisLinesToCheck = this.luisLinesToCheck;
    };
    LuisResultsComponent.prototype.AddToLuisCheck = function (newLineToCheck) {
        this.luisLinesToCheck.push(newLineToCheck.value["luis-query"]);
        newLineToCheck.reset();
    };
    LuisResultsComponent.prototype.RemoveItemFromArray = function (indexer) {
        this.luisLinesToCheck.splice(indexer, 1);
    };
    LuisResultsComponent.prototype.GetLuisResult = function () {
        var _this = this;
        if (this.luisLinesToCheck.length > 0) {
            this._apiService.postDataAndReturnCompositeEntitie('/contentupdate/v1/check-composite', this.luisLinesToCheck, src_app_models_enums__WEBPACK_IMPORTED_MODULE_2__["LuisRequestType"].CompositeEntity)
                .subscribe(function (data) {
                _this.luisResult = data;
                _this._luisService.ProcessLuisResponseAndChanges(_this.luisResult, _this.currentContent);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LuisResultsComponent.prototype, "currentContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LuisResultsComponent.prototype, "luisInstructions", void 0);
    LuisResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-luis-results',
            template: __webpack_require__(/*! ./luis-results.component.html */ "./src/app/components/luis-results/luis-results.component.html"),
            styles: [__webpack_require__(/*! ./luis-results.component.sass */ "./src/app/components/luis-results/luis-results.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], src_app_services_luisResults_service__WEBPACK_IMPORTED_MODULE_3__["LuisService"]])
    ], LuisResultsComponent);
    return LuisResultsComponent;
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

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
var ContentService = /** @class */ (function () {
    function ContentService(httpClient) {
        this.httpClient = httpClient;
    }
    ContentService.prototype.getContentData = function (url, postObj) {
        var httpParams = postObj;
        return this.httpClient.post(url, { query: postObj }, httpOptions);
    };
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/services/luisResults.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/luisResults.service.ts ***!
  \*************************************************/
/*! exports provided: LuisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuisService", function() { return LuisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LuisService = /** @class */ (function () {
    function LuisService() {
    }
    LuisService.prototype.ProcessLuisResponseAndChanges = function (responseData, inputContent) {
        responseData.forEach(function (value) {
            var indexOfRecord = inputContent.findIndex(function (x) { return x.LineNumber.toString() == value.LineToUpdate; });
            var currentContent = inputContent[indexOfRecord].Content;
            inputContent[indexOfRecord].ChangeToContent = currentContent.replace(value.UpdateFrom, "<del>" + value.UpdateFrom + "</del><ins>" + value.UpdateTo + "</ins>");
            ;
        });
        var changedLuisResults = inputContent.filter(function (v) { return v.ChangeToContent != ""; });
        return changedLuisResults;
    };
    LuisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LuisService);
    return LuisService;
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