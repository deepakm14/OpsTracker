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
/* harmony import */ var _escalationtrackerview_escalationtrackerview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./escalationtrackerview/escalationtrackerview.component */ "./src/app/escalationtrackerview/escalationtrackerview.component.ts");
/* harmony import */ var _opsmachinetransaction_opsmachinetransaction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./opsmachinetransaction/opsmachinetransaction.component */ "./src/app/opsmachinetransaction/opsmachinetransaction.component.ts");
/* harmony import */ var _opsmaterialtransaction_opsmaterialtransaction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./opsmaterialtransaction/opsmaterialtransaction.component */ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.ts");
/* harmony import */ var _opsmanpowertransaction_opsmanpowertransaction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./opsmanpowertransaction/opsmanpowertransaction.component */ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.ts");
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
    },
    {
        path: 'EscalationtrackerComponent',
        component: _escalationtrackerview_escalationtrackerview_component__WEBPACK_IMPORTED_MODULE_12__["EscalationtrackerviewComponent"]
    },
    {
        path: 'opsmachinetransactionview',
        component: _opsmachinetransaction_opsmachinetransaction_component__WEBPACK_IMPORTED_MODULE_13__["OpsmachinetransactionComponent"]
    },
    {
        path: 'opsmaterialtransactionview',
        component: _opsmaterialtransaction_opsmaterialtransaction_component__WEBPACK_IMPORTED_MODULE_14__["OpsmaterialtransactionComponent"]
    },
    {
        path: 'opsmanpowertransactionview',
        component: _opsmanpowertransaction_opsmanpowertransaction_component__WEBPACK_IMPORTED_MODULE_15__["OpsmanpowertransactionComponent"]
    },
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
var routingComponents = [_escalation_escalation_component__WEBPACK_IMPORTED_MODULE_2__["EscalationComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"], _opstracker_opstracker_component__WEBPACK_IMPORTED_MODULE_3__["OpstrackerComponent"], _masterdata_masterdata_component__WEBPACK_IMPORTED_MODULE_4__["MasterdataComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _masterview_masterview_component__WEBPACK_IMPORTED_MODULE_7__["MasterviewComponent"], _emplyeeview_emplyeeview_component__WEBPACK_IMPORTED_MODULE_8__["EmplyeeviewComponent"], _clientview_clientview_component__WEBPACK_IMPORTED_MODULE_9__["ClientviewComponent"], _siteview_siteview_component__WEBPACK_IMPORTED_MODULE_10__["SiteviewComponent"], _escalationview_escalationview_component__WEBPACK_IMPORTED_MODULE_11__["EscalationviewComponent"], _opsmachinetransaction_opsmachinetransaction_component__WEBPACK_IMPORTED_MODULE_13__["OpsmachinetransactionComponent"], _opsmaterialtransaction_opsmaterialtransaction_component__WEBPACK_IMPORTED_MODULE_14__["OpsmaterialtransactionComponent"], _opsmanpowertransaction_opsmanpowertransaction_component__WEBPACK_IMPORTED_MODULE_15__["OpsmanpowertransactionComponent"]];


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
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast-service.service */ "./src/app/toast-service.service.ts");
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
    function AppComponent(activaterouter, router, nav, toastservice) {
        /*  if (this.router.url === '/masterdata') {
           this.nav.visible = false;
   
    } */
        this.activaterouter = activaterouter;
        this.router = router;
        this.nav = nav;
        this.toastservice = toastservice;
        this.title = 'udswebproject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_2__["Toolbarservice"], _toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
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
/* harmony import */ var _escalationtrackerview_escalationtrackerview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./escalationtrackerview/escalationtrackerview.component */ "./src/app/escalationtrackerview/escalationtrackerview.component.ts");
/* harmony import */ var _escalationtrackerdialog_escalationtrackerdialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./escalationtrackerdialog/escalationtrackerdialog.component */ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.ts");
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./toast-service.service */ "./src/app/toast-service.service.ts");
/* harmony import */ var _sitedialog_sitedialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./sitedialog/sitedialog.component */ "./src/app/sitedialog/sitedialog.component.ts");
/* harmony import */ var _sitemanpowerdialog_sitemanpowerdialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sitemanpowerdialog/sitemanpowerdialog.component */ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.ts");
/* harmony import */ var _sitemachinedailog_sitemachinedailog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sitemachinedailog/sitemachinedailog.component */ "./src/app/sitemachinedailog/sitemachinedailog.component.ts");
/* harmony import */ var _sitematerialdialog_sitematerialdialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sitematerialdialog/sitematerialdialog.component */ "./src/app/sitematerialdialog/sitematerialdialog.component.ts");
/* harmony import */ var _opstrackerview_opstrackerview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./opstrackerview/opstrackerview.component */ "./src/app/opstrackerview/opstrackerview.component.ts");
/* harmony import */ var _opstrackermanpowerdialog_opstrackermanpowerdialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./opstrackermanpowerdialog/opstrackermanpowerdialog.component */ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.ts");
/* harmony import */ var _opstrackermaterialdialog_opstrackermaterialdialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./opstrackermaterialdialog/opstrackermaterialdialog.component */ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.ts");
/* harmony import */ var _opstrackermachinedialog_opstrackermachinedialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./opstrackermachinedialog/opstrackermachinedialog.component */ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.ts");
/* harmony import */ var _opstrackermanpowerview_opstrackermanpowerview_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./opstrackermanpowerview/opstrackermanpowerview.component */ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _opsmanpowertransaction_opsmanpowertransaction_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./opsmanpowertransaction/opsmanpowertransaction.component */ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.ts");
/* harmony import */ var _opsmaterialtransaction_opsmaterialtransaction_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./opsmaterialtransaction/opsmaterialtransaction.component */ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.ts");
/* harmony import */ var _opsmachinetransaction_opsmachinetransaction_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./opsmachinetransaction/opsmachinetransaction.component */ "./src/app/opsmachinetransaction/opsmachinetransaction.component.ts");
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
                _escalationmainview_escalationmainview_component__WEBPACK_IMPORTED_MODULE_35__["EscalationmainviewComponent"],
                _escalationtrackerview_escalationtrackerview_component__WEBPACK_IMPORTED_MODULE_36__["EscalationtrackerviewComponent"],
                _escalationtrackerdialog_escalationtrackerdialog_component__WEBPACK_IMPORTED_MODULE_37__["EscalationtrackerdialogComponent"],
                _sitedialog_sitedialog_component__WEBPACK_IMPORTED_MODULE_39__["SitedialogComponent"],
                _sitemanpowerdialog_sitemanpowerdialog_component__WEBPACK_IMPORTED_MODULE_40__["SitemanpowerdialogComponent"],
                _sitemachinedailog_sitemachinedailog_component__WEBPACK_IMPORTED_MODULE_41__["SitemachinedailogComponent"],
                _sitematerialdialog_sitematerialdialog_component__WEBPACK_IMPORTED_MODULE_42__["SitematerialdialogComponent"],
                _opstrackerview_opstrackerview_component__WEBPACK_IMPORTED_MODULE_43__["OpstrackerviewComponent"],
                _opstrackermanpowerdialog_opstrackermanpowerdialog_component__WEBPACK_IMPORTED_MODULE_44__["OpstrackermanpowerdialogComponent"],
                _opstrackermaterialdialog_opstrackermaterialdialog_component__WEBPACK_IMPORTED_MODULE_45__["OpstrackermaterialdialogComponent"],
                _opstrackermachinedialog_opstrackermachinedialog_component__WEBPACK_IMPORTED_MODULE_46__["OpstrackermachinedialogComponent"],
                _opstrackermanpowerview_opstrackermanpowerview_component__WEBPACK_IMPORTED_MODULE_47__["OpstrackermanpowerviewComponent"],
                _opsmanpowertransaction_opsmanpowertransaction_component__WEBPACK_IMPORTED_MODULE_49__["OpsmanpowertransactionComponent"],
                _opsmaterialtransaction_opsmaterialtransaction_component__WEBPACK_IMPORTED_MODULE_50__["OpsmaterialtransactionComponent"],
                _opsmachinetransaction_opsmachinetransaction_component__WEBPACK_IMPORTED_MODULE_51__["OpsmachinetransactionComponent"],
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
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_48__["ToasterModule"].forRoot()
            ],
            entryComponents: [
                _employdialog_employdialog_component__WEBPACK_IMPORTED_MODULE_32__["EmploydialogComponent"], _clientdialog_clientdialog_component__WEBPACK_IMPORTED_MODULE_33__["ClientdialogComponent"], _escalationdialog_escalationdialog_component__WEBPACK_IMPORTED_MODULE_34__["EscalationdialogComponent"], _escalationtrackerdialog_escalationtrackerdialog_component__WEBPACK_IMPORTED_MODULE_37__["EscalationtrackerdialogComponent"], _sitemachinedailog_sitemachinedailog_component__WEBPACK_IMPORTED_MODULE_41__["SitemachinedailogComponent"], _sitemanpowerdialog_sitemanpowerdialog_component__WEBPACK_IMPORTED_MODULE_40__["SitemanpowerdialogComponent"], _sitematerialdialog_sitematerialdialog_component__WEBPACK_IMPORTED_MODULE_42__["SitematerialdialogComponent"], _opstrackermanpowerdialog_opstrackermanpowerdialog_component__WEBPACK_IMPORTED_MODULE_44__["OpstrackermanpowerdialogComponent"], _opstrackermaterialdialog_opstrackermaterialdialog_component__WEBPACK_IMPORTED_MODULE_45__["OpstrackermaterialdialogComponent"], _opstrackermachinedialog_opstrackermachinedialog_component__WEBPACK_IMPORTED_MODULE_46__["OpstrackermachinedialogComponent"],
            ],
            providers: [_toast_service_service__WEBPACK_IMPORTED_MODULE_38__["ToastService"]],
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
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/project/search/' + page + '/' + records;
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
    //reference variable for imported class
    //env: PropertyfileService;
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getEmployee = function (desg) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/searchbydesg/' + desg);
    };
    DataService.prototype.getEscalation = function () {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype/search');
    };
    DataService.prototype.getProjects = function () {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/project/search');
    };
    DataService.prototype.getSites = function () {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search');
    };
    DataService.prototype.getSite = function (id) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/' + id);
    };
    DataService.prototype.getSitemanpower = function (id) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/' + id);
    };
    DataService.prototype.getSitematerial = function (id) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/' + id);
    };
    DataService.prototype.getSitemachine = function (id) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/' + id);
    };
    DataService.prototype.getemployee = function (pages, records) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/search/' + pages + '/' + records);
    };
    DataService.prototype.getemployeebyid = function (id) {
        return this.http.get('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/search/' + id);
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

/***/ "./src/app/dateformat.service.ts":
/*!***************************************!*\
  !*** ./src/app/dateformat.service.ts ***!
  \***************************************/
/*! exports provided: Dateformat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dateformat", function() { return Dateformat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Dateformat = /** @class */ (function () {
    function Dateformat() {
    }
    Dateformat.prototype.convertdate = function (str) {
        var date = new Date(str);
        var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    };
    Dateformat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Dateformat);
    return Dateformat;
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
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/search/' + page + '/' + records;
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

module.exports = "<div class=\"example-container \">\r\n\r\n  <div>\r\n    <mat-card>\r\n        <button mat-mini-fab>\r\n            <mat-icon aria-label=\"\" routerLink=\"../EscalationtrackerComponent\">table_chart</mat-icon>\r\n          </button>\r\n      <mat-card-header>\r\n         \r\n        <mat-card-title></mat-card-title>\r\n\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\" ></mat-progress-bar> \r\n      <mat-card-content>\r\n        <div>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"Type of Escalation\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let escalation of escalation$\" [value]=\"escalation.escalationType\" (click)=\"setEscalationtype(escalation.escalationType)\" >\r\n                {{escalation.escalationType}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Description\" [(ngModel)]=\"esc2.description\">\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"Communicated Via\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n            <mat-autocomplete #auto1=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let com1 of communicatedvia; let i = index\" [value]=\"com1\" (click)=\"setCommunicatedvia(com1)\">\r\n                {{com1}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field> \r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Communicated Date\" format=\"dd-MM-yyyy\" [(ngModel)]=\"esc2.communicatedDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Closure Date\" format=\"dd-MM-yyyy\" [(ngModel)]=\"esc2.closureDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"Estimated Closure Date\" format=\"dd-MM-yyyy\" [(ngModel)]=\"esc2.estimatedClosureDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker2></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <div class=\"button-row\">\r\n\r\n            <button mat-raised-button color=\"accent\" (click)=\"postEscalationtracker()\">Submit</button>\r\n \r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>     \r\n        \r\n                    \r\n                   \r\n                       \r\n  \r\n"

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
/* harmony import */ var _models_escalation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/escalation.model */ "./src/app/models/escalation.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dateformat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dateformat.service */ "./src/app/dateformat.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
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
    function EscalationComponent(data, http, dateFormat, toasterService) {
        this.data = data;
        this.http = http;
        this.dateFormat = dateFormat;
        this.communicatedvia = ['Phone', 'Email'];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //esc2:Escalation[] = [];
        //public esc2={"typeOfEscalation":"","ommunicatedVia":""};
        this.esc2 = new _models_escalation_model__WEBPACK_IMPORTED_MODULE_3__["Escalation"]();
        this.newAttribute = {};
        this.isLoadingResults = false;
        this.toasterService = toasterService;
    }
    EscalationComponent.prototype.setEscalationtype = function (id) {
        console.log(id);
        this.esc2.typeOfEscalation = id;
    };
    EscalationComponent.prototype.setCommunicatedvia = function (id) {
        console.log(id);
        this.esc2.communicatedVia = id;
    };
    EscalationComponent.prototype.postEscalationtracker = function () {
        var _this = this;
        this.esc2.communicatedDate = this.dateFormat.convertdate(this.esc2.communicatedDate);
        this.esc2.estimatedClosureDate = this.dateFormat.convertdate(this.esc2.estimatedClosureDate);
        this.esc2.closureDate = this.dateFormat.convertdate(this.esc2.closureDate);
        this.isLoadingResults = true;
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalation', this.esc2)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
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
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _dateformat_service__WEBPACK_IMPORTED_MODULE_5__["Dateformat"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
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

/***/ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/escalationtrackerdialog/escalationtrackerdialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/escalationtrackerdialog/escalationtrackerdialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <mat-dialog-content>\r\n      \r\n      <div class=\"row\" >\r\n                            \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Types Of Escalation\" [(ngModel)]=\"data.typeOfEscalation\">\r\n          </mat-form-field>\r\n    \r\n    </div>\r\n\r\n    <div class=\"row\" >\r\n                            \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Description\" [(ngModel)]=\"data.description\">\r\n      </mat-form-field>\r\n    \r\n    </div>\r\n    <div class=\"row\" >\r\n                            \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Communicated Via\" [(ngModel)]=\"data.communicatedVia\">\r\n      </mat-form-field>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\" >\r\n                            \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Communicated Date\" [(ngModel)]=\"data.communicatedDate\">\r\n      </mat-form-field>\r\n    \r\n    </div>\r\n    <div class=\"row\" >\r\n                            \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Closure date\" [(ngModel)]=\"data.closureDate\">\r\n      </mat-form-field>\r\n    \r\n    </div>\r\n    <div class=\"row\" >\r\n                            \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Estimated Closure Date\" [(ngModel)]=\"data.estimatedClosureDate\">\r\n      </mat-form-field>\r\n    \r\n    </div>\r\n    \r\n     \r\n     \r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        \r\n          <div class=\"button-row\">\r\n                                              \r\n            <button mat-raised-button color=\"accent\" (click)=\"postEmployee()\" >Update</button>\r\n              <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n              \r\n            </div>    \r\n    \r\n    </mat-dialog-actions>\r\n      </div>"

/***/ }),

/***/ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/escalationtrackerdialog/escalationtrackerdialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: EscalationtrackerdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationtrackerdialogComponent", function() { return EscalationtrackerdialogComponent; });
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



var EscalationtrackerdialogComponent = /** @class */ (function () {
    function EscalationtrackerdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    EscalationtrackerdialogComponent.prototype.ngOnInit = function () {
    };
    EscalationtrackerdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    EscalationtrackerdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    EscalationtrackerdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationtrackerdialog',
            template: __webpack_require__(/*! ./escalationtrackerdialog.component.html */ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.html"),
            styles: [__webpack_require__(/*! ./escalationtrackerdialog.component.css */ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EscalationtrackerdialogComponent);
    return EscalationtrackerdialogComponent;
}());



/***/ }),

/***/ "./src/app/escalationtrackerview/escalationtrackerview.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/escalationtrackerview/escalationtrackerview.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/escalationtrackerview/escalationtrackerview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/escalationtrackerview/escalationtrackerview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n    <div class=\"div-left\"><button mat-mini-fab>\r\n        <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n      </button></div>\r\n    \r\n       <div class=\"example-loading-shade spinnerabove \"\r\n             *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n          <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n            \r\n          </div>\r\n        </div> \r\n    \r\n        \r\n      \r\n          <table mat-table [dataSource]=\"esc2\" class=\"mat-elevation-z8\"\r\n                 matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n            <!-- Number Column -->\r\n            \r\n            <!-- Title Column -->\r\n            <ng-container  matColumnDef=\"id\">\r\n                <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n              </ng-container>\r\n        \r\n    \r\n            <ng-container  matColumnDef=\"typeOfEscalation\">\r\n              <th mat-header-cell  *matHeaderCellDef>Types Of Escalation</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.typeOfEscalation}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- State Column -->\r\n            <ng-container matColumnDef=\"description\">\r\n              <th mat-header-cell *matHeaderCellDef>Description</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- Created Column -->\r\n            <ng-container matColumnDef=\"communicatedVia\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n               Communicated Via\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.communicatedVia}}</td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"communicatedDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Communicated Date\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.communicatedDate}}</td>\r\n              </ng-container>\r\n    \r\n              <ng-container matColumnDef=\"closureDate\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                    Closure Date\r\n                  </th>\r\n                  <td mat-cell *matCellDef=\"let row\">{{row.closureDate}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"estimatedClosureDate\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                      Estimated Closure Date\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let row\">{{row.estimatedClosureDate}}</td>\r\n                  </ng-container>\r\n    \r\n               <mat-divider></mat-divider> \r\n            <ng-container matColumnDef=\"actionsColumn\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                \r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button>\r\n                        <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button>\r\n                          <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                        </button>\r\n                   \r\n                </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n             \r\n          </table>\r\n       <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n      \r\n        <!--   <app-pagination [maxPages]=\"maxPages\"\r\n          [current]=\"1\"\r\n          [postsPerPage]=\"postsPerPage\"\r\n          [itemsPerPage]=\"itemsPerPage\"\r\n          (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n      \r\n    </div>"

