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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _escalation_escalation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escalation/escalation.component */ "./src/app/escalation/escalation.component.ts");
/* harmony import */ var _opstracker_opstracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opstracker/opstracker.component */ "./src/app/opstracker/opstracker.component.ts");
/* harmony import */ var _masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masterdata/masterdata.component */ "./src/app/masterdata/masterdata.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masterview/masterview.component */ "./src/app/masterview/masterview.component.ts");
/* harmony import */ var _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emplyeeview/emplyeeview.component */ "./src/app/emplyeeview/emplyeeview.component.ts");
/* harmony import */ var _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clientview/clientview.component */ "./src/app/clientview/clientview.component.ts");
/* harmony import */ var _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./siteview/siteview.component */ "./src/app/siteview/siteview.component.ts");
/* harmony import */ var _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./escalationview/escalationview.component */ "./src/app/escalationview/escalationview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'masterdata',
        component: _masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_4__["MasterdataComponent"]
    },
    {
        path: 'escalation',
        component: _escalation_escalation_component__WEBPACK_IMPORTED_MODULE_2__["EscalationComponent"]
    },
    {
        path: 'opstracker',
        component: _opstracker_opstracker_component__WEBPACK_IMPORTED_MODULE_3__["OpstrackerComponent"]
    },
    {
        path: 'report',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'masterview',
        component: _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_7__["MasterviewComponent"]
    },
    {
        path: 'emplyeeview',
        component: _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_8__["EmplyeeviewComponent"]
    },
    {
        path: 'clientview',
        component: _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_9__["ClientviewComponent"]
    },
    {
        path: 'siteview',
        component: _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_10__["SiteviewComponent"]
    },
    {
        path: 'escalationview',
        component: _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_11__["EscalationviewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// tslint:disable-next-line:max-line-length
var routingComponents = [_escalation_escalation_component__WEBPACK_IMPORTED_MODULE_2__["EscalationComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"], _opstracker_opstracker_component__WEBPACK_IMPORTED_MODULE_3__["OpstrackerComponent"], _masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_4__["MasterdataComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_7__["MasterviewComponent"], _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_8__["EmplyeeviewComponent"], _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_9__["ClientviewComponent"], _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_10__["SiteviewComponent"], _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_11__["EscalationviewComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n \r\n  <app-my-nav ></app-my-nav>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-nav/my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
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
    function AppComponent(activaterouter, router, nav) {
        /*  if (this.router.url === '/masterdata') {
           this.nav.visible = false;
   
    } */
        this.activaterouter = activaterouter;
        this.router = router;
        this.nav = nav;
        this.title = 'udswebproject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./masterview/masterview.component */ "./src/app/masterview/masterview.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../app/masterdata/masterdata.component */ "./src/app/masterdata/masterdata.component.ts");
/* harmony import */ var _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./emplyeeview/emplyeeview.component */ "./src/app/emplyeeview/emplyeeview.component.ts");
/* harmony import */ var _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clientview/clientview.component */ "./src/app/clientview/clientview.component.ts");
/* harmony import */ var _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./siteview/siteview.component */ "./src/app/siteview/siteview.component.ts");
/* harmony import */ var _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./escalationview/escalationview.component */ "./src/app/escalationview/escalationview.component.ts");
/* harmony import */ var _employeeupdate_employeeupdate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employeeupdate/employeeupdate.component */ "./src/app/employeeupdate/employeeupdate.component.ts");
/* harmony import */ var _clientupdate_clientupdate_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clientupdate/clientupdate.component */ "./src/app/clientupdate/clientupdate.component.ts");
/* harmony import */ var _siteupdate_siteupdate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./siteupdate/siteupdate.component */ "./src/app/siteupdate/siteupdate.component.ts");
/* harmony import */ var _escalationupdate_escalationupdate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./escalationupdate/escalationupdate.component */ "./src/app/escalationupdate/escalationupdate.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employdialog/employdialog.component */ "./src/app/employdialog/employdialog.component.ts");
/* harmony import */ var _clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clientdialog/clientdialog.component */ "./src/app/clientdialog/clientdialog.component.ts");
/* harmony import */ var _escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./escalationdialog/escalationdialog.component */ "./src/app/escalationdialog/escalationdialog.component.ts");
/* harmony import */ var _escalationmainview_escalationmainview_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./escalationmainview/escalationmainview.component */ "./src/app/escalationmainview/escalationmainview.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__["MyNavComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_18__["MasterviewComponent"],
                _app_masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_21__["MasterdataComponent"],
                _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_22__["EmplyeeviewComponent"],
                _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_23__["ClientviewComponent"],
                _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_24__["SiteviewComponent"],
                _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_25__["EscalationviewComponent"],
                _employeeupdate_employeeupdate_component__WEBPACK_IMPORTED_MODULE_26__["EmployeeupdateComponent"],
                _clientupdate_clientupdate_component__WEBPACK_IMPORTED_MODULE_27__["ClientupdateComponent"],
                _siteupdate_siteupdate_component__WEBPACK_IMPORTED_MODULE_28__["SiteupdateComponent"],
                _escalationupdate_escalationupdate_component__WEBPACK_IMPORTED_MODULE_29__["EscalationupdateComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_31__["PaginationComponent"],
                _employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_32__["EmploydialogComponent"],
                _clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_33__["ClientdialogComponent"],
                _escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_34__["EscalationdialogComponent"],
                _escalationmainview_escalationmainview_component__WEBPACK_IMPORTED_MODULE_35__["EscalationmainviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"]
            ],
            entryComponents: [
                _employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_32__["EmploydialogComponent"], _clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_33__["ClientdialogComponent"], _escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_34__["EscalationdialogComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clientdialog/clientdialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clientdialog/clientdialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clientdialog/clientdialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clientdialog/clientdialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-dialog-content>\r\n    \r\n    <div class=\"row\" >\r\n                          \r\n      <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Employee Name\" [(ngModel)]=\"data.name\">\r\n        </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Project Code\" [(ngModel)]=\"data.projectCode\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n \r\n  \r\n   \r\n   \r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n      \r\n        <div class=\"button-row\">\r\n                                            \r\n          <button mat-raised-button color=\"accent\" (click)=\"postClient()\" >Update</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n            \r\n          </div>    \r\n  \r\n  </mat-dialog-actions>\r\n    </div>"

/***/ }),

/***/ "./src/app/clientdialog/clientdialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clientdialog/clientdialog.component.ts ***!
  \********************************************************/
/*! exports provided: ClientdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientdialogComponent", function() { return ClientdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ClientdialogComponent = /** @class */ (function () {
    function ClientdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    ClientdialogComponent.prototype.ngOnInit = function () {
    };
    ClientdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    ClientdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    ClientdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientdialog',
            template: __webpack_require__(/*! ./clientdialog.component.html */ "./src/app/clientdialog/clientdialog.component.html"),
            styles: [__webpack_require__(/*! ./clientdialog.component.css */ "./src/app/clientdialog/clientdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ClientdialogComponent);
    return ClientdialogComponent;
}());



/***/ }),

/***/ "./src/app/clientupdate/clientupdate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clientupdate/clientupdate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clientupdate/clientupdate.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clientupdate/clientupdate.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  clientupdate works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/clientupdate/clientupdate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clientupdate/clientupdate.component.ts ***!
  \********************************************************/
/*! exports provided: ClientupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientupdateComponent", function() { return ClientupdateComponent; });
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

var ClientupdateComponent = /** @class */ (function () {
    function ClientupdateComponent() {
    }
    ClientupdateComponent.prototype.ngOnInit = function () {
    };
    ClientupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientupdate',
            template: __webpack_require__(/*! ./clientupdate.component.html */ "./src/app/clientupdate/clientupdate.component.html"),
            styles: [__webpack_require__(/*! ./clientupdate.component.css */ "./src/app/clientupdate/clientupdate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientupdateComponent);
    return ClientupdateComponent;
}());



/***/ }),

/***/ "./src/app/clientview/clientview.component.css":
/*!*****************************************************!*\
  !*** ./src/app/clientview/clientview.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/clientview/clientview.component.html":
/*!******************************************************!*\
  !*** ./src/app/clientview/clientview.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n    <div class=\"div-left\"><button mat-mini-fab>\r\n        <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n      </button></div>\r\n    \r\n       <div class=\"example-loading-shade spinnerabove \"\r\n             *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n          <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n            \r\n          </div>\r\n        </div> \r\n    \r\n        \r\n      \r\n          <table mat-table [dataSource]=\"client2\" class=\"mat-elevation-z8\"\r\n                 matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n            <!-- Number Column -->\r\n            \r\n            <!-- Title Column -->\r\n            <ng-container  matColumnDef=\"id\">\r\n                <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n              </ng-container>\r\n        \r\n    \r\n            <ng-container  matColumnDef=\"name\">\r\n              <th mat-header-cell  *matHeaderCellDef>Name</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- State Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n              <th mat-header-cell *matHeaderCellDef>Project Code</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.projectCode}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- Created Column -->\r\n            \r\n    \r\n               <mat-divider></mat-divider> \r\n            <ng-container matColumnDef=\"actionsColumn\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                \r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button>\r\n                        <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                          <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                        </button>\r\n                   \r\n                </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n             \r\n          </table>\r\n       <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n      \r\n        <!--   <app-pagination [maxPages]=\"maxPages\"\r\n          [current]=\"1\"\r\n          [postsPerPage]=\"postsPerPage\"\r\n          [itemsPerPage]=\"itemsPerPage\"\r\n          (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n      \r\n    </div>"

/***/ }),

/***/ "./src/app/clientview/clientview.component.ts":
/*!****************************************************!*\
  !*** ./src/app/clientview/clientview.component.ts ***!
  \****************************************************/