/***/ }),

/***/ "./src/app/escalationtrackerview/escalationtrackerview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/escalationtrackerview/escalationtrackerview.component.ts ***!
  \**************************************************************************/
/*! exports provided: EscalationtrackerviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscalationtrackerviewComponent", function() { return EscalationtrackerviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_employ_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/employ.model */ "./src/app/models/employ.model.ts");
/* harmony import */ var _escalationtrackerdialog_escalationtrackerdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../escalationtrackerdialog/escalationtrackerdialog.component */ "./src/app/escalationtrackerdialog/escalationtrackerdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EscalationtrackerviewComponent = /** @class */ (function () {
    function EscalationtrackerviewComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.emp = [];
        this.esc2 = [];
        this.empid = new _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"]();
        this.displayedColumns = ['id', 'typeOfEscalation', 'description', 'communicatedVia', 'communicatedDate', 'closureDate', 'estimatedClosureDate', 'actionsColumn'];
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
    EscalationtrackerviewComponent.prototype.ngOnInit = function () {
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
        })).subscribe(function (data) { return _this.esc2 = data['content']; });
        // this.listEmployees();
    };
    EscalationtrackerviewComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.esc2.find(function (i) { return i.id === id; });
        var dialogRef = this.dialog.open(_escalationtrackerdialog_escalationtrackerdialog_component__WEBPACK_IMPORTED_MODULE_7__["EscalationtrackerdialogComponent"], {
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
    ], EscalationtrackerviewComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EscalationtrackerviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EscalationtrackerviewComponent.prototype, "sort", void 0);
    EscalationtrackerviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escalationtrackerview',
            template: __webpack_require__(/*! ./escalationtrackerview.component.html */ "./src/app/escalationtrackerview/escalationtrackerview.component.html"),
            styles: [__webpack_require__(/*! ./escalationtrackerview.component.css */ "./src/app/escalationtrackerview/escalationtrackerview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EscalationtrackerviewComponent);
    return EscalationtrackerviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/escalation/search/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
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
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype/search/' + page + '/' + records;
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

module.exports = "<div class=\"content\" >\r\n  <div >\r\n    <mat-card style=\"background-color:#d1dddb\">\r\n        <mat-card-header>\r\n         \r\n                <mat-card-title><p>Please login to continue</p></mat-card-title>\r\n               \r\n        </mat-card-header>\r\n        <mat-divider ></mat-divider> \r\n        <mat-card-content>\r\n        <div style=\"margin-top:10px\">\r\n           \r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Username\"  required >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"password\" placeholder=\"Password\"  required>\r\n          </mat-form-field>\r\n          <div class=\"button-row\">\r\n                                        \r\n            <button mat-raised-button color=\"accent\" (click)=\"onButtonclick()\">Login</button>\r\n            \r\n            \r\n          </div>\r\n         \r\n        \r\n         \r\n         \r\n          \r\n            \r\n               \r\n\r\n                  \r\n                    \r\n                 \r\n                 \r\n                     \r\n                      \r\n\r\n     </div>\r\n     </mat-card-content>\r\n     </mat-card>\r\n     </div>\r\n</div>"

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

module.exports = "<div class=\"example-container\">\r\n  \r\n    <div id = \"layoutContainer\" \r\n    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n    <div fxflex = \"100\" >\r\n        <div class=\"example-container\">\r\n            <mat-tab-group >\r\n            \r\n              <mat-tab label=\"Employee\">\r\n               <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoadingResults\" ></mat-progress-bar>   \r\n                  <div class=\"employee-box mat-elevation-z4\" >\r\n                    \r\n                    <div >\r\n                        <button mat-mini-fab>\r\n                            <mat-icon aria-label=\"\" routerLink=\"../emplyeeview\">table_chart</mat-icon>\r\n                          </button>\r\n                      <form class=\"m-t\" (ngSubmit)=\"f.form.valid && postEmployee()\" #f=\"ngForm\" novalidate >                 \r\n                        <mat-form-field class=\"example-full-width\" >\r\n                            <input class=\"form-control\" name=\"emp_code\" matInput placeholder=\"Employee Code\" [(ngModel)]=\"emp.code\" #EmpCode=\"ngModel\" required >\r\n                            <mat-error *ngIf=\"f.submitted && !EmpCode.valid\">\r\n                                Employee code is <strong>required</strong>\r\n                              </mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Employee Name\" [(ngModel)]=\"emp.name\" name=\"emp_name\" #EmpName=\"ngModel\" required>\r\n                            <mat-error *ngIf=\"f.submitted && !EmpName.valid\">\r\n                                Employee name is <strong>required</strong>\r\n                              </mat-error>\r\n                          </mat-form-field>    \r\n                        \r\n                          <mat-form-field class=\"example-full-width\">\r\n                              <input type=\"text\" matInput placeholder=\"Designation\" aria-label=\"Number\"  name=\"emp_designation\"  #EmpDesignation [matAutocomplete]=\"auto20\" required>\r\n                              <mat-autocomplete #auto20=\"matAutocomplete\" >\r\n                                <mat-option *ngFor=\"let des of Designation; let i = index\" [value]=\"des.name\" (click)=\"setDesignation(des.name)\">\r\n                                  {{des.name}}\r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n\r\n                              <mat-error *ngIf=\"f.submitted && !EmpDesignation.valid \">\r\n                                  Employee Designation is <strong>required</strong>\r\n                                </mat-error>\r\n\r\n                            </mat-form-field>\r\n                            \r\n                              <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Email\" [(ngModel)]=\"emp.mail\" name=\"emp_mail\" #EmpMail=\"ngModel\" required>\r\n                                <mat-error *ngIf=\"f.submitted && !EmpMail.valid \">\r\n                                  Employee Mail is <strong>required</strong>\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"emp.mob\" name=\"emp_mobile_no\" #EmpMob=\"ngModel\" required minlength=\"10\" maxlength=\"13\" (keypress)=\"numberOnly($event)\">\r\n                                    <mat-error *ngIf=\"f.submitted && !EmpMob.valid \">\r\n                                      Employee Mobile is <strong>required</strong>\r\n                                    </mat-error>\r\n                                  </mat-form-field>\r\n            \r\n                                  <div class=\"button-row\">\r\n                                      \r\n                                      <button mat-raised-button color=\"accent\" type=\"submit\" >Submit</button>\r\n                                      \r\n                                      \r\n                                    </div>\r\n                            </form>\r\n                    </div>\r\n                     \r\n                    </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"Client\"> <div class=\"client-box mat-elevation-z4\">\r\n                  <div >\r\n                      <mat-progress-bar *ngIf=\"isLoadingResults\" mode=\"indeterminate\" ></mat-progress-bar>\r\n                      <button mat-mini-fab>\r\n                          <mat-icon aria-label=\"\" routerLink=\"../clientview\">table_chart</mat-icon>\r\n                        </button>\r\n                        <form class=\"m-t\" (ngSubmit)=\"f2.form.valid && postClient()\" #f2=\"ngForm\" novalidate > \r\n                      <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Client Name\" [(ngModel)]=\"client.name\" name=\"Cli_name\" #CliName=\"ngModel\" required >\r\n                          <mat-error *ngIf=\"f2.submitted && !CliName.valid\">\r\n                              Client name is <strong>required</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Client Code\" [(ngModel)]=\"client.projectCode\"  name=\"Cli_code\" #Clicode=\"ngModel\" required >\r\n                            <mat-error *ngIf=\"f2.submitted && !Clicode.valid\">\r\n                                Client code is <strong>required</strong>\r\n                              </mat-error>\r\n                          </mat-form-field>\r\n                          \r\n\r\n                          \r\n                                <div class=\"button-row\">\r\n                                    \r\n                                    <button mat-raised-button color=\"accent\" type=\"submit\"  >Add</button>\r\n                                    \r\n                                    \r\n                                  </div>\r\n                                  </form>\r\n                  </div>\r\n                   \r\n                  </div> \r\n                </mat-tab>\r\n              <mat-tab label=\"Site\">  \r\n                  \r\n                    <div id = \"layoutContainer\" \r\n                    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n                    \r\n                    <div class=\"site-box mat-elevation-z4\">\r\n                      <div>\r\n                          <button mat-mini-fab>\r\n                              <mat-icon aria-label=\"\" routerLink=\"../siteview\">table_chart</mat-icon>\r\n                            </button>\r\n                    <div fxflex = \"40\" >\r\n                      \r\n                            <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Client Name\" aria-label=\"Number\" matInput  [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                                      <mat-option *ngFor=\"let option of projects\" [value]=\"option.name\" (click)=\"setSiteProject(option.id)\">\r\n                                        {{option.name}}\r\n                                      </mat-option>\r\n                                    </mat-autocomplete>\r\n                                  </mat-form-field>\r\n            \r\n                         \r\n                  <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Site Code\" [(ngModel)]=\"site.code\">\r\n                        </mat-form-field>   \r\n            \r\n                  <mat-form-field class=\"example-full-width\">\r\n                          <input matInput placeholder=\"Site Name\" [(ngModel)]=\"site.name\">\r\n                        </mat-form-field> \r\n            \r\n                        <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"Address\" [(ngModel)]=\"site.address\">\r\n                            </mat-form-field> \r\n            \r\n                             <mat-form-field class=\"example-full-width\">\r\n                                      <input type=\"text\" placeholder=\"Contract Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto11\">\r\n                                      <mat-autocomplete #auto11=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let cont of Contracttype\" [value]=\"cont\" (click)=\"setContractType(cont)\">\r\n                                          {{cont}}\r\n                                        </mat-option>\r\n                                      </mat-autocomplete>\r\n                                    </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                      <input type=\"text\" placeholder=\"Regional manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n                                      <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let option of rm\" [value]=\"option.name\" (click)=\"setSiteRM(option.id)\">\r\n                                          {{option.name}}\r\n                                        </mat-option>\r\n                                      </mat-autocomplete>\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                          <input type=\"text\" placeholder=\"Senior Manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto2\">\r\n                                          <mat-autocomplete #auto2=\"matAutocomplete\">\r\n                                            <mat-option *ngFor=\"let option of sm\" [value]=\"option.name\" (click)=\"setSiteSM(option.id)\">\r\n                                              {{option.name}}\r\n                                            </mat-option>\r\n                                          </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                              <input type=\"text\" placeholder=\"Asst Senior Manager\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto3\">\r\n                                              <mat-autocomplete #auto3=\"matAutocomplete\">\r\n                                                <mat-option *ngFor=\"let option of asm\" [value]=\"option.name\" (click)=\"setSiteASM(option.id)\">\r\n                                                  {{option.name}}\r\n                                                </mat-option>\r\n                                              </mat-autocomplete>\r\n                                            </mat-form-field>\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Site Incharge\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto4\">\r\n                                                  <mat-autocomplete #auto4=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of si\" [value]=\"option.name\" (click)=\"setSiteSI(option.id)\">\r\n                                                      {{option.name}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                    </div>\r\n                  </div> \r\n                    </div>\r\n                    \r\n                    <div class=\"accordian\">\r\n                    <div fxflex = \"40\" >\r\n                            <mat-card >\r\n                                    <mat-card-header>\r\n                                     \r\n                                            <mat-card-title>Types of Service</mat-card-title>\r\n                                           \r\n                                    </mat-card-header>\r\n                                    <mat-divider ></mat-divider> \r\n                                    <mat-card-content style=\"margin-top: 20px\">\r\n                            <mat-accordion>\r\n                                    <mat-expansion-panel>\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                         Manpower\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Manpower  Detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                            <mat-form-field>\r\n                                              <input matInput placeholder=\"Shift\"  [(ngModel)]=\"manpower.shift\" >\r\n                                            </mat-form-field>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                                  <mat-form-field>\r\n                                                    <input matInput placeholder=\"StartTime\"  [(ngModel)]=\"manpower.startTime\" >\r\n                                                  </mat-form-field>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                      <mat-form-field>\r\n                                                        <input matInput placeholder=\"EndTime\"  [(ngModel)]=\"manpower.endTime\" >\r\n                                                      </mat-form-field>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                          <mat-form-field>\r\n                                                            <input matInput placeholder=\"Planned\"   [(ngModel)]=\"manpower.planned\" >\r\n                                                          </mat-form-field>\r\n                                                        </div>\r\n                                                        <div class=\"button-row\">\r\n                                          \r\n                                                              <button mat-raised-button color=\"accent\" (click)=\"addmanFieldValue()\">Add</button>\r\n                                                              \r\n                                                              \r\n                                                            </div>                              \r\n                                                            <table *ngIf=\"manadded\"  style=\"margin-top:20px\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Shift</th>\r\n                                                                        <th>Start Time</th>\r\n                                                                        <th>End Time</th>\r\n                                                                        <th>Planned</th>\r\n                                                                        <th>Action</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.shift\" class=\"form-control\" type=\"text\" name=\"{{field.shift}}\" />\r\n                                                                        </td>\r\n                                                                      \r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.startTime\" class=\"form-control\" type=\"text\" name=\"{{field.startTime}}\" />\r\n                                                                        </td>\r\n                                                                       \r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.endTime\" class=\"form-control\" type=\"text\" name=\"{{field.endTime}}\" />\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <input [(ngModel)]=\"field.planned\" class=\"form-control\" type=\"text\" name=\"{{field.planned}}\" />\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <button mat-icon-button>\r\n                                                                                <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletemanFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                              </button>\r\n                                                                           \r\n                                                                           \r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                   \r\n                                                                </tbody>\r\n                                                            </table>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                                         (closed)=\"panelOpenState = false\">\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                          Material\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Material detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                            <input type=\"text\" placeholder=\"Material Type\" aria-label=\"Number\" matInput  [(ngModel)]=\"material.materialType\" [matAutocomplete]=\"auto5\">\r\n                                            <mat-autocomplete #auto5=\"matAutocomplete\" >\r\n                                              <mat-option *ngFor=\"let option of Materialtype\" [value]=\"option\" (click)=\"setMaterialType(option)\">\r\n                                                {{option}}\r\n                                              </mat-option>\r\n                                            </mat-autocomplete>\r\n                                          </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n\r\n                                          \r\n                                                <mat-form-field>\r\n                                                        <input matInput [matDatepicker]=\"picker\"  placeholder=\"Commitment Date\" [(ngModel)]=\"material.commitmentDate \">\r\n                                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                                        <mat-datepicker #picker ></mat-datepicker>\r\n                                                      </mat-form-field>\r\n                                              </div>\r\n                                              <div class=\"button-row\">\r\n                                          \r\n                                                    <button mat-raised-button color=\"accent\" (click)=\"addmatFieldValue()\">Add</button>\r\n                                                    \r\n                                                    \r\n                                                  </div>  \r\n                                                  \r\n                                                  <table *ngIf=\"matadded\"  style=\"margin-top:20px\">\r\n                                                      <thead>\r\n                                                          <tr>\r\n                                                              <th>Material Type</th>\r\n                                                              <th>Commitment Date</th>\r\n                                                              <th>Action</th>\r\n                                                             \r\n                                                          </tr>\r\n                                                      </thead>\r\n                                                      <tbody>\r\n                                                          <tr *ngFor=\"let field1 of fieldArray1; let i = index\">\r\n                                                              <td>\r\n                                                                  <input [(ngModel)]=\"field1.materialType\"  type=\"text\" name=\"{{field1.materialType}}\" />\r\n                                                              </td>\r\n                                                            \r\n                                                              <td>\r\n                                                                  <input [(ngModel)]=\"field1.commitmentDate\"  type=\"text\" name=\"{{field1.commitmentDate}}\" />\r\n                                                              </td>\r\n                                                             \r\n                                                              \r\n                                                              <td>\r\n                                                                  <button mat-icon-button>\r\n                                                                      <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletematFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                    </button>\r\n                                                                 \r\n                                                                 \r\n                                                              </td>\r\n                                                          </tr>\r\n                                                         \r\n                                                      </tbody>\r\n                                                  </table>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                                         (closed)=\"panelOpenState = false\">\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                         Machine\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                          Enter the Machine detail\r\n                                        </mat-panel-description>\r\n                                      </mat-expansion-panel-header>\r\n                                      <div class=\"row\">\r\n                                                <mat-form-field>\r\n                                                  <input matInput placeholder=\"Machine Type\" [(ngModel)]=\"machine.machineType\">\r\n                                                </mat-form-field>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                  <mat-form-field class=\"example-full-width\">\r\n                                                      <input type=\"text\" placeholder=\"Equipment Type\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto6\" [(ngModel)]=\"machine.equipmentType\">\r\n                                                      <mat-autocomplete #auto6=\"matAutocomplete\">\r\n                                                        <mat-option *ngFor=\"let option of Equipmenttype\" [value]=\"option\" (click)=\"setEquipmentType(option)\">\r\n                                                          {{option}}\r\n                                                        </mat-option>\r\n                                                      </mat-autocomplete>\r\n                                                    </mat-form-field>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                            <mat-form-field>\r\n                                                              <input matInput placeholder=\"Model No\" [(ngModel)]=\"machine.modelNo\" >\r\n                                                            </mat-form-field>\r\n                                                          </div>\r\n                                                          <div class=\"row\">\r\n                                                                <mat-form-field>\r\n                                                                  <input matInput placeholder=\"Serial NO\" [(ngModel)]=\"machine.serialNo\">\r\n                                                                </mat-form-field>\r\n                                                              </div>\r\n                                                              <div class=\"button-row\">\r\n                                          \r\n                                                                    <button mat-raised-button color=\"accent\" (click)=\"addmacFieldValue()\">Add</button>\r\n                                                                    \r\n                                                                    \r\n                                                                  </div>    \r\n                                                                  \r\n                                                                  <table *ngIf=\"macadded\"  style=\"margin-top:20px\">\r\n                                                                      <thead>\r\n                                                                          <tr>\r\n                                                                              <th>Machine Type</th>\r\n                                                                              <th>Equipment Type</th>\r\n                                                                              <th>Model No</th>\r\n                                                                              <th>Serial No</th>\r\n                                                                              <th>Action</th>\r\n                                                                          </tr>\r\n                                                                      </thead>\r\n                                                                      <tbody>\r\n                                                                          <tr *ngFor=\"let field2 of fieldArray2; let i = index\">\r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.machineType\" class=\"form-control\" type=\"text\" name=\"{{field2.machineType}}\" />\r\n                                                                              </td>\r\n                                                                            \r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.equipmentType\" class=\"form-control\" type=\"text\" name=\"{{field2.equipmentType}}\" />\r\n                                                                              </td>\r\n                                                                             \r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.modelNo\" class=\"form-control\" type=\"text\" name=\"{{field2.modelNo}}\" />\r\n                                                                              </td>\r\n                                                                              <td>\r\n                                                                                  <input [(ngModel)]=\"field2.serialNo\" class=\"form-control\" type=\"text\" name=\"{{field2.serialNo}}\" />\r\n                                                                              </td>\r\n                                                                              <td>\r\n                                                                                  <button mat-icon-button>\r\n                                                                                      <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"deletemacFieldValue(i)\">highlight_off</mat-icon>\r\n                                                                                    </button>\r\n                                                                                 \r\n                                                                                 \r\n                                                                              </td>\r\n                                                                          </tr>\r\n                                                                         \r\n                                                                      </tbody>\r\n                                                                  </table>\r\n                                    </mat-expansion-panel>\r\n                                  </mat-accordion>\r\n                                  </mat-card-content>\r\n                                </mat-card >\r\n                    </div>\r\n                    <div class=\"button-row\">\r\n                                          \r\n                        <button mat-raised-button color=\"accent\" (click)=\"postSite()\">Submit</button>\r\n                        \r\n                        \r\n                      </div>    \r\n                    </div>\r\n                    \r\n                    </div>\r\n                   \r\n                  \r\n            </mat-tab>\r\n            <mat-tab label=\"Escalation\"> <div class=\"escalation-box mat-elevation-z4\">\r\n                    <div >\r\n                        <mat-progress-bar *ngIf=\"isLoadingResults\" mode=\"indeterminate\" ></mat-progress-bar>\r\n                        <button mat-mini-fab>\r\n                            <mat-icon aria-label=\"\" routerLink=\"../escalationview\">table_chart</mat-icon>\r\n                          </button>\r\n\r\n                          <form class=\"m-t\" (ngSubmit)=\"f3.form.valid && postEmployee()\" #f3=\"ngForm\" novalidate >\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Type of Escalation\" [(ngModel)]=\"escalationtype.escalationType\" name=\"Esc_type\" #Escalation=\"ngModel\" required>\r\n                            <mat-error *ngIf=\"f3.submitted && !escalationtype.valid\">\r\n                                Esclation type is <strong>required</strong>\r\n                              </mat-error>\r\n                              \r\n                          </mat-form-field>\r\n                         \r\n                            \r\n              \r\n                                  <div class=\"button-row\">\r\n                                      \r\n                                      <button mat-raised-button color=\"accent\" (click)=\"postEscalationType()\">Add</button>\r\n                                      \r\n                                      \r\n                                    </div>\r\n                                    </form>\r\n                    </div>\r\n                     \r\n                    </div> </mat-tab>\r\n            </mat-tab-group>\r\n            </div>\r\n</div>\r\n</div>\r\n\r\n  \r\n</div>\r\n"

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
/* harmony import */ var _dateformat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dateformat.service */ "./src/app/dateformat.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_site_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/site.model */ "./src/app/models/site.model.ts");
/* harmony import */ var _models_manpower_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/manpower.model */ "./src/app/models/manpower.model.ts");
/* harmony import */ var _models_material_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/material.model */ "./src/app/models/material.model.ts");
/* harmony import */ var _models_machine_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/machine.model */ "./src/app/models/machine.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
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
    function MasterdataComponent(http, activaterouter, router, nav, data, dateFormat, toasterService) {
        this.http = http;
        this.activaterouter = activaterouter;
        this.router = router;
        this.nav = nav;
        this.data = data;
        this.dateFormat = dateFormat;
        //model class object creation
        this.site = new _models_site_model__WEBPACK_IMPORTED_MODULE_7__["Site"]();
        this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_8__["ManPower"]();
        this.material = new _models_material_model__WEBPACK_IMPORTED_MODULE_9__["Material"]();
        this.machine = new _models_machine_model__WEBPACK_IMPORTED_MODULE_10__["Machine"]();
        this.myControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.Equipmenttype = ['Rented', 'Amortised'];
        this.Contracttype = ['Manpower', 'Lumsum', 'SLA', 'One Time', 'Project Event', 'PartTimers'];
        this.Materialtype = ['Fixed materials', 'At Actual'];
        this.Designation = [{ 'id': '1', 'name': 'REGIONAL MANAGER' }, { 'id': '2', 'name': 'SENIOR MANAGER' }, { 'id': '3', 'name': 'SITE INCHARGE' }, { 'id': '4', 'name': 'ASSISTANT SENIOR MANAGER' }];
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterConfig"]({ positionClass: 'toast-center' });
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
        this.emp = { "designation": "" };
        this.client = {};
        //public manpower={};
        //public material={};
        //public machine={};
        this.escalationtype = {};
        this.toasterService = toasterService;
    }
    MasterdataComponent.prototype.popToast = function () {
        this.toasterService.pop('success', 'Args Title', 'Arg Body');
    };
    MasterdataComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MasterdataComponent.prototype.setMaterialType = function (type) {
        this.material.materialType = type;
        console.log(type);
    };
    MasterdataComponent.prototype.addmanFieldValue = function () {
        this.manadded = true;
        //this.date=new Date();
        this.fieldArray.push(this.manpower);
        console.log(this.fieldArray);
        this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_8__["ManPower"]();
    };
    MasterdataComponent.prototype.deletemanFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
        if (this.fieldArray.length < 1) {
            this.manadded = false;
        }
    };
    MasterdataComponent.prototype.addmatFieldValue = function () {
        this.matadded = true;
        //console.log(this.material);
        //this.material.commitmentDate = this.dateFormat.convertdate(this.material.commitmentDate);
        console.log(this.material.commitmentDate);
        this.fieldArray1.push(this.material);
        //console.log(this.fieldArray1);
        this.material = new _models_material_model__WEBPACK_IMPORTED_MODULE_9__["Material"]();
    };
    MasterdataComponent.prototype.deletematFieldValue = function (index) {
        this.fieldArray1.splice(index, 1);
        if (this.fieldArray1.length < 1) {
            this.matadded = false;
        }
    };
    MasterdataComponent.prototype.addmacFieldValue = function () {
        this.macadded = true;
        this.fieldArray2.push(this.machine);
        console.log(this.fieldArray2);
        this.machine = new _models_machine_model__WEBPACK_IMPORTED_MODULE_10__["Machine"]();
    };
    MasterdataComponent.prototype.deletemacFieldValue = function (index) {
        this.fieldArray2.splice(index, 1);
        if (this.fieldArray2.length < 1) {
            this.macadded = false;
        }
    };
    MasterdataComponent.prototype.postEmployee = function () {
        var _this = this;
        console.log(this.emp);
        this.isLoadingResults = true;
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee', this.emp)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
                _this.emp = { "designation": "" };
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    MasterdataComponent.prototype.postClient = function () {
        var _this = this;
        this.isLoadingResults = true;
        console.log(this.client);
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/project', this.client)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    MasterdataComponent.prototype.postSite = function () {
        var _this = this;
        this.site.manPowerDTO = this.fieldArray;
        this.site.machineDTO = this.fieldArray2;
        this.site.materialDTO = this.fieldArray1;
        // this.createSiteJson();
        console.log("converted date" + this.site.machineDTO);
        console.log(this.site);
        this.isLoadingResults = true;
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site', this.site)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    MasterdataComponent.prototype.postEscalationType = function () {
        var _this = this;
        this.isLoadingResults = true;
        console.log(this.site);
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/esctype', this.escalationtype)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    MasterdataComponent.prototype.listClient = function () {
        var _this = this;
        this.data.getProjects().subscribe(function (data) { return _this.projects = data; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.listRM = function () {
        var _this = this;
        this.data.getEmployee('REGIONAL MANAGER').subscribe(function (data) { return _this.rm = data; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.listSM = function () {
        var _this = this;
        this.data.getEmployee('SENIOR MANAGER').subscribe(function (data) { return _this.sm = data; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.listASM = function () {
        var _this = this;
        this.data.getEmployee('ASSISTANT SENIOR MANAGER').subscribe(function (data) { return _this.asm = data; });
        console.log(this.data);
    };
    MasterdataComponent.prototype.listSI = function () {
        var _this = this;
        this.data.getEmployee('SITE INCHARGE').subscribe(
        //data => this.employees = data['content']
        function (data) { return _this.si = data; });
        console.log(this.data);
    };
    //createSiteJson()
    //{
    //  this.site.manPowerDTO.push(this.manpower);
    //  this.site.machineDTO.push(this.machine);
    //  this.site.materialDTO.push(this.material);
    //}
    MasterdataComponent.prototype.setEquipmentType = function (type) {
        this.machine.equipmentType = type;
        console.log(this.machine.equipmentType);
    };
    MasterdataComponent.prototype.setContractType = function (id) {
        console.log(id);
        this.site.contractType = id;
    };
    MasterdataComponent.prototype.setDesignation = function (id) {
        console.log(id);
        this.emp.designation = id;
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
        this.listRM();
        this.listSM();
        this.listASM();
        this.listSI();
        // this.popToast();
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _my_nav_my_nav_service__WEBPACK_IMPORTED_MODULE_1__["Toolbarservice"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _dateformat_service__WEBPACK_IMPORTED_MODULE_5__["Dateformat"], angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterService"]])
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
/* harmony import */ var _dateformat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dateformat.service */ "./src/app/dateformat.service.ts");
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
    function MasterviewComponent(http, dateformat) {
        this.http = http;
        this.dateformat = dateformat;
        this.displayedColumns = ['code', 'name', 'designation', 'mail', 'phone'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    MasterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.dateformat.convertdate('Wed Aug 29 2018 00:00:00 GMT+0530 (India Standard Time)'));
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _dateformat_service__WEBPACK_IMPORTED_MODULE_5__["Dateformat"]])
    ], MasterviewComponent);
    return MasterviewComponent;
}());

var UdsHttpDao = /** @class */ (function () {
    function UdsHttpDao(http) {
        this.http = http;
    }
    UdsHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com/uds/employee/search';
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

/***/ "./src/app/models/escalation.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/escalation.model.ts ***!
  \********************************************/
/*! exports provided: Escalation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escalation", function() { return Escalation; });
var Escalation = /** @class */ (function () {
    function Escalation() {
    }
    return Escalation;
}());



/***/ }),

/***/ "./src/app/models/machine.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/machine.model.ts ***!
  \*****************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
var Machine = /** @class */ (function () {
    function Machine() {
    }
    return Machine;
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

/***/ "./src/app/models/material.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/material.model.ts ***!
  \******************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
var Material = /** @class */ (function () {
    function Material() {
    }
    return Material;
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

/***/ "./src/app/models/sitemachinedialog.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/sitemachinedialog.model.ts ***!
  \***************************************************/
/*! exports provided: Sitemachinedialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sitemachinedialog", function() { return Sitemachinedialog; });
var Sitemachinedialog = /** @class */ (function () {
    function Sitemachinedialog() {
    }
    return Sitemachinedialog;
}());



/***/ }),

/***/ "./src/app/models/sitemanpowerdialog.model.ts":
/*!****************************************************!*\
  !*** ./src/app/models/sitemanpowerdialog.model.ts ***!
  \****************************************************/
/*! exports provided: Sitemanpowerdialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sitemanpowerdialog", function() { return Sitemanpowerdialog; });
var Sitemanpowerdialog = /** @class */ (function () {
    function Sitemanpowerdialog() {
    }
    return Sitemanpowerdialog;
}());



/***/ }),

/***/ "./src/app/models/sitematerialdialog.model.ts":
/*!****************************************************!*\
  !*** ./src/app/models/sitematerialdialog.model.ts ***!
  \****************************************************/
/*! exports provided: Sitematerialdialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sitematerialdialog", function() { return Sitematerialdialog; });
var Sitematerialdialog = /** @class */ (function () {
    function Sitematerialdialog() {
    }
    return Sitematerialdialog;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  \r\n  position: -webkit-sticky;\r\n  \r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.material-icons.color_white { color: #d1dddb; }\r\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-sidenav-container class=\"sidenav-container\"  >\r\n\r\n  <mat-sidenav *ngIf=\"router.url != '/'\" style=\"background: #283b42\"\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\" >\r\n    <mat-toolbar color=\"primary\"><img class=\"logo\" src=\"assets/uds1.jpg\"></mat-toolbar>\r\n    <!-- <mat-nav-list >\r\n      <a mat-list-item ><i class=\"material-icons color_white\">description</i><span style=\"color: #fff;\">Master Data\r\n      <button mat-button mat-icon-button (click)=\"showSubmenu = !showSubmenu\">\r\n          <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubmenu}\">expand_more</mat-icon>\r\n        </button></span></a>\r\n        <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\">\r\n            <mat-list-item routerLink=\"masterview\"><span style=\"color: #fff;\">View</span></mat-list-item>\r\n            <mat-list-item routerLink=\"masterdata\"><span style=\"color: #fff;\">Add</span></mat-list-item>\r\n           \r\n          </div>\r\n    </mat-nav-list> -->\r\n      <mat-nav-list >\r\n          <a mat-list-item routerLink=\"masterdata\"><i class=\"material-icons color_white\">description</i><span style=\"color: #fff;\">Masterdata</span></a>\r\n      <a mat-list-item routerLink=\"opstracker\"><i class=\"material-icons color_white\">library_books</i><span style=\"color: #fff;\">OpsTracker</span></a>\r\n      <a mat-list-item routerLink=\"escalation\"><i class=\"material-icons color_white\">queue</i><span style=\"color: #fff;\">Escalation</span></a>\r\n      <a mat-list-item routerLink=\"report\"><i class=\"material-icons color_white\">report</i><span style=\"color: #fff;\">Report</span></a>\r\n    </mat-nav-list>\r\n   \r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar *ngIf=\"router.url != '/'\" color=\"primary\" >\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">Menu</mat-icon>\r\n      </button>\r\n      <span>Updater Service Opstracker</span>\r\n    </mat-toolbar>\r\n    \r\n    \r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n    <toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

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

/***/ "./src/app/opsmachinetransaction/opsmachinetransaction.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/opsmachinetransaction/opsmachinetransaction.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/opsmachinetransaction/opsmachinetransaction.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/opsmachinetransaction/opsmachinetransaction.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n  <div class=\"div-left\"><button mat-mini-fab>\r\n      <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n    </button></div>\r\n  \r\n     <div class=\"example-loading-shade spinnerabove \"\r\n           *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n        <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n          \r\n        </div>\r\n      </div> \r\n  \r\n      \r\n    \r\n        <table mat-table [dataSource]=\"manpower\" class=\"mat-elevation-z8\"\r\n               matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n          <!-- Number Column -->\r\n          \r\n          <!-- Title Column -->\r\n          <ng-container  matColumnDef=\"id\">\r\n              <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n            </ng-container>\r\n      \r\n  \r\n          <ng-container  matColumnDef=\"machineType\">\r\n            <th mat-header-cell  *matHeaderCellDef>Machine Type</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.machineType}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- State Column -->\r\n          <ng-container matColumnDef=\"equipmentType\">\r\n            <th mat-header-cell *matHeaderCellDef>Equipment Type</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.equipmentType}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- Created Column -->\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n              Status\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.status}}</td>\r\n          </ng-container>\r\n  \r\n          <ng-container matColumnDef=\"complaintRaisedDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Complaint Raised date\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.complaintRaisedDate}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"ResolutionDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Resolution Date\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.ResolutionDate}}</td>\r\n              </ng-container>\r\n             \r\n              \r\n  \r\n             <mat-divider></mat-divider> \r\n          <ng-container matColumnDef=\"actionsColumn\">\r\n              <th mat-header-cell *matHeaderCellDef>Action</th>\r\n              \r\n              <mat-cell *matCellDef=\"let row\">\r\n                  <button mat-icon-button>\r\n                      <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button>\r\n                        <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                      </button>\r\n                 \r\n              </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n           \r\n        </table>\r\n     <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n    \r\n      <!--   <app-pagination [maxPages]=\"maxPages\"\r\n        [current]=\"1\"\r\n        [postsPerPage]=\"postsPerPage\"\r\n        [itemsPerPage]=\"itemsPerPage\"\r\n        (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/opsmachinetransaction/opsmachinetransaction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/opsmachinetransaction/opsmachinetransaction.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpsmachinetransactionComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpsmachinetransactionComponent", function() { return OpsmachinetransactionComponent; });
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









var OpsmachinetransactionComponent = /** @class */ (function () {
    function OpsmachinetransactionComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.emp = [];
        this.machine = [];
        this.empid = new _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"]();
        this.displayedColumns = ['id', 'machineType', 'equipmentType', 'status', 'complaintRaisedDate', 'ResolutionDate', 'actionsColumn'];
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
    OpsmachinetransactionComponent.prototype.ngOnInit = function () {
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
        })).subscribe(function (data) { return _this.machine = data['content']; });
        // this.listEmployees();
    };
    OpsmachinetransactionComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.machine.find(function (i) { return i.id === id; });
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
    ], OpsmachinetransactionComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OpsmachinetransactionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OpsmachinetransactionComponent.prototype, "sort", void 0);
    OpsmachinetransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opsmachinetransaction',
            template: __webpack_require__(/*! ./opsmachinetransaction.component.html */ "./src/app/opsmachinetransaction/opsmachinetransaction.component.html"),
            styles: [__webpack_require__(/*! ./opsmachinetransaction.component.css */ "./src/app/opsmachinetransaction/opsmachinetransaction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OpsmachinetransactionComponent);
    return OpsmachinetransactionComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/search/manpowertransaction/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/opsmanpowertransaction/opsmanpowertransaction.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/opsmanpowertransaction/opsmanpowertransaction.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n  <div class=\"div-left\"><button mat-mini-fab>\r\n      <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n    </button></div>\r\n  \r\n     <div class=\"example-loading-shade spinnerabove \"\r\n           *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n        <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n          \r\n        </div>\r\n      </div> \r\n  \r\n      \r\n    \r\n        <table mat-table [dataSource]=\"manpower\" class=\"mat-elevation-z8\"\r\n               matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n          <!-- Number Column -->\r\n          \r\n          <!-- Title Column -->\r\n          <ng-container  matColumnDef=\"id\">\r\n              <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n            </ng-container>\r\n      \r\n  \r\n          <ng-container  matColumnDef=\"planned\">\r\n            <th mat-header-cell  *matHeaderCellDef>Planned</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.planned}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- State Column -->\r\n          <ng-container matColumnDef=\"actual\">\r\n            <th mat-header-cell *matHeaderCellDef>Actual</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.actual}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- Created Column -->\r\n          <ng-container matColumnDef=\"shortfall\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n              Short Fall\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.shortfall}}</td>\r\n          </ng-container>\r\n  \r\n          <ng-container matColumnDef=\"continuedWithOt\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Continued with OT\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.continuedWithOt}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"continuedWithOutOt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Continued Without OT\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.continuedWithOutOt}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"newComer\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  New Comer\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.newComer}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"shiftTime\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Shift Time\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.shiftTime}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"projectId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Project Id\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.projectId}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"siteId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  site Id\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.siteId}}</td>\r\n              </ng-container>\r\n  \r\n             <mat-divider></mat-divider> \r\n          <ng-container matColumnDef=\"actionsColumn\">\r\n              <th mat-header-cell *matHeaderCellDef>Action</th>\r\n              \r\n              <mat-cell *matCellDef=\"let row\">\r\n                  <button mat-icon-button>\r\n                      <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button>\r\n                        <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                      </button>\r\n                 \r\n              </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n           \r\n        </table>\r\n     <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n    \r\n      <!--   <app-pagination [maxPages]=\"maxPages\"\r\n        [current]=\"1\"\r\n        [postsPerPage]=\"postsPerPage\"\r\n        [itemsPerPage]=\"itemsPerPage\"\r\n        (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/opsmanpowertransaction/opsmanpowertransaction.component.ts ***!
  \****************************************************************************/
/*! exports provided: OpsmanpowertransactionComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpsmanpowertransactionComponent", function() { return OpsmanpowertransactionComponent; });
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









var OpsmanpowertransactionComponent = /** @class */ (function () {
    function OpsmanpowertransactionComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.emp = [];
        this.manpower = [];
        this.empid = new _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"]();
        this.displayedColumns = ['id', 'planned', 'actual', 'shortfall', 'continuedWithOt', 'continuedWithOutOt', 'newComer', 'shiftTime', 'projectId', 'siteId', 'actionsColumn'];
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
    OpsmanpowertransactionComponent.prototype.ngOnInit = function () {
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
        })).subscribe(function (data) { return _this.manpower = data['content']; });
        // this.listEmployees();
    };
    OpsmanpowertransactionComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.manpower.find(function (i) { return i.id === id; });
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
    ], OpsmanpowertransactionComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OpsmanpowertransactionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OpsmanpowertransactionComponent.prototype, "sort", void 0);
    OpsmanpowertransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opsmanpowertransaction',
            template: __webpack_require__(/*! ./opsmanpowertransaction.component.html */ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.html"),
            styles: [__webpack_require__(/*! ./opsmanpowertransaction.component.css */ "./src/app/opsmanpowertransaction/opsmanpowertransaction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OpsmanpowertransactionComponent);
    return OpsmanpowertransactionComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/search/manpowertransaction/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/opsmaterialtransaction/opsmaterialtransaction.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/opsmaterialtransaction/opsmaterialtransaction.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n  <div class=\"div-left\"><button mat-mini-fab>\r\n      <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n    </button></div>\r\n  \r\n     <div class=\"example-loading-shade spinnerabove \"\r\n           *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n        <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n          \r\n        </div>\r\n      </div> \r\n  \r\n      \r\n    \r\n        <table mat-table [dataSource]=\"manpower\" class=\"mat-elevation-z8\"\r\n               matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n          <!-- Number Column -->\r\n          \r\n          <!-- Title Column -->\r\n          <ng-container  matColumnDef=\"id\">\r\n              <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n            </ng-container>\r\n      \r\n  \r\n          <ng-container  matColumnDef=\"materialType\">\r\n            <th mat-header-cell  *matHeaderCellDef>Material Type</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.materialType}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- State Column -->\r\n          <ng-container matColumnDef=\"commitmentDate\">\r\n            <th mat-header-cell *matHeaderCellDef>Commitment Date</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.commitmentDate}}</td>\r\n          </ng-container>\r\n    \r\n          <!-- Created Column -->\r\n          <ng-container matColumnDef=\"indentSubmissionDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n              Indent Submission Date\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.indentSubmissionDate}}</td>\r\n          </ng-container>\r\n  \r\n          <ng-container matColumnDef=\"materialSupplyDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Material Supply Date\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.materialSupplyDate}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"uniformSupplyDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Uniform Supply Date\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.uniformSupplyDate}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Status\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.status}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"remarks\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Remarks\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.remarks}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"projectId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Project Id\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.projectId}}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"siteId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  site Id\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.siteId}}</td>\r\n              </ng-container>\r\n  \r\n             <mat-divider></mat-divider> \r\n          <ng-container matColumnDef=\"actionsColumn\">\r\n              <th mat-header-cell *matHeaderCellDef>Action</th>\r\n              \r\n              <mat-cell *matCellDef=\"let row\">\r\n                  <button mat-icon-button>\r\n                      <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button>\r\n                        <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                      </button>\r\n                 \r\n              </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n           \r\n        </table>\r\n     <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n    \r\n      <!--   <app-pagination [maxPages]=\"maxPages\"\r\n        [current]=\"1\"\r\n        [postsPerPage]=\"postsPerPage\"\r\n        [itemsPerPage]=\"itemsPerPage\"\r\n        (changePage)=\"pageChanged($event)\"></app-pagination> -->\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/opsmaterialtransaction/opsmaterialtransaction.component.ts ***!
  \****************************************************************************/