/*! exports provided: ClientviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientviewComponent", function() { return ClientviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clientdialog/clientdialog.component */ "./src/app/clientdialog/clientdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientviewComponent = /** @class */ (function () {
    function ClientviewComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.client2 = [];
        this.displayedColumns = ['id', 'name', 'code', 'actionsColumn'];
        /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ClientviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        //  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            console.log('enter1');
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.paginator.pageIndex, 8);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log('ggg');
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data['totalElements'];
            console.log(data['totalElements']);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('errr');
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.client2 = data['content']; });
        // this.listEmployees();
    };
    ClientviewComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.client2.find(function (i) { return i.id === id; });
        var dialogRef = this.dialog.open(_clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_6__["ClientdialogComponent"], {
            width: '300px',
            data: item1
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('dialog closed:${result}');
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ClientviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ClientviewComponent.prototype, "sort", void 0);
    ClientviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientview',
            template: __webpack_require__(/*! ./clientview.component.html */ "./src/app/clientview/clientview.component.html"),
            styles: [__webpack_require__(/*! ./clientview.component.css */ "./src/app/clientview/clientview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ClientviewComponent);
    return ClientviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://localhost:8080/uds/project/search/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getEmployee = function () {
        return this.http.get('http://localhost:8080/uds/employee/search');
    };
    DataService.prototype.getEscalation = function () {
        return this.http.get('http://localhost:8080//uds/esctype/search');
    };
    DataService.prototype.getProjects = function () {
        return this.http.get('http://localhost:8080/uds/project/search');
    };
    DataService.prototype.getSites = function () {
        return this.http.get('http://localhost:8080/uds/site/search');
    };
    DataService.prototype.getSite = function (id) {
        return this.http.get('http://localhost:8080/uds/site/search/' + id);
    };
    DataService.prototype.getemployee = function (pages, records) {
        return this.http.get('http://localhost:8080//uds/employee/search/' + pages + '/' + records);
    };
    DataService.prototype.getemployeebyid = function (id) {
        return this.http.get('http://localhost:8080//uds/employee/search/' + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/employdialog/employdialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employdialog/employdialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-global-overlay-wrapper, .cdk-overlay-container {\r\n     z-index: 99999 !important;\r\n  }"

/***/ }),

/***/ "./src/app/employdialog/employdialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employdialog/employdialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n<mat-dialog-content>\r\n  \r\n  <div class=\"row\" >\r\n                        \r\n    <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Employee Code\" [(ngModel)]=\"data.code\">\r\n      </mat-form-field>\r\n\r\n</div>\r\n<div class=\"row\" >\r\n                        \r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Employee Name\" [(ngModel)]=\"data.name\">\r\n  </mat-form-field>\r\n\r\n</div>\r\n\r\n<div class=\"row\" >\r\n                        \r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Designation\" [(ngModel)]=\"data.designation\">\r\n  </mat-form-field>\r\n\r\n</div>\r\n<div class=\"row\" >\r\n                        \r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Email\" [(ngModel)]=\"data.mail\">\r\n  </mat-form-field>\r\n\r\n</div>\r\n<div class=\"row\" >\r\n                        \r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"data.mob\">\r\n  </mat-form-field>\r\n\r\n</div>\r\n\r\n \r\n \r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    \r\n      <div class=\"button-row\">\r\n                                          \r\n        <button mat-raised-button color=\"accent\" (click)=\"postEmployee()\" >Update</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n          \r\n        </div>    \r\n\r\n</mat-dialog-actions>\r\n  </div>"

/***/ }),

/***/ "./src/app/employdialog/employdialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employdialog/employdialog.component.ts ***!
  \********************************************************/
/*! exports provided: EmploydialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploydialogComponent", function() { return EmploydialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EmploydialogComponent = /** @class */ (function () {
    function EmploydialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    EmploydialogComponent.prototype.ngOnInit = function () {
    };
    EmploydialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    EmploydialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    EmploydialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employdialog',
            template: __webpack_require__(/*! ./employdialog.component.html */ "./src/app/employdialog/employdialog.component.html"),
            styles: [__webpack_require__(/*! ./employdialog.component.css */ "./src/app/employdialog/employdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EmploydialogComponent);
    return EmploydialogComponent;
}());



/***/ }),

/***/ "./src/app/employeeupdate/employeeupdate.component.css":
/*!*************************************************************!*\
  !*** ./src/app/employeeupdate/employeeupdate.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employeeupdate/employeeupdate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/employeeupdate/employeeupdate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employeeupdate works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/employeeupdate/employeeupdate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employeeupdate/employeeupdate.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeeupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeupdateComponent", function() { return EmployeeupdateComponent; });
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

var EmployeeupdateComponent = /** @class */ (function () {
    function EmployeeupdateComponent() {
    }
    EmployeeupdateComponent.prototype.ngOnInit = function () {
    };
    EmployeeupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeeupdate',
            template: __webpack_require__(/*! ./employeeupdate.component.html */ "./src/app/employeeupdate/employeeupdate.component.html"),
            styles: [__webpack_require__(/*! ./employeeupdate.component.css */ "./src/app/employeeupdate/employeeupdate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeupdateComponent);
    return EmployeeupdateComponent;
}());



/***/ }),

/***/ "./src/app/emplyeeview/emplyeeview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/emplyeeview/emplyeeview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/emplyeeview/emplyeeview.component.html":
/*!********************************************************!*\
  !*** ./src/app/emplyeeview/emplyeeview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n<div class=\"div-left\"><button mat-mini-fab>\r\n    <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n  </button></div>\r\n\r\n   <div class=\"example-loading-shade spinnerabove \"\r\n         *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n        \r\n      </div>\r\n    </div> \r\n\r\n    \r\n  \r\n      <table mat-table [dataSource]=\"emp2\" class=\"mat-elevation-z8\"\r\n             matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n        <!-- Number Column -->\r\n        \r\n        <!-- Title Column -->\r\n        <ng-container  matColumnDef=\"id\">\r\n            <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n          </ng-container>\r\n    \r\n\r\n        <ng-container  matColumnDef=\"name\">\r\n          <th mat-header-cell  *matHeaderCellDef>Name</th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n        </ng-container>\r\n  \r\n        <!-- State Column -->\r\n        <ng-container matColumnDef=\"code\">\r\n          <th mat-header-cell *matHeaderCellDef>Code</th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n        </ng-container>\r\n  \r\n        <!-- Created Column -->\r\n        <ng-container matColumnDef=\"designation\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n            Designation\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"mail\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n              Mail\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"mob\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Mobile\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.mob}}</td>\r\n            </ng-container>\r\n\r\n           <mat-divider></mat-divider> \r\n        <ng-container matColumnDef=\"actionsColumn\">\r\n            <th mat-header-cell *matHeaderCellDef>Action</th>\r\n            \r\n            <mat-cell *matCellDef=\"let row\">\r\n                <button mat-icon-button>\r\n                    <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button>\r\n                      <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                    </button>\r\n               \r\n            </mat-cell>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n         \r\n      </table>\r\n   <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n  \r\n    <!--   <app-pagination [maxPages]=\"maxPages\"\r\n      [current]=\"1\"\r\n      [postsPerPage]=\"postsPerPage\"\r\n      [itemsPerPage]=\"itemsPerPage\"\r\n      (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/emplyeeview/emplyeeview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/emplyeeview/emplyeeview.component.ts ***!
  \******************************************************/
/*! exports provided: EmplyeeviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplyeeviewComponent", function() { return EmplyeeviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_employ_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/employ.model */ "./src/app/models/employ.model.ts");
/* harmony import */ var _employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../employdialog/employdialog.component */ "./src/app/employdialog/employdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmplyeeviewComponent = /** @class */ (function () {
    function EmplyeeviewComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.emp = [];
        this.emp2 = [];
        this.empid = new _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"]();
        this.displayedColumns = ['id', 'name', 'code', 'designation', 'mail', 'mob', 'actionsColumn'];
        /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    /*  listEmployees()
     {
       this.data.getemployee(0, 2).subscribe(
         data => this.emp = data['content']
        
        
       );
       console.log(this.data);
      
     } */
    /* pageChanged(event) {
     this.page = event.page;
     
     this.itemsPerPage = event.itemsPerPage;
     this.loadEmployeeByPage(this.page, this.itemsPerPage);
 } */
    /* loadEmployeeByPage(page: number, rows: number) {
     
      this.data.getemployee(page, rows).subscribe(
        data => this.emp = data['content']
      
        );
    
    } */
    // tslint:disable-next-line:member-ordering
    /* openDialog() {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      height: '400px',
  width: '600px'
      
    });
  }  */
    EmplyeeviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            console.log('enter1');
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.paginator.pageIndex, 8);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log('ggg');
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data['totalElements'];
            console.log(data['totalElements']);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('errr');
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.emp2 = data['content']; });
        // this.listEmployees();
    };
    EmplyeeviewComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.emp2.find(function (i) { return i.id === id; });
        var dialogRef = this.dialog.open(_employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_7__["EmploydialogComponent"], {
            width: '300px',
            data: item1
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('dialog closed:${result}');
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"])
    ], EmplyeeviewComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EmplyeeviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EmplyeeviewComponent.prototype, "sort", void 0);
    EmplyeeviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emplyeeview',
            template: __webpack_require__(/*! ./emplyeeview.component.html */ "./src/app/emplyeeview/emplyeeview.component.html"),
            styles: [__webpack_require__(/*! ./emplyeeview.component.css */ "./src/app/emplyeeview/emplyeeview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EmplyeeviewComponent);
    return EmplyeeviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://localhost:8080/uds/employee/search/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/escalation/escalation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/escalation/escalation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n      padding-left: 20px;\r\n      padding-top: 20px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .accordian > * {\r\n    padding-left: 50px;\r\n    padding-top: 50px;\r\n \r\n}\r\n  \r\n  .example-stretched-tabs {\r\n    max-width: 800px;\r\n  }\r\n  \r\n  example-small-box, .employee-box ,.client-box , .site-box, .escalation-box{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .example-small-box {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .employee-box {\r\n    height: 400px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .client-box {\r\n    height: 200px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .site-box {\r\n    height:650px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .escalation-box {\r\n    height: 440px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .button-row button,\r\n.button-row a {\r\n  margin-left: 90px;\r\n  margin-top: 8px\r\n}\r\n  \r\n  .site-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n  \r\n  .example-full-width {\r\n  width: 100%;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n  \r\n  .mt{\r\n  margin-top: 100px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/escalation/escalation.component.html":
/*!******************************************************!*\
  !*** ./src/app/escalation/escalation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container \">\r\n\r\n  <div>\r\n    <mat-card>\r\n      <mat-card-header>\r\n\r\n        <mat-card-title>Escalation</mat-card-title>\r\n\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-content>\r\n        <div>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"Type of Escalation\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let escalation of escalation$\" [value]=\"escalation\">\r\n                {{escalation.escalationType}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Description\">\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"Communicated Via\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto1=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                {{option}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field> \r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Communicated Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Closure Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"Estimated Closure Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker2></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <div class=\"button-row\">\r\n\r\n            <button mat-raised-button color=\"accent\">Submit</button>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>     \r\n        \r\n                    \r\n                   \r\n                       \r\n  \r\n"

/***/ }),

/***/ "./src/app/escalation/escalation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/escalation/escalation.component.ts ***!
  \****************************************************/
/*! exports provided: EscalationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationComponent", function() { return EscalationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscalationComponent = /** @class */ (function () {
    function EscalationComponent(data) {
        this.data = data;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    EscalationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getEscalation().subscribe(function (data) { return _this.escalation$ = data; });
    };
    EscalationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalation',
            template: __webpack_require__(/*! ./escalation.component.html */ "./src/app/escalation/escalation.component.html"),
            styles: [__webpack_require__(/*! ./escalation.component.css */ "./src/app/escalation/escalation.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], EscalationComponent);
    return EscalationComponent;
}());



/***/ }),

/***/ "./src/app/escalationdialog/escalationdialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/escalationdialog/escalationdialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escalationdialog/escalationdialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/escalationdialog/escalationdialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <mat-dialog-content>\r\n      \r\n      <div class=\"row\" >\r\n                            \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Escalation Type\" [(ngModel)]=\"data.escalationType\">\r\n          </mat-form-field>\r\n    \r\n    </div>\r\n    \r\n    \r\n   \r\n    \r\n     \r\n     \r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        \r\n          <div class=\"button-row\">\r\n                                              \r\n            <button mat-raised-button color=\"accent\" (click)=\"postClient()\" >Update</button>\r\n              <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n              \r\n            </div>    \r\n    \r\n    </mat-dialog-actions>\r\n      </div>"

/***/ }),

/***/ "./src/app/escalationdialog/escalationdialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/escalationdialog/escalationdialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EscalationdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationdialogComponent", function() { return EscalationdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EscalationdialogComponent = /** @class */ (function () {
    function EscalationdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    EscalationdialogComponent.prototype.ngOnInit = function () {
    };
    EscalationdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    EscalationdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    EscalationdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationdialog',
            template: __webpack_require__(/*! ./escalationdialog.component.html */ "./src/app/escalationdialog/escalationdialog.component.html"),
            styles: [__webpack_require__(/*! ./escalationdialog.component.css */ "./src/app/escalationdialog/escalationdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EscalationdialogComponent);
    return EscalationdialogComponent;
}());



/***/ }),

/***/ "./src/app/escalationmainview/escalationmainview.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/escalationmainview/escalationmainview.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escalationmainview/escalationmainview.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/escalationmainview/escalationmainview.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  escalationmainview works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/escalationmainview/escalationmainview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/escalationmainview/escalationmainview.component.ts ***!
  \********************************************************************/
/*! exports provided: EscalationmainviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationmainviewComponent", function() { return EscalationmainviewComponent; });
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

var EscalationmainviewComponent = /** @class */ (function () {
    function EscalationmainviewComponent() {
    }
    EscalationmainviewComponent.prototype.ngOnInit = function () {
    };
    EscalationmainviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationmainview',
            template: __webpack_require__(/*! ./escalationmainview.component.html */ "./src/app/escalationmainview/escalationmainview.component.html"),
            styles: [__webpack_require__(/*! ./escalationmainview.component.css */ "./src/app/escalationmainview/escalationmainview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EscalationmainviewComponent);
    return EscalationmainviewComponent;
}());



/***/ }),

/***/ "./src/app/escalationupdate/escalationupdate.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/escalationupdate/escalationupdate.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escalationupdate/escalationupdate.component.html":
/*!******************************************************************!*\
  !*** ./src/app/escalationupdate/escalationupdate.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  escalationupdate works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/escalationupdate/escalationupdate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/escalationupdate/escalationupdate.component.ts ***!
  \****************************************************************/
/*! exports provided: EscalationupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationupdateComponent", function() { return EscalationupdateComponent; });
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

var EscalationupdateComponent = /** @class */ (function () {
    function EscalationupdateComponent() {
    }
    EscalationupdateComponent.prototype.ngOnInit = function () {
    };
    EscalationupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationupdate',
            template: __webpack_require__(/*! ./escalationupdate.component.html */ "./src/app/escalationupdate/escalationupdate.component.html"),
            styles: [__webpack_require__(/*! ./escalationupdate.component.css */ "./src/app/escalationupdate/escalationupdate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EscalationupdateComponent);
    return EscalationupdateComponent;
}());



/***/ }),

/***/ "./src/app/escalationview/escalationview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/escalationview/escalationview.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/escalationview/escalationview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/escalationview/escalationview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n    <div class=\"div-left\"><button mat-mini-fab>\r\n        <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n      </button></div>\r\n    \r\n       <div class=\"example-loading-shade spinnerabove \"\r\n             *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n          <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n            \r\n          </div>\r\n        </div> \r\n    \r\n        \r\n      \r\n          <table mat-table [dataSource]=\"escalation2\" class=\"mat-elevation-z8\"\r\n                 matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n            <!-- Number Column -->\r\n            \r\n            <!-- Title Column -->\r\n            <ng-container  matColumnDef=\"id\">\r\n                <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n              </ng-container>\r\n        \r\n    \r\n           \r\n      \r\n            <!-- State Column -->\r\n            <ng-container matColumnDef=\"escalationType\">\r\n              <th mat-header-cell *matHeaderCellDef>Project Code</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.escalationType}}</td>\r\n            </ng-container>\r\n      \r\n          \r\n    \r\n            \r\n    \r\n              \r\n    \r\n               <mat-divider></mat-divider> \r\n            <ng-container matColumnDef=\"actionsColumn\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                \r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button>\r\n                        <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                          <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                        </button>\r\n                   \r\n                </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n             \r\n          </table>\r\n       <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n      \r\n        <!--   <app-pagination [maxPages]=\"maxPages\"\r\n          [current]=\"1\"\r\n          [postsPerPage]=\"postsPerPage\"\r\n          [itemsPerPage]=\"itemsPerPage\"\r\n          (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n      \r\n    </div>"

/***/ }),

/***/ "./src/app/escalationview/escalationview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/escalationview/escalationview.component.ts ***!
  \************************************************************/