/*! exports provided: OpsmaterialtransactionComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpsmaterialtransactionComponent", function() { return OpsmaterialtransactionComponent; });
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









var OpsmaterialtransactionComponent = /** @class */ (function () {
    function OpsmaterialtransactionComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.emp = [];
        this.material = [];
        this.empid = new _models_employ_model__WEBPACK_IMPORTED_MODULE_6__["Employ"]();
        this.displayedColumns = ['id', 'materialType', 'commitmentDate', 'indentSubmissionDate', 'materialSupplyDate', 'uniformSupplyDate', 'status', 'remarks', 'projectId', 'siteId', 'actionsColumn'];
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
    OpsmaterialtransactionComponent.prototype.ngOnInit = function () {
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
        })).subscribe(function (data) { return _this.material = data['content']; });
        // this.listEmployees();
    };
    OpsmaterialtransactionComponent.prototype.openDialog = function (id) {
        var _this = this;
        var item1 = this.material.find(function (i) { return i.id === id; });
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
    ], OpsmaterialtransactionComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OpsmaterialtransactionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OpsmaterialtransactionComponent.prototype, "sort", void 0);
    OpsmaterialtransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opsmaterialtransaction',
            template: __webpack_require__(/*! ./opsmaterialtransaction.component.html */ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.html"),
            styles: [__webpack_require__(/*! ./opsmaterialtransaction.component.css */ "./src/app/opsmaterialtransaction/opsmaterialtransaction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OpsmaterialtransactionComponent);
    return OpsmaterialtransactionComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/search/materialtransaction/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/opstracker/opstracker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/opstracker/opstracker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n      padding-left: 20px;\r\n      padding-top: 20px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .accordian > * {\r\n    padding-left: 50px;\r\n    padding-top: 5px;\r\n \r\n}\r\n  \r\n  .example-stretched-tabs {\r\n    max-width: 800px;\r\n  }\r\n  \r\n  example-small-box, .employee-box ,.client-box , .site-box, .escalation-box, .opstracker-box , .material-box ,.machine-box{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .example-small-box {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .employee-box {\r\n    height: 400px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .manpower-box {\r\n    height: 400px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .client-box {\r\n    height: 200px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .site-box {\r\n    height:650px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .escalation-box {\r\n    height: 440px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .opstracker-box {\r\n    height: 180px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .material-box {\r\n    height: 600px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .machine-box {\r\n    height: 600px;\r\n    width: 300px;\r\n  }\r\n  \r\n  .button-row button,\r\n.button-row a {\r\n  margin-left: 90px;\r\n  margin-top: 8px\r\n}\r\n  \r\n  .site-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n  \r\n  .example-full-width {\r\n  width: 100%;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n  \r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n  \r\n  .mt{\r\n  margin-top: 100px;\r\n}\r\n\r\n  "

/***/ }),

/***/ "./src/app/opstracker/opstracker.component.html":
/*!******************************************************!*\
  !*** ./src/app/opstracker/opstracker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container \">\r\n    <div id = \"layoutContainer\" \r\n    fxLayout = \"row\" fxLayout.xs=\"column\" fxLayoutwrap fxLayoutGap=\"0.15%\">\r\n    \r\n    <div fxflex = \"50\" >\r\n    <div >\r\n      <mat-card >\r\n          <mat-card-header>\r\n           \r\n                  <mat-card-title>Opstracker</mat-card-title>\r\n                 \r\n          </mat-card-header>\r\n          <mat-divider ></mat-divider> \r\n          <mat-card-content>\r\n          <div >\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker ></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\" placeholder=\"Client\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of projects\" [value]=\"option.name\" (onSelectionChange)=\"setProject(option.id)\">\r\n                  {{option.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n           \r\n            \r\n           \r\n           \r\n            \r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input type=\"text\" placeholder=\"Site\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n                  <mat-autocomplete #auto1=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let option of sites\" [value]=\"option.name\" (onSelectionChange)=\"setSite(option.id)\" >\r\n                      {{option.name}}\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n             \r\n             \r\n                 \r\n  \r\n                    \r\n                      \r\n                   \r\n                   \r\n                       \r\n                        \r\n  \r\n       </div>\r\n       </mat-card-content>\r\n       </mat-card>\r\n       </div>\r\n      </div>\r\n       <div class=\"accordian\">\r\n          <div fxflex = \"50\" >\r\n            \r\n              <mat-tab-group >\r\n               \r\n                  <mat-tab label=\"Manpower\">\r\n                      <div class=\"material-box mat-elevation-z4\">\r\n                         \r\n                      <div >\r\n                          <button mat-mini-fab >\r\n                              <mat-icon aria-label=\"\" routerLink=\"../opsmanpowertransactionview\">table_chart</mat-icon>\r\n                            </button>\r\n                          <mat-form-field class=\"example-full-width\">\r\n                              <input type=\"text\" placeholder=\"Shift\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto3\">\r\n                              <mat-autocomplete #auto3=\"matAutocomplete\">\r\n                                <mat-option *ngFor=\"let option of shifts\" [value]=\"option\" (onSelectionChange)=\"setShiftDetails(option)\">\r\n                                  {{option}}\r\n                                </mat-option>\r\n                              </mat-autocomplete>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Planned\" [(ngModel)]=\"manpowertransaction.planned\">\r\n                              </mat-form-field>\r\n                              <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Actual\" [(ngModel)]=\"manpowertransaction.actual\" (input)=\"setShortFall($event.target.value)\">\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Shortfall\" [(ngModel)]=\"manpowertransaction.shortfall\">\r\n                                  </mat-form-field>\r\n                                  \r\n                                     <p>Total No of Releivers</p>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                      <input matInput placeholder=\"Continued\" [(ngModel)]=\"manpowertransaction.continuedWithOutOt\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                      <input matInput placeholder=\"Continued with OT\" [(ngModel)]=\"manpowertransaction.continuedWithOt\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                      <input matInput placeholder=\"New\" [(ngModel)]=\"manpowertransaction.newComer\">\r\n                                    </mat-form-field>\r\n\r\n\r\n                                    \r\n                                    <div class=\"button-row\">\r\n                                        \r\n                                        <button mat-raised-button color=\"accent\" (click)=\"postManPowerTransaction()\">Submit</button>\r\n                                        \r\n                                        \r\n                                      </div>\r\n                      </div>\r\n                       </div>\r\n                     \r\n                    </mat-tab>\r\n                   \r\n\r\n                   \r\n                        <mat-tab label=\"Material\">\r\n\r\n                            <div class=\"material-box mat-elevation-z4\">\r\n                                <div >\r\n                                    <button mat-mini-fab >\r\n                                        <mat-icon aria-label=\"\" routerLink=\"../opsmaterialtransactionview\">table_chart</mat-icon>\r\n                                      </button>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input type=\"text\" placeholder=\"Material Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto4\">\r\n                                        <mat-autocomplete #auto4=\"matAutocomplete\">\r\n                                          <mat-option *ngFor=\"let option of materialtypes as index i\" [value]=\"option\" (onSelectionChange)=\"setCommitmentdate(option)\">\r\n                                            {{option}}\r\n                                          </mat-option>\r\n                                        </mat-autocomplete>\r\n                                      </mat-form-field>\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input matInput [matDatepicker]=\"picker4\" placeholder=\"Commitment Date\" [(ngModel)]=\"materialtransaction.commitmentDate\">\r\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                                          <mat-datepicker #picker4></mat-datepicker>\r\n                                        </mat-form-field>\r\n\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Indent SubmissionDate\" [(ngModel)]=\"materialtransaction.indentSubmissionDate\">\r\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                          <mat-datepicker #picker1></mat-datepicker>\r\n                                        </mat-form-field>\r\n\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput [matDatepicker]=\"picker3\" placeholder=\"Material Supply Date\" [(ngModel)]=\"materialtransaction.materialSupplyDate\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker3></mat-datepicker>\r\n                                          </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                              <input matInput [matDatepicker]=\"picker2\" placeholder=\"Uniform Supply  Date\" [(ngModel)]=\"materialtransaction.uniformSupplyDate\">\r\n                                              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                              <mat-datepicker #picker2></mat-datepicker>\r\n                                            </mat-form-field>\r\n                                            \r\n                                              <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Status\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto5\" [(ngModel)]=\"materialtransaction.matst\">\r\n                                                  <mat-autocomplete #auto5=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let matst of Matstatus\" [value]=\"matst\" (onSelectionChange)=\"setStatus(matst)\">\r\n                                                      {{matst}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n\r\n                                                </mat-form-field>\r\n                                                <mat-form-field class=\"example-full-width\">\r\n                                                    <input matInput placeholder=\"Remarks\" [(ngModel)]=\"materialtransaction.remarks\">\r\n                                                  </mat-form-field>\r\n\r\n                                                  \r\n                                              <div class=\"button-row\">\r\n                                                  \r\n                                                  <button mat-raised-button color=\"accent\" (click)=\"postMaterialTransaction()\">Submit</button>\r\n                                                  \r\n                                                  \r\n                                                </div>\r\n                                </div>\r\n                                 </div>\r\n                          </mat-tab>\r\n                         \r\n\r\n\r\n                        \r\n                              <mat-tab label=\"Machine\">\r\n                                  <div class=\"material-box mat-elevation-z4\">\r\n                                      <div >\r\n                                          <button mat-mini-fab >\r\n                                              <mat-icon aria-label=\"\" routerLink=\"../opsmachinetransactionview\">table_chart</mat-icon>\r\n                                            </button>\r\n                                      <mat-form-field class=\"example-full-width\">\r\n                                          <input type=\"text\" placeholder=\"Type of Machine\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto6\">\r\n                                          <mat-autocomplete #auto6=\"matAutocomplete\">\r\n                                            <mat-option *ngFor=\"let option of machinetypes\" [value]=\"option\" (onSelectionChange)=\"setEquipment(option)\">\r\n                                              {{option}}\r\n                                            </mat-option>\r\n                                          </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                              <input matInput placeholder=\"Equipment Type\" [(ngModel)]=\"machinetransaction.equipmentType\" >\r\n                                            </mat-form-field>\r\n                                          <mat-form-field class=\"example-full-width\">\r\n                                              <input matInput placeholder=\"Model Number\" [(ngModel)]=\"machinetransaction.modelNo\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Serial Number\" [(ngModel)]=\"machinetransaction.serialNo\">\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"example-full-width\">\r\n                                                  <input type=\"text\" placeholder=\"Status\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto8\">\r\n                                                  <mat-autocomplete #auto8=\"matAutocomplete\">\r\n                                                    <mat-option *ngFor=\"let option of machinestatus\" [value]=\"option\" (onSelectionChange)=\"setMachineStatus(option)\">\r\n                                                      {{option}}\r\n                                                    </mat-option>\r\n                                                  </mat-autocomplete>\r\n                                                </mat-form-field>\r\n                                              \r\n                                                <mat-form-field class=\"example-full-width\">\r\n                                                    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker6\" placeholder=\"Complaint Raised  Date\" [(ngModel)]=\"machinetransaction.complaintRaisedDate\">\r\n                                                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                                                    <mat-datepicker #picker6></mat-datepicker>\r\n                                                  </mat-form-field>\r\n                                                  <mat-form-field class=\"example-full-width\">\r\n                                                      <input matInput [matDatepicker]=\"picker7\" placeholder=\"Resolution  Date\" [(ngModel)]=\"machinetransaction.ResolutionDate\">\r\n                                                      <mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n                                                      <mat-datepicker #picker7></mat-datepicker>\r\n                                                    </mat-form-field>\r\n                                                 \r\n                                                <div class=\"button-row\">\r\n                                                    \r\n                                                    <button mat-raised-button color=\"accent\" (click)=\"postMachineTransaction()\">Submit</button>\r\n                                                    \r\n                                                    \r\n                                                  </div>\r\n                                 \r\n                                   </div>\r\n                                   </div>\r\n                                </mat-tab>\r\n                               \r\n                                </mat-tab-group>\r\n            \r\n            </div>\r\n       </div>\r\n      </div>\r\n      </div>"

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
/* harmony import */ var _models_material_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/material.model */ "./src/app/models/material.model.ts");
/* harmony import */ var _models_machine_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/machine.model */ "./src/app/models/machine.model.ts");
/* harmony import */ var _models_materialtransaction_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/materialtransaction.model */ "./src/app/models/materialtransaction.model.ts");
/* harmony import */ var _models_machinetransaction_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/machinetransaction.model */ "./src/app/models/machinetransaction.model.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _dateformat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dateformat.service */ "./src/app/dateformat.service.ts");
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
    function OpstrackerComponent(data, http, dateFormat, toasterService) {
        this.data = data;
        this.http = http;
        this.dateFormat = dateFormat;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isLoadingResults = false;
        //model class object creation
        this.project = new _models_project_model__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.site = new _models_site_model__WEBPACK_IMPORTED_MODULE_4__["Site"]();
        this.manpowertransaction = new _models_manpowertransaction_model__WEBPACK_IMPORTED_MODULE_6__["ManPowerTransaction"]();
        this.materialtransaction = new _models_materialtransaction_model__WEBPACK_IMPORTED_MODULE_10__["MaterialTransaction"]();
        this.machinetransaction = new _models_machinetransaction_model__WEBPACK_IMPORTED_MODULE_11__["MachineTransaction"]();
        this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_7__["ManPower"]();
        this.material = new _models_material_model__WEBPACK_IMPORTED_MODULE_8__["Material"]();
        this.machine = new _models_machine_model__WEBPACK_IMPORTED_MODULE_9__["Machine"]();
        //Dropdown options declaration
        this.Matstatus = ['Delayed', 'Complaint', 'Pending'];
        this.machinestatus = ['Working', 'Not Working'];
        this.machinetypes = [];
        this.equipmenttypes = [];
        this.materialtypes = [];
        this.time = [];
        this.shifts = [];
        this.clearFormArray = [];
        this.toasterService = toasterService;
    }
    OpstrackerComponent.prototype.setStatus = function (status) {
        this.materialtransaction.status = status;
    };
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
            _this.shifts.length = 0;
            _this.site = data;
            _this.manpowers = _this.site.manPowerDTO;
            _this.manpowers.forEach(function (i) {
                _this.manpower = i;
                _this.shifts.push(_this.manpower.startTime + "-" + _this.manpower.endTime);
                console.log(_this.shifts);
            });
            _this.setMaterial();
        });
    };
    OpstrackerComponent.prototype.setShiftDetails = function (shift) {
        var _this = this;
        this.shift = shift;
        console.log("shift" + shift);
        //this.time.push(shift.split('-'));
        //console.log("time" + this.time);
        this.manpowers.forEach(function (i) {
            _this.manpower = new _models_manpower_model__WEBPACK_IMPORTED_MODULE_7__["ManPower"]();
            _this.manpower = i;
            //console.log(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime);   
            //if(this.time[0] == this.manpower.startTime + "," +this.manpower.endTime)
            if (_this.shift == _this.manpower.startTime + "-" + _this.manpower.endTime) {
                _this.manpowertransaction.planned = _this.manpower.planned;
                _this.manpowertransaction.shiftTime = shift;
                _this.manpowertransaction.siteId = _this.site.id;
                _this.manpowertransaction.projectId = _this.project.id;
            }
        });
        console.log(this.manpowertransaction);
        this.time = [];
        this.shift = "";
        console.log("time" + shift);
    };
    OpstrackerComponent.prototype.setShortFall = function (value) {
        console.log(value);
        this.manpowertransaction.actual = value;
        this.manpowertransaction.shortfall = this.manpowertransaction.planned - this.manpowertransaction.actual;
    };
    OpstrackerComponent.prototype.setMaterial = function () {
        var _this = this;
        this.materials = this.site.materialDTO;
        this.materialtypes.length = 0;
        this.materials.forEach(function (i) {
            _this.material = i;
            _this.materialtypes.push(_this.material.materialType);
            //console.log(this.materialtypes);
            _this.setMachine();
        });
    };
    OpstrackerComponent.prototype.setCommitmentdate = function (Commitdate) {
        var _this = this;
        this.materials.forEach(function (i) {
            _this.material = new _models_material_model__WEBPACK_IMPORTED_MODULE_8__["Material"]();
            _this.material = i;
            if (Commitdate == _this.material.materialType) {
                _this.materialtransaction.commitmentDate = _this.material.commitmentDate;
                console.log(_this.materialtransaction.commitmentDate);
                _this.materialtransaction.siteId = _this.site.id;
                _this.materialtransaction.projectId = _this.project.id;
            }
        });
    };
    OpstrackerComponent.prototype.setMachine = function () {
        var _this = this;
        this.machines = this.site.machineDTO;
        this.machines.forEach(function (i) {
            _this.machine = i;
            console.log(_this.machine);
            _this.machinetypes.push(_this.machine.machineType);
        });
    };
    OpstrackerComponent.prototype.setEquipment = function (type) {
        var _this = this;
        this.machinetransaction.machineType = type;
        this.machines.forEach(function (i) {
            _this.machine = i;
            if (_this.machine.machineType == type) {
                _this.machinetransaction.equipmentType = _this.machine.equipmentType;
                _this.machinetransaction.modelNo = _this.machine.modelNo;
                _this.machinetransaction.serialNo = _this.machine.serialNo;
            }
        });
        console.log(this.machinetransaction);
    };
    OpstrackerComponent.prototype.setMachineStatus = function (status) {
        this.machinetransaction.status = status;
    };
    OpstrackerComponent.prototype.postManPowerTransaction = function () {
        var _this = this;
        this.isLoadingResults = true;
        console.log(this.manpowertransaction);
        console.log("hi");
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/manpower', this.manpowertransaction)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    OpstrackerComponent.prototype.postMaterialTransaction = function () {
        var _this = this;
        console.log(this.materialtransaction);
        this.isLoadingResults = true;
        this.http.post('http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/opstracker/material', this.materialtransaction)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
    };
    OpstrackerComponent.prototype.postMachineTransaction = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.http.post('http://localhost:8080/uds/opstracker/machine', this.materialtransaction)
            .subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == 'success') {
                _this.isLoadingResults = false;
                _this.toasterService.pop('success', 'Successfully Submitted', '');
            }
            else {
                _this.isLoadingResults = false;
                _this.toasterService.pop('warning', 'Not Submitted', '');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.isLoadingResults = false;
                console.log('An error occurred:', err.error.message);
            }
            else {
                _this.toasterService.pop('warning', 'Not Submitted', '');
                _this.isLoadingResults = false;
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
            }
        });
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
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _dateformat_service__WEBPACK_IMPORTED_MODULE_13__["Dateformat"], angular2_toaster__WEBPACK_IMPORTED_MODULE_12__["ToasterService"]])
    ], OpstrackerComponent);
    return OpstrackerComponent;
}());