/*! exports provided: EscalationviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationviewComponent", function() { return EscalationviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../escalationdialog/escalationdialog.component */ "./src/app/escalationdialog/escalationdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EscalationviewComponent = /** @class */ (function () {
    function EscalationviewComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.escalation2 = [];
        this.displayedColumns = ['id', 'escalationType', 'actionsColumn'];
        /* //displayedColumns: string[] = [  'code', 'name', 'designation', 'mail' , 'phone']; */
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    EscalationviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        //  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            console.log('enter1');
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.paginator.pageIndex, 8);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log('ggg');
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data['totalElements'];
            console.log(data['totalElements']);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('errr');
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.escalation2 = data['content']; });
        // this.listEmployees();
    };
    EscalationviewComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.escalation2.find(function (i) { return i.id === id; });
        var dialogRef = this.dialog.open(_escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_6__["EscalationdialogComponent"], {
            width: '300px',
            data: item1
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('dialog closed:${result}');
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EscalationviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EscalationviewComponent.prototype, "sort", void 0);
    EscalationviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationview',
            template: __webpack_require__(/*! ./escalationview.component.html */ "./src/app/escalationview/escalationview.component.html"),
            styles: [__webpack_require__(/*! ./escalationview.component.css */ "./src/app/escalationview/escalationview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EscalationviewComponent);
    return EscalationviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://localhost:8080/uds/esctype/search/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.example-container > * {\r\n    padding-left: 20px;\r\n    padding-top: 20px;\r\n  width: 200px;\r\n  position:absolute; /*it can be fixed too*/\r\n        left:0; right:0;\r\n        top:0; bottom:0;\r\n        margin:auto;\r\n\r\n        /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n        max-width:100%;\r\n        max-height:100%;\r\n        overflow:auto;\r\n \r\n}\r\n\r\n.content {\r\n  width: 400px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.menu-button {\r\n  transition: 300ms ease-in-out;\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n}\r\n\r\n.menu-button.rotated {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n}\r\n\r\n.submenu {\r\n  overflow-y: hidden;\r\n  transition: 300ms ease-in-out;\r\n  height: 0;\r\n}\r\n\r\n.submenu.expanded {\r\n  height: 144px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div >\r\n    <mat-card >\r\n        <mat-card-header>\r\n         \r\n                <mat-card-title><p>Please login to continue</p></mat-card-title>\r\n               \r\n        </mat-card-header>\r\n        <mat-divider ></mat-divider> \r\n        <mat-card-content>\r\n        <div style=\"margin-top:10px\">\r\n           \r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Username\"  required >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"password\" placeholder=\"Password\"  required>\r\n          </mat-form-field>\r\n          <div class=\"button-row\">\r\n                                        \r\n            <button mat-raised-button color=\"accent\" (click)=\"onButtonclick()\">Login</button>\r\n            \r\n            \r\n          </div>\r\n         \r\n        \r\n         \r\n         \r\n          \r\n            \r\n               \r\n\r\n                  \r\n                    \r\n                 \r\n                 \r\n                     \r\n                      \r\n\r\n     </div>\r\n     </mat-card-content>\r\n     </mat-card>\r\n     </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-nav/my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(activaterouter, router, nav) {
        this.activaterouter = activaterouter;
        this.router = router;
        this.nav = nav;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onButtonclick = function () {
        this.router.navigate(['/masterdata']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/masterdata.component.css":
/*!*****************************************************!*\
  !*** ./src/app/masterdata/masterdata.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n      padding-left: 20px;\r\n      padding-top: 5px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .accordian > * {\r\n    padding-left: 50px;\r\n    padding-top: 50px;\r\n \r\n}\r\n  \r\n  .example-stretched-tabs {\r\n    max-width: 800px;\r\n  }\r\n  \r\n  example-small-box, .employee-box ,.client-box , .site-box, .escalation-box{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .example-small-box {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .employee-box {\r\n    height: 400px;\r\n    width: 300px;\r\n    \r\n  }\r\n  \r\n  .client-box {\r\n    height: 200px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .site-box {\r\n    height:630px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .escalation-box {\r\n    height: 150px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .button-row button,\r\n.button-row a {\r\n  margin-left: 115px;\r\n  margin-top: 8px\r\n}\r\n  \r\n  .site-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n  \r\n  .example-full-width {\r\n  width: 100%;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n  \r\n  .mt{\r\n  margin-top: 100px;\r\n}\r\n  \r\n  .thbackground{\r\n  margin-top: 100px;\r\n}\r\n  \r\n  .submit{\r\n  margin-top: 20px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/masterdata/masterdata.component.html":
/*!******************************************************!*\
  !*** ./src/app/masterdata/masterdata.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n    <div id = \"layoutContainer\" \r\n    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n    <div fxflex = \"100\" >\r\n        <div class=\"example-container\">\r\n            <mat-tab-group >\r\n            \r\n              <mat-tab label=\"Employee\">\r\n               <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\" ></mat-progress-bar>   \r\n                  <div class=\"employee-box mat-elevation-z4\" >\r\n                    \r\n                    <div >\r\n                        <button mat-mini-fab>\r\n                            <mat-icon aria-label=\"\" routerLink=\"../emplyeeview\">remove_red_eye</mat-icon>\r\n                          </button>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Employee Code\" [(ngModel)]=\"emp.code\">\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"Employee Name\" [(ngModel)]=\"emp.name\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input type=\"text\" placeholder=\"Designation\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto20\">\r\n                                <mat-autocomplete #auto20=\"matAutocomplete\">\r\n                                  <mat-option *ngFor=\"let des of Designation\" [value]=\"des\" >\r\n                                    {{des}}\r\n                                  </mat-option>\r\n                                </mat-autocomplete>\r\n                              </mat-form-field>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Email\" [(ngModel)]=\"emp.mail\">\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"emp.mob\">\r\n                                  </mat-form-field>\r\n            \r\n                                  <div class=\"button-row\">\r\n                                      \r\n                                      <button mat-raised-button color=\"accent\" (click)=\"postEmployee()\" >Submit</button>\r\n                                      \r\n                                      \r\n                                    </div>\r\n                    </div>\r\n                     \r\n                    </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"Client\"> <div class=\"client-box mat-elevation-z4\">\r\n                  <div >\r\n                      <button mat-mini-fab>\r\n                          <mat-icon aria-label=\"\" routerLink=\"../clientview\">remove_red_eye</mat-icon>\r\n                        </button>\r\n                        <mat-progress-bar *ngIf=\"isLoadingResults\" mode=\"indeterminate\" ></mat-progress-bar>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Client Name\" [(ngModel)]=\"client.name\" >\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Client Code\" [(ngModel)]=\"client.projectCode\" >\r\n                          </mat-form-field>\r\n                          \r\n            \r\n                                <div class=\"button-row\">\r\n                                    \r\n                                    <button mat-raised-button color=\"accent\" (click)=\"postClient()\" >Add</button>\r\n                                    \r\n                                    \r\n                                  </div>\r\n                  </div>\r\n                   \r\n                  </div> </mat-tab>\r\n              <mat-tab label=\"Site\">  \r\n                  \r\n                    <div id = \"layoutContainer\" \r\n                    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n                    \r\n                    <div class=\"site-box mat-elevation-z4\">\r\n                      <div>\r\n                          <button mat-mini-fab>\r\n                              <mat-icon aria-label=\"\" routerLink=\"../siteview\">remove_red_eye</mat-icon>\r\n                            </button>\r\n                    <div fxflex = \"40\" >\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Client Name\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                                      <mat-option *ngFor=\"let option of projects\" [value]=\"option.name\" (click)=\"setSiteProject(option.id)\">\r\n                                        {{option.name}}\r\n                                      </mat-option>\r\n                                    </mat-autocomplete>\r\n                                  </mat-form-field>\r\n            \r\n                         \r\n                  <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Site Code\" [(ngModel)]=\"site.code\">\r\n                        </mat-form-field>   \r\n            \r\n                  <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Site Name\" [(ngModel)]=\"site.name\">\r\n                        </mat-form-field> \r\n            \r\n                        <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"Address\" [(ngModel)]=\"site.address\">\r\n                            </mat-form-field> \r\n            \r\n                             <mat-form-field class=\"example-full-width\">\r\n                                      <input type=\"text\" placeholder=\"Contract Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto11\">\r\n                                      <mat-autocomplete #auto11=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let option of Contracttype\" [value]=\"option\" >\r\n                                          {{option}}\r\n                                        </mat-option>\r\n                                      </mat-autocomplete>\r\n                                    </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                      <input type=\"text\" placeholder=\"Regional manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n                                      <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let option of employees\" [value]=\"option.name\" (click)=\"setSiteRM(option.id)\">\r\n                                          {{option.name}}\r\n                                        </mat-option>\r\n                                      </mat-autocomplete>\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                          <input type=\"text\" placeholder=\"Senior Manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto2\">\r\n                                          <mat-autocomplete #auto2=\"matAutocomplete\">\r\n                                            <mat-option *ngFor=\"let option of employees\" [value]=\"option.name\" (click)=\"setSiteSM(option.id)\">\r\n                                              {{option.name}}\r\n                                            </mat-option>\r\n                                          </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                              <input type=\"text\" placeholder=\"Asst Senior Manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto3\">\r\n                                              <mat-autocomplete #auto3=\"matAutocomplete\">\r\n                                                <mat-option *ngFor=\"let option of employees\" [value]=\"option.name\" (click)=\"setSiteASM(option.id)\">\r\n                                                  {{option.name}}\r\n                                                </mat-option>\r\n                                              </mat-autocomplete>\r\n                                            </mat-form-field>\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Site Incharge\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto4\">\r\n                                                  <mat-autocomplete #auto4=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of employees\" [value]=\"option.name\" (click)=\"setSiteSI(option.id)\">\r\n                                                      {{option.name}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                    </div>\r\n                  </div> \r\n                    </div>\r\n                    \r\n                    <div class=\"accordian\">\r\n                    <div fxflex = \"40\" >\r\n                            <mat-card >\r\n                                    <mat-card-header>\r\n                                     \r\n                                            <mat-card-title>Types of Service</mat-card-title>\r\n                                           \r\n                                    </mat-card-header>\r\n                                    <mat-divider ></mat-divider> \r\n                                    <mat-card-content style=\"margin-top: 20px\">\r\n                            <mat-accordion>\r\n                                    <mat-expansion-panel>\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                         Manpower\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Manpower  Detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                            <mat-form-field>\r\n                                              <input matInput placeholder=\"Shift\"  [(ngModel)]=\"newAttribute.shift\" >\r\n                                            </mat-form-field>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                                  <mat-form-field>\r\n                                                    <input matInput placeholder=\"StartTime\"  [(ngModel)]=\"newAttribute.starttime\" >\r\n                                                  </mat-form-field>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                      <mat-form-field>\r\n                                                        <input matInput placeholder=\"EndTime\"  [(ngModel)]=\"newAttribute.endtime\" >\r\n                                                      </mat-form-field>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                          <mat-form-field>\r\n                                                            <input matInput placeholder=\"Planned\"   [(ngModel)]=\"newAttribute.planned\" >\r\n                                                          </mat-form-field>\r\n                                                        </div>\r\n                                                        <div class=\"button-row\">\r\n                                          \r\n                                                              <button mat-raised-button color=\"accent\" (click)=\"addmanFieldValue()\">Add</button>\r\n                                                              \r\n                                                              \r\n                                                            </div>                              \r\n                                                            <table *ngIf=\"manadded\"  style=\"margin-top:20px\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Shift</th>\r\n                                                                        <th>Start Time</th>\r\n                                                                        <th>End Time</th>\r\n                                                                        <th>Planned</th>\r\n                                                                        <th>Action</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.shift\" class=\"form-control\" type=\"text\" name=\"{{field.shift}}\" />\r\n                                                                        </td>\r\n                                                                      \r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.starttime\" class=\"form-control\" type=\"text\" name=\"{{field.sarttime}}\" />\r\n                                                                        </td>\r\n                                                                       \r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.endtime\" class=\"form-control\" type=\"text\" name=\"{{field.endtime}}\" />\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.planned\" class=\"form-control\" type=\"text\" name=\"{{field.planned}}\" />\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <button mat-icon-button>\r\n                                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletemanFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                              </button>\r\n                                                                           \r\n                                                                           \r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                   \r\n                                                                </tbody>\r\n                                                            </table>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                                         (closed)=\"panelOpenState = false\">\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                          Material\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Material detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                            <input type=\"text\" placeholder=\"Material Type\" aria-label=\"Number\" matInput  [(ngModel)]=\"newAttribute1.materialtype\" [matAutocomplete]=\"auto5\">\r\n                                            <mat-autocomplete #auto5=\"matAutocomplete\" >\r\n                                              <mat-option *ngFor=\"let option of Materialtype\" [value]=\"option\" (click)=\"materialtype(option)\">\r\n                                                {{option}}\r\n                                              </mat-option>\r\n                                            </mat-autocomplete>\r\n                                          </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                                <mat-form-field>\r\n                                                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Commitment Date\" [(ngModel)]=\"newAttribute1.commitmentdate\">\r\n                                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                                        <mat-datepicker #picker ></mat-datepicker>\r\n                                                      </mat-form-field>\r\n                                              </div>\r\n                                              <div class=\"button-row\">\r\n                                          \r\n                                                    <button mat-raised-button color=\"accent\" (click)=\"addmatFieldValue()\">Add</button>\r\n                                                    \r\n                                                    \r\n                                                  </div>  \r\n                                                  \r\n                                                  <table *ngIf=\"matadded\"  style=\"margin-top:20px\">\r\n                                                      <thead>\r\n                                                          <tr>\r\n                                                              <th>Material Type</th>\r\n                                                              <th>Commitment Date</th>\r\n                                                              <th>Action</th>\r\n                                                             \r\n                                                          </tr>\r\n                                                      </thead>\r\n                                                      <tbody>\r\n                                                          <tr *ngFor=\"let field1 of fieldArray1; let i = index\">\r\n                                                              <td>\r\n                                                                  <input [(ngModel)]=\"field1.materialtype\"  type=\"text\" name=\"{{field1.materialtype}}\" />\r\n                                                              </td>\r\n                                                            \r\n                                                              <td>\r\n                                                                  <input [(ngModel)]=\"field1.commitmentdate\"  type=\"text\" name=\"{{field1.commitmentdate}}\" />\r\n                                                              </td>\r\n                                                             \r\n                                                              \r\n                                                              <td>\r\n                                                                  <button mat-icon-button>\r\n                                                                      <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletematFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                    </button>\r\n                                                                 \r\n                                                                 \r\n                                                              </td>\r\n                                                          </tr>\r\n                                                         \r\n                                                      </tbody>\r\n                                                  </table>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                                         (closed)=\"panelOpenState = false\">\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                         Machine\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Machine detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Machine Type\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto6\" [(ngModel)]=\"newAttribute2.machinetype\">\r\n                                                  <mat-autocomplete #auto6=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                                      {{option}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                      <mat-form-field>\r\n                                                        <input matInput placeholder=\"Equipment Type\" [(ngModel)]=\"newAttribute2.equipmenttype\">\r\n                                                      </mat-form-field>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                            <mat-form-field>\r\n                                                              <input matInput placeholder=\"Model No\" [(ngModel)]=\"newAttribute2.modelno\" >\r\n                                                            </mat-form-field>\r\n                                                          </div>\r\n                                                          <div class=\"row\">\r\n                                                                <mat-form-field>\r\n                                                                  <input matInput placeholder=\"Serial NO\" [(ngModel)]=\"newAttribute2.serialno\">\r\n                                                                </mat-form-field>\r\n                                                              </div>\r\n                                                              <div class=\"button-row\">\r\n                                          \r\n                                                                    <button mat-raised-button color=\"accent\" (click)=\"addmacFieldValue()\">Add</button>\r\n                                                                    \r\n                                                                    \r\n                                                                  </div>    \r\n                                                                  \r\n                                                                  <table *ngIf=\"macadded\"  style=\"margin-top:20px\">\r\n                                                                      <thead>\r\n                                                                          <tr>\r\n                                                                              <th>Machine Type</th>\r\n                                                                              <th>Equipment Type</th>\r\n                                                                              <th>Model No</th>\r\n                                                                              <th>Serial No</th>\r\n                                                                              <th>Action</th>\r\n                                                                          </tr>\r\n                                                                      </thead>\r\n                                                                      <tbody>\r\n                                                                          <tr *ngFor=\"let field2 of fieldArray2; let i = index\">\r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.machinetype\" class=\"form-control\" type=\"text\" name=\"{{field2.machinetype}}\" />\r\n                                                                              </td>\r\n                                                                            \r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.equipmenttype\" class=\"form-control\" type=\"text\" name=\"{{field2.equipmenttype}}\" />\r\n                                                                              </td>\r\n                                                                             \r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.modelno\" class=\"form-control\" type=\"text\" name=\"{{field2.modelno}}\" />\r\n                                                                              </td>\r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.serialno\" class=\"form-control\" type=\"text\" name=\"{{field2.serialno}}\" />\r\n                                                                              </td>\r\n                                                                              <td>\r\n                                                                                  <button mat-icon-button>\r\n                                                                                      <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletemacFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                                    </button>\r\n                                                                                 \r\n                                                                                 \r\n                                                                              </td>\r\n                                                                          </tr>\r\n                                                                         \r\n                                                                      </tbody>\r\n                                                                  </table>\r\n                                    </mat-expansion-panel>\r\n                                  </mat-accordion>\r\n                                  </mat-card-content>\r\n                                </mat-card >\r\n                    </div>\r\n                    <div class=\"button-row\">\r\n                                          \r\n                        <button mat-raised-button color=\"accent\" (click)=\"postSite()\">Submit</button>\r\n                        \r\n                        \r\n                      </div>    \r\n                    </div>\r\n                    \r\n                    </div>\r\n                   \r\n                  \r\n            </mat-tab>\r\n            <mat-tab label=\"Escalation\"> <div class=\"escalation-box mat-elevation-z4\">\r\n                    <div >\r\n                        <button mat-mini-fab>\r\n                            <mat-icon aria-label=\"\" routerLink=\"../escalationview\">remove_red_eye</mat-icon>\r\n                          </button>\r\n                          <mat-progress-bar *ngIf=\"isLoadingResults\" mode=\"indeterminate\" ></mat-progress-bar>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Type of Escalation\" [(ngModel)]=\"escalationtype.escalationType\">\r\n                          </mat-form-field>\r\n                         \r\n                            \r\n              \r\n                                  <div class=\"button-row\">\r\n                                      \r\n                                      <button mat-raised-button color=\"accent\" (click)=\"postEscalationType()\">Add</button>\r\n                                      \r\n                                      \r\n                                    </div>\r\n                    </div>\r\n                     \r\n                    </div> </mat-tab>\r\n            </mat-tab-group>\r\n            </div>\r\n</div>\r\n</div>\r\n\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/masterdata/masterdata.component.ts":
/*!****************************************************!*\
  !*** ./src/app/masterdata/masterdata.component.ts ***!
  \****************************************************/
/*! exports provided: MasterdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterdataComponent", function() { return MasterdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-nav/my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MasterdataComponent = /** @class */ (function () {
    function MasterdataComponent(http, activaterouter, router, nav, data) {
        this.http = http;
        this.activaterouter = activaterouter;
        this.router = router;
        this.nav = nav;
        this.data = data;
        this.myControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.Contracttype = ['Manpower', 'Lumsum', 'SLA', 'One Time', 'Project Event', 'PartTimers'];
        this.Materialtype = ['Fixed materials', 'At Actual'];
        this.Designation = ['SENIOR MANAGER', 'MANAGER', 'ASST MANAGER'];
        this.isLoadingResults = false;
        this.fieldArray = [];
        this.fieldArray1 = [];
        this.fieldArray2 = [];
        this.newAttribute = {};
        this.newAttribute1 = {};
        this.newAttribute2 = {};
        this.matadded = false;
        this.manadded = false;
        this.macadded = false;
        this.visible = true;
        //Variable declation
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.emp = {};
        this.client = {};
        this.site = { "projectId": "", "projectName": "", "regionalManagerId": "", "seniorManagerId": "", "asstSeniorManagerId": "", "siteInchargeId": "",
            "manPowerDTO": [], "machineDTO": [], "materialDTO": [] };
        this.manpower = {};
        this.material = {};
        this.machine = {};
        this.escalationtype = {};
    }
    MasterdataComponent.prototype.materialtype = function (type) {
        console.log(type);
    };
    MasterdataComponent.prototype.addmanFieldValue = function (newAttribute) {
        this.manadded = true;
        this.fieldArray.push(this.newAttribute);
        // console.log(this.fieldArray);
        this.newAttribute = {};
    };
    MasterdataComponent.prototype.deletemanFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
        if (this.fieldArray.length < 1) {
            this.manadded = false;
        }
    };
    MasterdataComponent.prototype.addmatFieldValue = function (newAttribute1) {
        this.matadded = true;
        this.fieldArray1.push(this.newAttribute1);
        // console.log(this.fieldArray);
        this.newAttribute1 = {};
    };
    MasterdataComponent.prototype.deletematFieldValue = function (index) {
        this.fieldArray1.splice(index, 1);
        if (this.fieldArray1.length < 1) {
            this.matadded = false;
        }
    };
    MasterdataComponent.prototype.addmacFieldValue = function (newAttribute2) {
        this.macadded = true;
        this.fieldArray2.push(this.newAttribute2);
        // console.log(this.fieldArray);
        this.newAttribute2 = {};
    };
    MasterdataComponent.prototype.deletemacFieldValue = function (index) {
        this.fieldArray2.splice(index, 1);
        if (this.fieldArray2.length < 1) {
            this.macadded = false;
        }
    };
    MasterdataComponent.prototype.postEmployee = function () {
        var _this = this;
        this.http.post('http://localhost:8080/uds/employee', this.emp)
            .subscribe(function (data) {
            if (data.length) {
                console.log(data);
            }
            _this.isLoadingResults = false;
        }, function (error) {
        }, function () {
            console.log('finished');
        });
    };
    MasterdataComponent.prototype.postClient = function () {
        var _this = this;
        this.isLoadingResults = true;
        console.log(this.client);
        this.http.post('http://localhost:8080/uds/project', this.client)
            .subscribe(function (data) {
            if (data.length) {
                console.log(data);
            }
            _this.isLoadingResults = false;
        }, function (error) {
        }, function () {
            console.log('finished');
        });
    };
    MasterdataComponent.prototype.postSite = function () {
        this.site.manPowerDTO = this.fieldArray;
        this.site.machineDTO = this.fieldArray2;
        this.site.materialDTO = this.fieldArray1;
        // this.createSiteJson();
        console.log(this.site);
        this.http.post('http://localhost:8080/uds/site', this.site)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    MasterdataComponent.prototype.postEscalationType = function () {
        this.isLoadingResults = true;
        console.log(this.site);
        this.http.post('http://localhost:8080//uds/esctype', this.escalationtype)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
        }, function () {
            console.log('finished');
        });
    };
    MasterdataComponent.prototype.listClient = function () {
        var _this = this;
        this.data.getProjects().subscribe(function (data) { return _this.projects = data; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.listEmployees = function () {
        var _this = this;
        this.data.getEmployee().subscribe(function (data) { return _this.employees = data['content']; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.createSiteJson = function () {
        this.site.manPowerDTO.push(this.manpower);
        this.site.machineDTO.push(this.machine);
        this.site.materialDTO.push(this.material);
    };
    MasterdataComponent.prototype.setSiteProject = function (id) {
        console.log(id);
        this.site.projectId = id;
    };
    MasterdataComponent.prototype.setSiteRM = function (id) {
        console.log(id);
        this.site.regionalManagerId = id;
    };
    MasterdataComponent.prototype.setSiteSM = function (id) {
        console.log(id);
        this.site.seniorManagerId = id;
    };
    MasterdataComponent.prototype.setSiteASM = function (id) {
        console.log(id);
        this.site.asstSeniorManagerId = id;
    };
    MasterdataComponent.prototype.setSiteSI = function (id) {
        console.log(id);
        this.site.siteInchargeId = id;
        console.log(this.site);
    };
    MasterdataComponent.prototype.ngOnInit = function () {
        this.listClient();
        this.listEmployees();
        /* this.filteredOptions = this.myControl.valueChanges
           .pipe(
             startWith(''),
             map(value => this._filter(value))
           );*/
    };
    /*private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }*/
    MasterdataComponent.prototype.closeprogess = function () {
        this.isLoadingResults = false;
    };
    MasterdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterdata',
            template: __webpack_require__(/*! ./masterdata.component.html */ "./src/app/masterdata/masterdata.component.html"),
            styles: [__webpack_require__(/*! ./masterdata.component.css */ "./src/app/masterdata/masterdata.component.css")],
            providers: [_my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_1__["Toolbarservice"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_1__["Toolbarservice"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], MasterdataComponent);
    return MasterdataComponent;
}());



/***/ }),

/***/ "./src/app/masterview/masterview.component.css":
/*!*****************************************************!*\
  !*** ./src/app/masterview/masterview.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n   \r\n  }\r\n  .left_margin{\r\n      margin-left: 15px;\r\n  }\r\n  .left_margin-filter{\r\n    margin-left: 20px;\r\n}"

/***/ }),

/***/ "./src/app/masterview/masterview.component.html":
/*!******************************************************!*\
  !*** ./src/app/masterview/masterview.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <div id = \"layoutContainer\" \r\n  fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n  <div fxflex = \"100\" >\r\n      <div class=\"example-container\">\r\n          <mat-tab-group >\r\n            <mat-tab label=\"Employee\">\r\n              <div class=\"example-container mat-elevation-z8\">\r\n                <div class=\"example-loading-shade\"\r\n                     *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                    GitHub's API rate limit has been reached. It will be reset in one minute.\r\n                  </div>\r\n                </div>\r\n              \r\n                <div class=\"example-table-container\">\r\n              \r\n                  <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n                        >\r\n                    <!-- Number Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                      <th mat-header-cell *matHeaderCellDef>#</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- Title Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef>Title</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- State Column -->\r\n                    <ng-container matColumnDef=\"designation\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"mail\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"phone\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\r\n                    </ng-container>\r\n                   \r\n              \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                </div>\r\n              \r\n                <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Client\">\r\n              <div class=\"example-container mat-elevation-z8\">\r\n                <div class=\"example-loading-shade\"\r\n                     *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                    GitHub's API rate limit has been reached. It will be reset in one minute.\r\n                  </div>\r\n                </div>\r\n              \r\n                <div class=\"example-table-container\">\r\n              \r\n                  <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n                        >\r\n                    <!-- Number Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                      <th mat-header-cell *matHeaderCellDef>#</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- Title Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef>Title</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- State Column -->\r\n                    <ng-container matColumnDef=\"designation\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"mail\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"phone\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\r\n                    </ng-container>\r\n                   \r\n              \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                </div>\r\n              \r\n                <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Site\">  \r\n              <div class=\"example-container mat-elevation-z8\">\r\n                <div class=\"example-loading-shade\"\r\n                     *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                    GitHub's API rate limit has been reached. It will be reset in one minute.\r\n                  </div>\r\n                </div>\r\n              \r\n                <div class=\"example-table-container\">\r\n              \r\n                  <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n                        >\r\n                    <!-- Number Column -->\r\n                    <ng-container matColumnDef=\"code\">\r\n                      <th mat-header-cell *matHeaderCellDef>#</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- Title Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef>Title</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                    </ng-container>\r\n              \r\n                    <!-- State Column -->\r\n                    <ng-container matColumnDef=\"designation\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"mail\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"phone\">\r\n                      <th mat-header-cell *matHeaderCellDef>State</th>\r\n                      <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\r\n                    </ng-container>\r\n                   \r\n              \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                </div>\r\n              \r\n                <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\r\n              </div>\r\n                 \r\n                \r\n          </mat-tab>\r\n          <mat-tab label=\"Escalation\"> \r\n              <div class=\"example-container mat-elevation-z8\">\r\n                  <div class=\"example-loading-shade\"\r\n                       *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n                    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                      GitHub's API rate limit has been reached. It will be reset in one minute.\r\n                    </div>\r\n                  </div>\r\n                \r\n                  <div class=\"example-table-container\">\r\n                \r\n                    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n                          >\r\n                      <!-- Number Column -->\r\n                      <ng-container matColumnDef=\"code\">\r\n                        <th mat-header-cell *matHeaderCellDef>#</th>\r\n                        <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n                      </ng-container>\r\n                \r\n                      <!-- Title Column -->\r\n                      <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef>Title</th>\r\n                        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n                      </ng-container>\r\n                \r\n                      <!-- State Column -->\r\n                      <ng-container matColumnDef=\"designation\">\r\n                        <th mat-header-cell *matHeaderCellDef>State</th>\r\n                        <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"mail\">\r\n                        <th mat-header-cell *matHeaderCellDef>State</th>\r\n                        <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"phone\">\r\n                        <th mat-header-cell *matHeaderCellDef>State</th>\r\n                        <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\r\n                      </ng-container>\r\n                     \r\n                \r\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                  </div>\r\n                \r\n                  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\r\n                </div>  \r\n          </mat-tab>\r\n          </mat-tab-group>\r\n          </div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/masterview/masterview.component.ts":
/*!****************************************************!*\
  !*** ./src/app/masterview/masterview.component.ts ***!
  \****************************************************/
/*! exports provided: MasterviewComponent, UdsHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterviewComponent", function() { return MasterviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdsHttpDao", function() { return UdsHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterviewComponent = /** @class */ (function () {
    function MasterviewComponent(http) {
        this.http = http;
        this.displayedColumns = ['code', 'name', 'designation', 'mail', 'phone'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    MasterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.udsDatabase = new UdsHttpDao(this.http);
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            // tslint:disable-next-line:no-non-null-assertion
            return _this.udsDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MasterviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MasterviewComponent.prototype, "sort", void 0);
    MasterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masterview',
            template: __webpack_require__(/*! ./masterview.component.html */ "./src/app/masterview/masterview.component.html"),
            styles: [__webpack_require__(/*! ./masterview.component.css */ "./src/app/masterview/masterview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MasterviewComponent);
    return MasterviewComponent;
}());

var UdsHttpDao = /** @class */ (function () {
    function UdsHttpDao(http) {
        this.http = http;
    }
    UdsHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'http://localhost:8080/uds/employee/search';
        var requestUrl = href + "&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return UdsHttpDao;
}());



/***/ }),

/***/ "./src/app/models/employ.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/employ.model.ts ***!
  \****************************************/
/*! exports provided: Employ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employ", function() { return Employ; });
var Employ = /** @class */ (function () {
    function Employ() {
    }
    return Employ;
}());



/***/ }),

/***/ "./src/app/models/machinetransaction.model.ts":
/*!****************************************************!*\
  !*** ./src/app/models/machinetransaction.model.ts ***!
  \****************************************************/
/*! exports provided: MachineTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineTransaction", function() { return MachineTransaction; });
var MachineTransaction = /** @class */ (function () {
    function MachineTransaction() {
    }
    return MachineTransaction;
}());



/***/ }),

/***/ "./src/app/models/manpower.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/manpower.model.ts ***!
  \******************************************/
/*! exports provided: ManPower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManPower", function() { return ManPower; });
var ManPower = /** @class */ (function () {
    function ManPower() {
    }
    return ManPower;
}());



/***/ }),

/***/ "./src/app/models/manpowertransaction.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/manpowertransaction.model.ts ***!
  \*****************************************************/
/*! exports provided: ManPowerTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManPowerTransaction", function() { return ManPowerTransaction; });
var ManPowerTransaction = /** @class */ (function () {
    function ManPowerTransaction() {
    }
    return ManPowerTransaction;
}());



/***/ }),

/***/ "./src/app/models/materialtransaction.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/materialtransaction.model.ts ***!
  \*****************************************************/
/*! exports provided: MaterialTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTransaction", function() { return MaterialTransaction; });
var MaterialTransaction = /** @class */ (function () {
    function MaterialTransaction() {
    }
    return MaterialTransaction;
}());



/***/ }),

/***/ "./src/app/models/project.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/models/site.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/site.model.ts ***!
  \**************************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
var Site = /** @class */ (function () {
    function Site() {
    }
    return Site;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.mat-toolbar.mat-primary {\n  \n  position: -webkit-sticky;\n  \n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.material-icons.color_white { color: #2f496e; }\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-sidenav-container class=\"sidenav-container\"  >\r\n\r\n  <mat-sidenav *ngIf=\"router.url != '/'\" style=\"background: #92aac7\"\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\" >\r\n    <mat-toolbar color=\"primary\"><img class=\"logo\" src=\"assets/uds1.jpg\"></mat-toolbar>\r\n    <!-- <mat-nav-list >\r\n      <a mat-list-item ><i class=\"material-icons color_white\">description</i><span style=\"color: #fff;\">Master Data\r\n      <button mat-button mat-icon-button (click)=\"showSubmenu = !showSubmenu\">\r\n          <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubmenu}\">expand_more</mat-icon>\r\n        </button></span></a>\r\n        <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\">\r\n            <mat-list-item routerLink=\"masterview\"><span style=\"color: #fff;\">View</span></mat-list-item>\r\n            <mat-list-item routerLink=\"masterdata\"><span style=\"color: #fff;\">Add</span></mat-list-item>\r\n           \r\n          </div>\r\n    </mat-nav-list> -->\r\n      <mat-nav-list >\r\n          <a mat-list-item routerLink=\"masterdata\"><i class=\"material-icons color_white\">description</i><span style=\"color: #fff;\">Masterdata</span></a>\r\n      <a mat-list-item routerLink=\"opstracker\"><i class=\"material-icons color_white\">library_books</i><span style=\"color: #fff;\">OpsTracker</span></a>\r\n      <a mat-list-item routerLink=\"escalation\"><i class=\"material-icons color_white\">queue</i><span style=\"color: #fff;\">Escalation</span></a>\r\n      <a mat-list-item routerLink=\"report\"><i class=\"material-icons color_white\">report</i><span style=\"color: #fff;\">Report</span></a>\r\n    </mat-nav-list>\r\n   \r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar *ngIf=\"router.url != '/'\" color=\"primary\" >\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">Menu</mat-icon>\r\n      </button>\r\n      <span>Updater Service Opstracker</span>\r\n    </mat-toolbar>\r\n    \r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-nav.service */ "./src/app/my-nav/my-nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver, nav, router) {
        this.breakpointObserver = breakpointObserver;
        this.nav = nav;
        this.router = router;
        this.showSubmenu = false;
        this.isOpen = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        console.log(this.router.url);
    }
    MyNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-open'),
        __metadata("design:type", Object)
    ], MyNavComponent.prototype, "showSubmenu", void 0);
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")],
            providers: [_my_nav_service__WEBPACK_IMPORTED_MODULE_1__["Toolbarservice"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"], _my_nav_service__WEBPACK_IMPORTED_MODULE_1__["Toolbarservice"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.service.ts":
/*!******************************************!*\
  !*** ./src/app/my-nav/my-nav.service.ts ***!
  \******************************************/
/*! exports provided: Toolbarservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbarservice", function() { return Toolbarservice; });
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

var Toolbarservice = /** @class */ (function () {
    function Toolbarservice() {
        this.isOpen = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Toolbarservice.prototype, "change", void 0);
    Toolbarservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Toolbarservice);
    return Toolbarservice;
}());



/***/ }),