/***/ }),

/***/ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/opstrackermachinedialog/opstrackermachinedialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-global-overlay-wrapper, .cdk-overlay-container {\r\n    z-index: 99999 !important;\r\n }"

/***/ }),

/***/ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/opstrackermachinedialog/opstrackermachinedialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-dialog-content>\r\n    \r\n    <div class=\"row\" >\r\n                          \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Machine Type\" [(ngModel)]=\"data.machineType\">\r\n      </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Equipment Type\" [(ngModel)]=\"data.equipmentType\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Status\" [(ngModel)]=\"data.status\" >\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Complaint Raised Date\" [(ngModel)]=\"data.complaintRaisedDate\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Resolution Date\" [(ngModel)]=\"data.ResolutionDate\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  \r\n   \r\n \r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n      \r\n        <div class=\"button-row\">\r\n                                            \r\n          <button mat-raised-button color=\"accent\" (click)=\"postEmployee1()\" >Update</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n            \r\n          </div>    \r\n  \r\n  </mat-dialog-actions>\r\n    </div>"

/***/ }),

/***/ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/opstrackermachinedialog/opstrackermachinedialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: OpstrackermachinedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackermachinedialogComponent", function() { return OpstrackermachinedialogComponent; });
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



var OpstrackermachinedialogComponent = /** @class */ (function () {
    function OpstrackermachinedialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    OpstrackermachinedialogComponent.prototype.ngOnInit = function () {
    };
    OpstrackermachinedialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    OpstrackermachinedialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    OpstrackermachinedialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstrackermachinedialog',
            template: __webpack_require__(/*! ./opstrackermachinedialog.component.html */ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.html"),
            styles: [__webpack_require__(/*! ./opstrackermachinedialog.component.css */ "./src/app/opstrackermachinedialog/opstrackermachinedialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OpstrackermachinedialogComponent);
    return OpstrackermachinedialogComponent;
}());



/***/ }),

/***/ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-global-overlay-wrapper, .cdk-overlay-container {\r\n    z-index: 99999 !important;\r\n }"

/***/ }),

/***/ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-dialog-content>\r\n    \r\n    <div class=\"row\" >\r\n                          \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"shift\" [(ngModel)]=\"data.shift\">\r\n      </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Planned\" [(ngModel)]=\"data.planned\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Actual\" [(ngModel)]=\"data.actual\" >\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Shortfall\" [(ngModel)]=\"data.shortfall\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Continued\" [(ngModel)]=\"data.continuedWithOutOt\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Continued with OT\" [(ngModel)]=\"data.continuedWithOt\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n   \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"New\" [(ngModel)]=\"data.newComer\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n      \r\n        <div class=\"button-row\">\r\n                                            \r\n          <button mat-raised-button color=\"accent\" (click)=\"postEmployee1()\" >Update</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n            \r\n          </div>    \r\n  \r\n  </mat-dialog-actions>\r\n    </div>"

/***/ }),

/***/ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpstrackermanpowerdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackermanpowerdialogComponent", function() { return OpstrackermanpowerdialogComponent; });
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



var OpstrackermanpowerdialogComponent = /** @class */ (function () {
    function OpstrackermanpowerdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    OpstrackermanpowerdialogComponent.prototype.ngOnInit = function () {
    };
    OpstrackermanpowerdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    OpstrackermanpowerdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    OpstrackermanpowerdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstrackermanpowerdialog',
            template: __webpack_require__(/*! ./opstrackermanpowerdialog.component.html */ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.html"),
            styles: [__webpack_require__(/*! ./opstrackermanpowerdialog.component.css */ "./src/app/opstrackermanpowerdialog/opstrackermanpowerdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OpstrackermanpowerdialogComponent);
    return OpstrackermanpowerdialogComponent;
}());



/***/ }),

/***/ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/opstrackermanpowerview/opstrackermanpowerview.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/opstrackermanpowerview/opstrackermanpowerview.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  opstrackermanpowerview works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/opstrackermanpowerview/opstrackermanpowerview.component.ts ***!
  \****************************************************************************/
/*! exports provided: OpstrackermanpowerviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackermanpowerviewComponent", function() { return OpstrackermanpowerviewComponent; });
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

var OpstrackermanpowerviewComponent = /** @class */ (function () {
    function OpstrackermanpowerviewComponent() {
    }
    OpstrackermanpowerviewComponent.prototype.ngOnInit = function () {
    };
    OpstrackermanpowerviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstrackermanpowerview',
            template: __webpack_require__(/*! ./opstrackermanpowerview.component.html */ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.html"),
            styles: [__webpack_require__(/*! ./opstrackermanpowerview.component.css */ "./src/app/opstrackermanpowerview/opstrackermanpowerview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OpstrackermanpowerviewComponent);
    return OpstrackermanpowerviewComponent;
}());



/***/ }),

/***/ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-global-overlay-wrapper, .cdk-overlay-container {\r\n    z-index: 99999 !important;\r\n }"

/***/ }),