/***/ "./src/app/opstracker/opstracker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/opstracker/opstracker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n      padding-left: 20px;\r\n      padding-top: 20px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .accordian > * {\r\n    padding-left: 50px;\r\n    padding-top: 5px;\r\n \r\n}\r\n  \r\n  .example-stretched-tabs {\r\n    max-width: 800px;\r\n  }\r\n  \r\n  example-small-box, .employee-box ,.client-box , .site-box, .escalation-box, .opstracker-box , .material-box ,.machine-box{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .example-small-box {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .employee-box {\r\n    height: 400px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .client-box {\r\n    height: 200px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .site-box {\r\n    height:650px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .escalation-box {\r\n    height: 440px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .opstracker-box {\r\n    height: 180px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .material-box {\r\n    height: 550px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .machine-box {\r\n    height: 600px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .button-row button,\r\n.button-row a {\r\n  margin-left: 90px;\r\n  margin-top: 8px\r\n}\r\n  \r\n  .site-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n  \r\n  .example-full-width {\r\n  width: 100%;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n  \r\n  .mt{\r\n  margin-top: 100px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/opstracker/opstracker.component.html":
/*!******************************************************!*\
  !*** ./src/app/opstracker/opstracker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container \">\r\n    <div id = \"layoutContainer\" \r\n    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n    \r\n    <div fxflex = \"50\" >\r\n    <div >\r\n      <mat-card >\r\n          <mat-card-header>\r\n           \r\n                  <mat-card-title>Opstracker</mat-card-title>\r\n                 \r\n          </mat-card-header>\r\n          <mat-divider ></mat-divider> \r\n          <mat-card-content>\r\n          <div >\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker ></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\" placeholder=\"Client\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of projects\" [value]=\"option.name\" (onSelectionChange)=\"setProject(option.id)\">\r\n                  {{option.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n           \r\n            \r\n           \r\n           \r\n            \r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input type=\"text\" placeholder=\"Site\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n                  <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let option of sites\" [value]=\"option.name\" (onSelectionChange)=\"setSite(option.id)\" >\r\n                      {{option.name}}\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n             \r\n             \r\n                 \r\n  \r\n                    \r\n                      \r\n                   \r\n                   \r\n                       \r\n                        \r\n  \r\n       </div>\r\n       </mat-card-content>\r\n       </mat-card>\r\n       </div>\r\n      </div>\r\n       <div class=\"accordian\">\r\n          <div fxflex = \"50\" >\r\n             \r\n              <mat-tab-group >\r\n               \r\n                  <mat-tab label=\"Manpower\">\r\n                      <div class=\"employee-box mat-elevation-z4\">\r\n                      <div >\r\n                        \r\n                          <mat-form-field class=\"example-full-width\">\r\n                              <input type=\"text\" placeholder=\"Shift\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto3\">\r\n                              <mat-autocomplete #auto3=\"matAutocomplete\">\r\n                                <mat-option *ngFor=\"let option of shifts\" [value]=\"option\" (onSelectionChange)=\"setShiftDetails(option)\">\r\n                                  {{option}}\r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Planned\" [(ngModel)]=\"manpowertransaction.planned\">\r\n                              </mat-form-field>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Actual\" [(ngModel)]=\"manpowertransaction.actual\" (input)=\"setShortFall($event.target.value)\">\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Shortfall\" [(ngModel)]=\"manpowertransaction.shortfall\">\r\n                                  </mat-form-field>\r\n                                  <mat-form-field class=\"example-full-width\">\r\n                                      <input matInput placeholder=\"Total Number of Relivers\" [(ngModel)]=\"manpowertransaction.totalNoOfRelievers\">\r\n                                    </mat-form-field>\r\n              \r\n                                    <div class=\"button-row\">\r\n                                        \r\n                                        <button mat-raised-button color=\"accent\" (click)=\"postManPowerTransaction()\">Submit</button>\r\n                                        \r\n                                        \r\n                                      </div>\r\n                      </div>\r\n                       </div>\r\n                     \r\n                    </mat-tab>\r\n                   \r\n\r\n                   \r\n                        <mat-tab label=\"Material\">\r\n\r\n                            <div class=\"material-box mat-elevation-z4\">\r\n                                <div >\r\n                                  \r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input type=\"text\" placeholder=\"Material Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto4\">\r\n                                        <mat-autocomplete #auto4=\"matAutocomplete\">\r\n                                          <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                            {{option}}\r\n                                          </mat-option>\r\n                                        </mat-autocomplete>\r\n                                      </mat-form-field>\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input matInput [matDatepicker]=\"picker4\" placeholder=\"Commitment Date\" [(ngModel)]=\"materialtransaction.commitmentDate\">\r\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                                          <mat-datepicker #picker4></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Indent SubmissionDate\" [(ngModel)]=\"materialtransaction.indentSubmissionDate\">\r\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                          <mat-datepicker #picker1></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput [matDatepicker]=\"picker3\" placeholder=\"Material Supply Date\" [(ngModel)]=\"materialtransaction.materialSupplyDate\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker3></mat-datepicker>\r\n                                          </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                              <input matInput [matDatepicker]=\"picker2\" placeholder=\"Uniform Supply  Date\" [(ngModel)]=\"materialtransaction.uniformSupplyDate\">\r\n                                              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                              <mat-datepicker #picker2></mat-datepicker>\r\n                                            </mat-form-field>\r\n                                            \r\n                                              <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Staus\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto5\">\r\n                                                  <mat-autocomplete #auto5=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                                      {{option}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                                                <mat-form-field class=\"example-full-width\">\r\n                                                    <input matInput placeholder=\"Remarks\" [(ngModel)]=\"materialtransaction.remarks\">\r\n                                                  </mat-form-field>\r\n\r\n                                                  \r\n                                              <div class=\"button-row\">\r\n                                                  \r\n                                                  <button mat-raised-button color=\"accent\" (click)=\"postMaterialTransaction()\">Submit</button>\r\n                                                  \r\n                                                  \r\n                                                </div>\r\n                                </div>\r\n                                 </div>\r\n                          </mat-tab>\r\n                         \r\n\r\n\r\n                        \r\n                              <mat-tab label=\"Machine\">\r\n                                  <div class=\"material-box mat-elevation-z4\">\r\n                                      <div >\r\n                                  \r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input type=\"text\" placeholder=\"Type of Machine\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto6\">\r\n                                          <mat-autocomplete #auto6=\"matAutocomplete\">\r\n                                            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                              {{option}}\r\n                                            </mat-option>\r\n                                          </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                            <input type=\"text\" placeholder=\"Equipment Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto7\">\r\n                                            <mat-autocomplete #auto7=\"matAutocomplete\">\r\n                                              <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                                {{option}}\r\n                                              </mat-option>\r\n                                            </mat-autocomplete>\r\n                                          </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                              <input matInput placeholder=\"Model Number\" >\r\n                                            </mat-form-field>\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Serial Number\" >\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Status\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto8\">\r\n                                                  <mat-autocomplete #auto8=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                                      {{option}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                                              \r\n                                                <mat-form-field class=\"example-full-width\">\r\n                                                    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Complaint Raised  Date\">\r\n                                                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                                                    <mat-datepicker #picker6></mat-datepicker>\r\n                                                  </mat-form-field>\r\n                                                  <mat-form-field class=\"example-full-width\">\r\n                                                      <input matInput [matDatepicker]=\"picker7\" placeholder=\"Resolution  Date\">\r\n                                                      <mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n                                                      <mat-datepicker #picker7></mat-datepicker>\r\n                                                    </mat-form-field>\r\n                                                 \r\n                                                <div class=\"button-row\">\r\n                                                    \r\n                                                    <button mat-raised-button color=\"accent\" (click)=\"postMachineTransaction()\">Submit</button>\r\n                                                    \r\n                                                    \r\n                                                  </div>\r\n                                 \r\n                                   </div>\r\n                                   </div>\r\n                                </mat-tab>\r\n                               \r\n                                </mat-tab-group>\r\n            \r\n            </div>\r\n       </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/opstracker/opstracker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/opstracker/opstracker.component.ts ***!
  \****************************************************/