/***/ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <mat-dialog-content>\r\n    \r\n    <div class=\"row\" >\r\n                          \r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Material Type\" [(ngModel)]=\"data.materialType\">\r\n      </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Commitment Date\" [(ngModel)]=\"data.commitmentDate\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Indent Submission Date\" [(ngModel)]=\"data.indentSubmissionDate\" >\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Material Supply Date\" [(ngModel)]=\"data.materialSupplyDate\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Uniform Supply Date\" [(ngModel)]=\"data.uniformSupplyDate\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Status\" [(ngModel)]=\"data.status\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n   \r\n  <div class=\"row\" >\r\n                          \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Remarks\" [(ngModel)]=\"data.remarks\">\r\n    </mat-form-field>\r\n  \r\n  </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n      \r\n        <div class=\"button-row\">\r\n                                            \r\n          <button mat-raised-button color=\"accent\" (click)=\"postEmployee1()\" >Update</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onCloseCancel()\">Cancel</button>\r\n            \r\n          </div>    \r\n  \r\n  </mat-dialog-actions>\r\n    </div>"

/***/ }),

/***/ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpstrackermaterialdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackermaterialdialogComponent", function() { return OpstrackermaterialdialogComponent; });
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



var OpstrackermaterialdialogComponent = /** @class */ (function () {
    function OpstrackermaterialdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
    }
    OpstrackermaterialdialogComponent.prototype.ngOnInit = function () {
    };
    OpstrackermaterialdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    OpstrackermaterialdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    OpstrackermaterialdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstrackermaterialdialog',
            template: __webpack_require__(/*! ./opstrackermaterialdialog.component.html */ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.html"),
            styles: [__webpack_require__(/*! ./opstrackermaterialdialog.component.css */ "./src/app/opstrackermaterialdialog/opstrackermaterialdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OpstrackermaterialdialogComponent);
    return OpstrackermaterialdialogComponent;
}());



/***/ }),

/***/ "./src/app/opstrackerview/opstrackerview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opstrackerview/opstrackerview.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/opstrackerview/opstrackerview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/opstrackerview/opstrackerview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  opstrackerview works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/opstrackerview/opstrackerview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/opstrackerview/opstrackerview.component.ts ***!
  \************************************************************/
/*! exports provided: OpstrackerviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpstrackerviewComponent", function() { return OpstrackerviewComponent; });
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









var OpstrackerviewComponent = /** @class */ (function () {
    function OpstrackerviewComponent(http, data1, dialog) {
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
    OpstrackerviewComponent.prototype.ngOnInit = function () {
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
    OpstrackerviewComponent.prototype.openDialog = function (id) {
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
    ], OpstrackerviewComponent.prototype, "emp1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OpstrackerviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OpstrackerviewComponent.prototype, "sort", void 0);
    OpstrackerviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opstrackerview',
            template: __webpack_require__(/*! ./opstrackerview.component.html */ "./src/app/opstrackerview/opstrackerview.component.html"),
            styles: [__webpack_require__(/*! ./opstrackerview.component.css */ "./src/app/opstrackerview/opstrackerview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OpstrackerviewComponent);
    return OpstrackerviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/employee/search/' + page + '/' + records;
        return this.http.get(href);
    };
    return ExampleHttpDao;
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

/***/ "./src/app/sitedialog/sitedialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sitedialog/sitedialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sitedialog/sitedialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/sitedialog/sitedialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sitedialog works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sitedialog/sitedialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sitedialog/sitedialog.component.ts ***!
  \****************************************************/
/*! exports provided: SitedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitedialogComponent", function() { return SitedialogComponent; });
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

var SitedialogComponent = /** @class */ (function () {
    function SitedialogComponent() {
    }
    SitedialogComponent.prototype.ngOnInit = function () {
    };
    SitedialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitedialog',
            template: __webpack_require__(/*! ./sitedialog.component.html */ "./src/app/sitedialog/sitedialog.component.html"),
            styles: [__webpack_require__(/*! ./sitedialog.component.css */ "./src/app/sitedialog/sitedialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitedialogComponent);
    return SitedialogComponent;
}());



/***/ }),

/***/ "./src/app/sitemachinedailog/sitemachinedailog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sitemachinedailog/sitemachinedailog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sitemachinedailog/sitemachinedailog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sitemachinedailog/sitemachinedailog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"data\"  style=\"width:100%\"s>\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id. </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"typeOfService\">\r\n    <th mat-header-cell *matHeaderCellDef> Type of Service </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.typeOfService}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"machineType\">\r\n    <th mat-header-cell *matHeaderCellDef> Machine Type </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.machineType}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"equipmentType\">\r\n    <th mat-header-cell *matHeaderCellDef> Equipment Type </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.equipmentType}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"modelNo\">\r\n    <th mat-header-cell *matHeaderCellDef> Model No </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.modelNo}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"serialNo\">\r\n    <th mat-header-cell *matHeaderCellDef> Serial No </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.serialNo}} </td>\r\n  </ng-container>\r\n  \r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/sitemachinedailog/sitemachinedailog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sitemachinedailog/sitemachinedailog.component.ts ***!
  \******************************************************************/
/*! exports provided: SitemachinedailogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemachinedailogComponent", function() { return SitemachinedailogComponent; });
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



var SitemachinedailogComponent = /** @class */ (function () {
    function SitemachinedailogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
        this.displayedColumns = ['id', 'typeOfService', 'machineType', 'equipmentType', 'modelNo', 'serialNo'];
    }
    SitemachinedailogComponent.prototype.ngOnInit = function () {
    };
    SitemachinedailogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    SitemachinedailogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    SitemachinedailogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitemachinedailog',
            template: __webpack_require__(/*! ./sitemachinedailog.component.html */ "./src/app/sitemachinedailog/sitemachinedailog.component.html"),
            styles: [__webpack_require__(/*! ./sitemachinedailog.component.css */ "./src/app/sitemachinedailog/sitemachinedailog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SitemachinedailogComponent);
    return SitemachinedailogComponent;
}());



/***/ }),

/***/ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sitemanpowerdialog/sitemanpowerdialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sitemanpowerdialog/sitemanpowerdialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"data\"  style=\"width:100%\"s>\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> Id. </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"typeOfService\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Service </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.typeOfService}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"planned\">\r\n      <th mat-header-cell *matHeaderCellDef> Planned </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.planned}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"startTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Start Time </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.startTime}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"endTime\">\r\n        <th mat-header-cell *matHeaderCellDef> End Time </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.endTime}} </td>\r\n      </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  "

/***/ }),