/*! exports provided: OpstrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackerComponent", function() { return OpstrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_site_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/site.model */ "./src/app/models/site.model.ts");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/project.model */ "./src/app/models/project.model.ts");
/* harmony import */ var _models_manpowertransaction_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/manpowertransaction.model */ "./src/app/models/manpowertransaction.model.ts");
/* harmony import */ var _models_manpower_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/manpower.model */ "./src/app/models/manpower.model.ts");
/* harmony import */ var _models_materialtransaction_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/materialtransaction.model */ "./src/app/models/materialtransaction.model.ts");
/* harmony import */ var _models_machinetransaction_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/machinetransaction.model */ "./src/app/models/machinetransaction.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OpstrackerComponent = /** @class */ (function () {
    //Constructor call
    function OpstrackerComponent(data, http) {
        this.data = data;
        this.http = http;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.project = new _models_project_model__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.site = new _models_site_model__WEBPACK_IMPORTED_MODULE_4__["Site"]();
        this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_7__["ManPower"]();
        this.manpowertransaction = new _models_manpowertransaction_model__WEBPACK_IMPORTED_MODULE_6__["ManPowerTransaction"]();
        this.materialtransaction = new _models_materialtransaction_model__WEBPACK_IMPORTED_MODULE_8__["MaterialTransaction"]();
        this.machinetransaction = new _models_machinetransaction_model__WEBPACK_IMPORTED_MODULE_9__["MachineTransaction"]();
        this.time = [];
        this.shifts = [];
    }
    //function call
    OpstrackerComponent.prototype.listClients = function () {
        var _this = this;
        this.data.getProjects().subscribe(function (data) { return _this.projects = data; });
        console.log(this.data);
    };
    OpstrackerComponent.prototype.listSites = function () {
        var _this = this;
        this.data.getSites().subscribe(function (data) { return _this.sites = data; });
        console.log(this.data);
    };
    OpstrackerComponent.prototype.setProject = function (id) {
        console.log(id);
        this.project.id = id;
        console.log(this.project);
    };
    OpstrackerComponent.prototype.setSite = function (id) {
        console.log(id);
        this.id = id;
        console.log(this.project);
        this.setManPower();
    };
    OpstrackerComponent.prototype.setManPower = function () {
        var _this = this;
        this.data.getSite(this.id).subscribe(function (data) {
            _this.site = data;
            _this.manpowers = _this.site.manPowerDTO;
            _this.manpowers.forEach(function (i) {
                _this.manpower = i;
                _this.shifts.push(_this.manpower.startTime + "-" + _this.manpower.endTime);
                console.log(_this.shifts);
            });
        });
    };
    OpstrackerComponent.prototype.setShiftDetails = function (shift) {
        var _this = this;
        console.log("shift" + shift);
        this.time.push(shift.split('-'));
        console.log("time" + this.time);
        this.manpowers.forEach(function (i) {
            _this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_7__["ManPower"]();
            _this.manpower = i;
            console.log(_this.time[0] == _this.manpower.startTime + "," + _this.manpower.endTime);
            if (_this.time[0] == _this.manpower.startTime + "," + _this.manpower.endTime) {
                _this.manpowertransaction.planned = 0;
                _this.manpowertransaction.planned = _this.manpower.planned;
                _this.manpowertransaction.shiftTime = shift;
                _this.manpowertransaction.siteId = _this.site.id;
                _this.manpowertransaction.projectId = _this.project.id;
            }
        });
        this.time = [];
        shift = " ";
        console.log("time" + this.time);
    };
    OpstrackerComponent.prototype.setShortFall = function (value) {
        console.log(value);
        this.manpowertransaction.actual = value;
        this.manpowertransaction.shortfall = this.manpowertransaction.planned - this.manpowertransaction.actual;
    };
    OpstrackerComponent.prototype.postManPowerTransaction = function () {
        console.log(this.manpowertransaction);
        try {
            this.http.post('http://localhost:8080/uds/opstracker/manpower', this.manpowertransaction)
                .subscribe(function (data) {
                if (data.length) {
                    console.log(data);
                    console.log("done");
                }
            });
        }
        catch (Exception) {
            console.error("not done");
        }
    };
    OpstrackerComponent.prototype.postMaterialTransaction = function () {
        console.log(this.materialtransaction);
    };
    OpstrackerComponent.prototype.postMachineTransaction = function () {
        console.log(this.machinetransaction);
    };
    OpstrackerComponent.prototype.ngOnInit = function () {
        this.listClients();
        this.listSites();
    };
    OpstrackerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstracker',
            template: __webpack_require__(/*! ./opstracker.component.html */ "./src/app/opstracker/opstracker.component.html"),
            styles: [__webpack_require__(/*! ./opstracker.component.css */ "./src/app/opstracker/opstracker.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OpstrackerComponent);
    return OpstrackerComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".per-page nav p {\r\n   \r\n    margin: 25px 10px;\r\n    font-weight: bold;\r\n    padding: 2px 0;\r\n}\r\n\r\n.per-page nav .pagination {\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nav aria-label=\"Pagination\" >\r\n      <ul class=\"pagination\">\r\n        <li [class.disabled]=\"current == 1\">\r\n          <a href=\"javascript:;\"\r\n             (click)=\"setPage(current-1, itemsPerPage)\"\r\n             aria-label=\"Previous\">\r\n            <span aria-hidden=\"true\">&laquo;</span>\r\n          </a>\r\n        </li>\r\n        <li *ngFor=\"let page of pages;\" [class.active]=\"page == current\">\r\n          <a href=\"javascript:;\" (click)=\"setPage(page, itemsPerPage)\">{{ page }}</a>\r\n        </li>\r\n        <li [class.disabled]=\"current == maxPages\">\r\n          <a href=\"javascript:;\" (click)=\"setPage(current+1 ,itemsPerPage)\" aria-label=\"Next\">\r\n            <span aria-hidden=\"true\">&raquo;</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <div class=\"col-lg-6 text-right per-page\">\r\n    <nav aria-label=\"Anzahl der Beiträge pro Seite\">\r\n      <p>Anzahl der Beiträge pro Seite:</p>\r\n      <ul class=\"pagination\">\r\n        <li *ngFor=\"let perPage of postsPerPage;\" [class.active]=\"perPage == itemsPerPage\">\r\n          <a href=\"javascript:;\" (click)=\"setPage(current, perPage)\">{{ perPage }}</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.pageModel = {
            page: this.current,
            itemsPerPage: this.itemsPerPage
        };
    }
    PaginationComponent.prototype.ngOnInit = function () {
        if (this.maxPages) {
            this.createPages();
        }
    };
    PaginationComponent.prototype.setPage = function (page, perPage) {
        console.log(page);
        this.pageModel.page = page;
        this.pageModel.itemsPerPage = perPage;
        this.changePage.emit(this.pageModel);
    };
    PaginationComponent.prototype.createPages = function () {
        for (var i = 1; i <= this.maxPages; i++) {
            this.pages.push(i);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "maxPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PaginationComponent.prototype, "postsPerPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "itemsPerPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n      GitHub's API rate limit has been reached. It will be reset in one minute.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-table-container\">\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n          >\r\n      <!-- Number Column -->\r\n      <ng-container matColumnDef=\"code\">\r\n        <th mat-header-cell *matHeaderCellDef>#</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef>Title</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n      </ng-container>\r\n\r\n      <!-- State Column -->\r\n      <ng-container matColumnDef=\"designation\">\r\n        <th mat-header-cell *matHeaderCellDef>State</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"mail\">\r\n        <th mat-header-cell *matHeaderCellDef>State</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"phone\">\r\n        <th mat-header-cell *matHeaderCellDef>State</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\r\n      </ng-container>\r\n     \r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = /** @class */ (function () {
    function ReportComponent(http) {
        this.http = http;
        this.displayedColumns = ['code', 'name', 'designation', 'mail', 'phone'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ReportComponent.prototype.ngOnInit = function () {
        // If the user changes the sort order, reset back to the first page.
        // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReportComponent.prototype, "sort", void 0);
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/siteupdate/siteupdate.component.css":
/*!*****************************************************!*\
  !*** ./src/app/siteupdate/siteupdate.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/siteupdate/siteupdate.component.html":
/*!******************************************************!*\
  !*** ./src/app/siteupdate/siteupdate.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  siteupdate works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/siteupdate/siteupdate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/siteupdate/siteupdate.component.ts ***!
  \****************************************************/
/*! exports provided: SiteupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteupdateComponent", function() { return SiteupdateComponent; });
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

var SiteupdateComponent = /** @class */ (function () {
    function SiteupdateComponent() {
    }
    SiteupdateComponent.prototype.ngOnInit = function () {
    };
    SiteupdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-siteupdate',
            template: __webpack_require__(/*! ./siteupdate.component.html */ "./src/app/siteupdate/siteupdate.component.html"),
            styles: [__webpack_require__(/*! ./siteupdate.component.css */ "./src/app/siteupdate/siteupdate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteupdateComponent);
    return SiteupdateComponent;
}());



/***/ }),

/***/ "./src/app/siteview/siteview.component.css":
/*!*************************************************!*\
  !*** ./src/app/siteview/siteview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/siteview/siteview.component.html":
/*!**************************************************!*\
  !*** ./src/app/siteview/siteview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n    <div class=\"div-left\"><button mat-mini-fab>\r\n        <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n      </button></div>\r\n    \r\n        <!-- <div class=\"example-loading-shade spinnerabove \"\r\n             *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n          <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n            \r\n          </div>\r\n        </div>\r\n       -->\r\n        \r\n      \r\n          <table mat-table [dataSource]=\"sit\" class=\"mat-elevation-z8\"\r\n                 matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n            <!-- Number Column -->\r\n            \r\n            <!-- Title Column -->\r\n            <ng-container  matColumnDef=\"id\">\r\n                <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n              </ng-container>\r\n        \r\n    \r\n            <ng-container  matColumnDef=\"name\">\r\n              <th mat-header-cell  *matHeaderCellDef>Name</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- State Column -->\r\n            <ng-container matColumnDef=\"code\">\r\n              <th mat-header-cell *matHeaderCellDef>Code</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- Created Column -->\r\n            <ng-container matColumnDef=\"designation\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Designation\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.designation}}</td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"mail\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Mail\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.mail}}</td>\r\n              </ng-container>\r\n    \r\n              <ng-container matColumnDef=\"mob\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                    Mobile\r\n                  </th>\r\n                  <td mat-cell *matCellDef=\"let row\">{{row.mob}}</td>\r\n                </ng-container>\r\n    \r\n               \r\n            <ng-container matColumnDef=\"actionsColumn\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button>\r\n                        <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog()\" >update</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                          <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog()\">delete</mat-icon>\r\n                        </button>\r\n                    \r\n                </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n       \r\n      \r\n        <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"  [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      \r\n    </div>"

/***/ }),

/***/ "./src/app/siteview/siteview.component.ts":
/*!************************************************!*\
  !*** ./src/app/siteview/siteview.component.ts ***!
  \************************************************/
/*! exports provided: SiteviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteviewComponent", function() { return SiteviewComponent; });
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

var SiteviewComponent = /** @class */ (function () {
    function SiteviewComponent() {
    }
    SiteviewComponent.prototype.ngOnInit = function () {
    };
    SiteviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-siteview',
            template: __webpack_require__(/*! ./siteview.component.html */ "./src/app/siteview/siteview.component.html"),
            styles: [__webpack_require__(/*! ./siteview.component.css */ "./src/app/siteview/siteview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteviewComponent);
    return SiteviewComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OpsTracker\OpsTrackerFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map