/***/ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sitemanpowerdialog/sitemanpowerdialog.component.ts ***!
  \********************************************************************/
/*! exports provided: SitemanpowerdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemanpowerdialogComponent", function() { return SitemanpowerdialogComponent; });
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



var SitemanpowerdialogComponent = /** @class */ (function () {
    function SitemanpowerdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
        this.displayedColumns = ['id', 'typeOfService', 'planned', 'startTime', 'endTime'];
    }
    SitemanpowerdialogComponent.prototype.ngOnInit = function () {
    };
    SitemanpowerdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    SitemanpowerdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    SitemanpowerdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitemanpowerdialog',
            template: __webpack_require__(/*! ./sitemanpowerdialog.component.html */ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.html"),
            styles: [__webpack_require__(/*! ./sitemanpowerdialog.component.css */ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SitemanpowerdialogComponent);
    return SitemanpowerdialogComponent;
}());



/***/ }),

/***/ "./src/app/sitematerialdialog/sitematerialdialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sitematerialdialog/sitematerialdialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sitematerialdialog/sitematerialdialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sitematerialdialog/sitematerialdialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"data\"  style=\"width:100%\"s>\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id. </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"typeOfService\">\r\n    <th mat-header-cell *matHeaderCellDef> Type of Service </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.typeOfService}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"materialType\">\r\n    <th mat-header-cell *matHeaderCellDef> Material Type </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.materialType}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"commitmentDate\">\r\n    <th mat-header-cell *matHeaderCellDef> Commiment Date </th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.commitmentDate}} </td>\r\n  </ng-container>\r\n\r\n  \r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/sitematerialdialog/sitematerialdialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sitematerialdialog/sitematerialdialog.component.ts ***!
  \********************************************************************/
/*! exports provided: SitematerialdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitematerialdialogComponent", function() { return SitematerialdialogComponent; });
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



var SitematerialdialogComponent = /** @class */ (function () {
    function SitematerialdialogComponent(thisdialogRef, data) {
        this.thisdialogRef = thisdialogRef;
        this.data = data;
        this.displayedColumns = ['id', 'typeOfService', 'materialType', 'commitmentDate'];
    }
    SitematerialdialogComponent.prototype.ngOnInit = function () {
    };
    SitematerialdialogComponent.prototype.onCloseConfirm = function () {
        this.thisdialogRef.close('Confirm');
    };
    SitematerialdialogComponent.prototype.onCloseCancel = function () {
        this.thisdialogRef.close('Cancel');
    };
    SitematerialdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitematerialdialog',
            template: __webpack_require__(/*! ./sitematerialdialog.component.html */ "./src/app/sitematerialdialog/sitematerialdialog.component.html"),
            styles: [__webpack_require__(/*! ./sitematerialdialog.component.css */ "./src/app/sitematerialdialog/sitematerialdialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SitematerialdialogComponent);
    return SitematerialdialogComponent;
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

module.exports = ".algnleft{\r\n    margin:20px \r\n}\r\n.div-left{\r\n    float:right;\r\n    padding-right:20px;\r\n}\r\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\r\n    flex: 0 0 200px;\r\n}\r\n.martop{\r\n    margin-top: 14px;\r\n}\r\n.spinnerabove {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n   \r\n    z-index: 10;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/siteview/siteview.component.html":
/*!**************************************************!*\
  !*** ./src/app/siteview/siteview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"algnleft\">\r\n    <div class=\"div-left\"><button mat-mini-fab>\r\n        <mat-icon aria-label=\"\" routerLink=\"../masterdata\">arrow_back</mat-icon>\r\n      </button></div>\r\n    \r\n        <!-- <div class=\"example-loading-shade spinnerabove \"\r\n             *ngIf=\"isLoadingResults || isRateLimitReached\" >\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n          <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n            \r\n          </div>\r\n        </div>\r\n       -->\r\n        \r\n      \r\n          <table mat-table [dataSource]=\"site2\" class=\"mat-elevation-z8\"\r\n                 matSort matSortActive=\"id\" matSortDisableClear matSortDirection=\"asc\" style=\"width:100%\">\r\n            <!-- Number Column -->\r\n            \r\n            <!-- Title Column -->\r\n            <ng-container  matColumnDef=\"id\">\r\n                <th mat-header-cell  *matHeaderCellDef>Id</th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n              </ng-container>\r\n        \r\n    \r\n <ng-container  matColumnDef=\"name\">\r\n              <th mat-header-cell  *matHeaderCellDef>Name</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n            </ng-container> \r\n      \r\n            <!-- State Column -->\r\n          <!--   <ng-container matColumnDef=\"code\">\r\n              <th mat-header-cell *matHeaderCellDef>Code</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.code}}</td>\r\n            </ng-container> -->\r\n      \r\n            <!-- Created Column -->\r\n            <ng-container matColumnDef=\"contractType\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                Contract Type\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.contractType}}</td>\r\n            </ng-container>\r\n    \r\n           <!--  <ng-container matColumnDef=\"Contract Type\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n                  Mail\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{row.contractType}}</td>\r\n              </ng-container> -->\r\n    \r\n             <!-- <ng-container matColumnDef=\"types\">\r\n                  <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                  <mat-cell *matCellDef=\"let row\">\r\n                      <button mat-raised-button color=\"accent\" (click)=\"postEscalationType()\">Manpower</button>\r\n                      \r\n                </mat-cell>\r\n             \r\n              </ng-container>  -->\r\n              <ng-container matColumnDef=\"actionsColumn\">\r\n                  <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                  \r\n                  <mat-cell *matCellDef=\"let row\">\r\n                      <button mat-raised-button color=\"accent\" (click)=\"getmanpower(row.id)\" style=\"margin-left:5px\">Manpower</button>\r\n                      <button mat-raised-button color=\"accent\" (click)=\"getmaterial(row.id)\" style=\"margin-left:5px\">Material</button>\r\n                      <button mat-raised-button color=\"accent\" (click)=\"getmachine(row.id)\" style=\"margin-left:5px\">Machine</button>\r\n                      <button mat-icon-button>\r\n                          <mat-icon matTooltip=\"Update\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openDialog(row.id)\" >update</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button>\r\n                            <mat-icon aria-label=\"Example icon-button with a heart icon\"  matTooltip=\"Delete\" (click)=\"openDialog(row.id)\">delete</mat-icon>\r\n                          </button>\r\n                     \r\n                  </mat-cell>\r\n             \r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n       \r\n      \r\n          <mat-paginator [length]=\"resultsLength\" [pageSize]=\"8\"></mat-paginator>\r\n      \r\n    </div>"

/***/ }),

/***/ "./src/app/siteview/siteview.component.ts":
/*!************************************************!*\
  !*** ./src/app/siteview/siteview.component.ts ***!
  \************************************************/
/*! exports provided: SiteviewComponent, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteviewComponent", function() { return SiteviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _sitemanpowerdialog_sitemanpowerdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sitemanpowerdialog/sitemanpowerdialog.component */ "./src/app/sitemanpowerdialog/sitemanpowerdialog.component.ts");
/* harmony import */ var _models_sitemachinedialog_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/sitemachinedialog.model */ "./src/app/models/sitemachinedialog.model.ts");
/* harmony import */ var _models_sitemanpowerdialog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/sitemanpowerdialog.model */ "./src/app/models/sitemanpowerdialog.model.ts");
/* harmony import */ var _models_sitematerialdialog_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/sitematerialdialog.model */ "./src/app/models/sitematerialdialog.model.ts");
/* harmony import */ var _sitematerialdialog_sitematerialdialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sitematerialdialog/sitematerialdialog.component */ "./src/app/sitematerialdialog/sitematerialdialog.component.ts");
/* harmony import */ var _sitemachinedailog_sitemachinedailog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sitemachinedailog/sitemachinedailog.component */ "./src/app/sitemachinedailog/sitemachinedailog.component.ts");
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
    function SiteviewComponent(http, data1, dialog) {
        this.http = http;
        this.data1 = data1;
        this.dialog = dialog;
        // @Input() public emp1: Employ;
        this.dialogResult = "";
        this.itemsPerPage = 10;
        this.postsPerPage = [5, 10, 25];
        this.site = [];
        this.site2 = [];
        this.sitemanpowerdialog = new _models_sitemanpowerdialog_model__WEBPACK_IMPORTED_MODULE_8__["Sitemanpowerdialog"]();
        this.sitematerialdialog = new _models_sitematerialdialog_model__WEBPACK_IMPORTED_MODULE_9__["Sitematerialdialog"]();
        this.sitemachinedialog = new _models_sitemachinedialog_model__WEBPACK_IMPORTED_MODULE_7__["Sitemachinedialog"]();
        this.displayedColumns = ['id', 'name', 'contractType', 'actionsColumn'];
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
    SiteviewComponent.prototype.ngOnInit = function () {
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
            //  this.resultsLength = data['totalElements'];
            //console.log(data['totalElements']);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            console.log('errr');
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.site2 = data; });
        // this.listEmployees();
    };
    SiteviewComponent.prototype.getmanpower = function (id) {
        var _this = this;
        //const item1 = this.site2.find(i => i.id === id);
        console.log(id);
        this.data1.getSitemanpower(id).subscribe(function (data) {
            _this.sitemanpowerdialog = data['manPowerDTO'];
            console.log(_this.sitemanpowerdialog);
            var dialogRef = _this.dialog.open(_sitemanpowerdialog_sitemanpowerdialog_component__WEBPACK_IMPORTED_MODULE_6__["SitemanpowerdialogComponent"], {
                width: '600px',
                data: _this.sitemanpowerdialog
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('dialog closed:${result}');
                _this.dialogResult = result;
            });
        });
    };
    SiteviewComponent.prototype.getmaterial = function (id) {
        var _this = this;
        //const item1 = this.site2.find(i => i.id === id);
        console.log(id);
        this.data1.getSitematerial(id).subscribe(function (data) {
            _this.sitematerialdialog = data['materialDTO'];
            console.log(_this.sitematerialdialog);
            var dialogRef = _this.dialog.open(_sitematerialdialog_sitematerialdialog_component__WEBPACK_IMPORTED_MODULE_10__["SitematerialdialogComponent"], {
                width: '600px',
                data: _this.sitematerialdialog
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('dialog closed:${result}');
                _this.dialogResult = result;
            });
        });
    };
    SiteviewComponent.prototype.getmachine = function (id) {
        var _this = this;
        //const item1 = this.site2.find(i => i.id === id);
        console.log(id);
        this.data1.getSitemachine(id).subscribe(function (data) {
            _this.sitemachinedialog = data['machineDTO'];
            console.log(_this.sitemachinedialog);
            var dialogRef = _this.dialog.open(_sitemachinedailog_sitemachinedailog_component__WEBPACK_IMPORTED_MODULE_11__["SitemachinedailogComponent"], {
                width: '600px',
                data: _this.sitemachinedialog
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('dialog closed:${result}');
                _this.dialogResult = result;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SiteviewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SiteviewComponent.prototype, "sort", void 0);
    SiteviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-siteview',
            template: __webpack_require__(/*! ./siteview.component.html */ "./src/app/siteview/siteview.component.html"),
            styles: [__webpack_require__(/*! ./siteview.component.css */ "./src/app/siteview/siteview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], SiteviewComponent);
    return SiteviewComponent;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (page, records) {
        var href = 'http://ec2-13-233-19-198.ap-south-1.compute.amazonaws.com:8080/uds/site/search/' + page + '/' + records;
        console.log(href);
        return this.http.get(href);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/app/toast-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/toast-service.service.ts ***!
  \******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
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

var ToastService = /** @class */ (function () {
    function ToastService() {
    }
    ToastService.prototype.Success = function (tittle, message) {
        toastr.success(tittle, message);
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
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