(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\heavy\Desktop\project\Profile\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");



class AppComponent {
    constructor() {
        this.title = 'profile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/header/header.component */ "l//K");
/* harmony import */ var _main_section_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/section/section.component */ "j7+x");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/footer/footer.component */ "cWX7");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _main_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _main_section_section_component__WEBPACK_IMPORTED_MODULE_5__["SectionComponent"],
        _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _main_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _main_section_section_component__WEBPACK_IMPORTED_MODULE_5__["SectionComponent"],
                    _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cWX7":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "call-me"], [1, "mail"], [1, "phone"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "heavyyrain3039@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0442\u0435\u043B\u0435\u0444\u043E\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+79094488311");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: NotoSans;\n  src: url('NotoSans-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@media only screen and (max-width: 576px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 15px 0 !important;\n  }\n  .footer[_ngcontent-%COMP%]   .call-me[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .footer[_ngcontent-%COMP%]   .call-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .footer[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    padding-top: 5px !important;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: #558ed5;\n  display: flex;\n  justify-content: center;\n  padding: 30px 0;\n}\n.footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: \"RobotoBold\", sans-serif;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"NotoSans\", sans-serif;\n}\n.footer[_ngcontent-%COMP%]   .call-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c3deff;\n  margin: 0;\n  position: relative;\n  left: 10px;\n}\n.footer[_ngcontent-%COMP%]   .call-me[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #c3deff;\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvZm9udC5zY3NzIiwic3JjL2FwcC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZm9vdGVyL2Zvb3Rlci5tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtREFBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QUNQQTtFQUNJO0lBQ0ksMEJBQUE7RURTTjtFQ05VO0lBQ0ksZUFBQTtFRFFkO0VDTlU7SUFDSSxlQUFBO0VEUWQ7RUNKTTtJQUNJLDJCQUFBO0VETVY7QUFDRjtBQWxCQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQW9CSjtBQWxCSTtFQUNJLHFDQUFBO0FBb0JSO0FBakJJO0VBQ0ksbUNBQUE7QUFtQlI7QUFmUTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBaUJaO0FBZlE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQWlCWjtBQWJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBZVI7QUFaSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBY1IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2FucztcclxuICAgIHNyYzogdXJsKC4vZm9udC9Ob3RvU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguL2ZvbnQvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zO1xuICBzcmM6IHVybCguL2ZvbnQvTm90b1NhbnMvTm90b1NhbnMtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguL2ZvbnQvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb290ZXIgLmNhbGwtbWUgaDYge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuZm9vdGVyIC5jYWxsLW1lIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuZm9vdGVyIC5waG9uZSB7XG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OGVkNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5mb290ZXIgaDYge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCIsIHNhbnMtc2VyaWY7XG59XG4uZm9vdGVyIHAge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLmZvb3RlciAuY2FsbC1tZSBwIHtcbiAgY29sb3I6ICNjM2RlZmY7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMHB4O1xufVxuLmZvb3RlciAuY2FsbC1tZSBoNiB7XG4gIGNvbG9yOiAjYzNkZWZmO1xuICBtYXJnaW46IDA7XG59XG4uZm9vdGVyIC5tYWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXIgLnBob25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHsgXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuY2FsbC1tZSB7XHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob25lIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j7+x":
/*!***************************************************!*\
  !*** ./src/app/main/section/section.component.ts ***!
  \***************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], decls: 149, vars: 0, consts: [[1, "main-section"], [1, "container"], [1, "row"], [1, "col-md-7", "col-12", "order-sm-first", "order-last"], [1, "work"], [1, "work-h", "section-h"], [1, "company-info"], [1, "name-date"], [1, "info-company"], [1, "lesson"], [1, "lesson-h", "section-h"], [1, "institution"], [1, "date"], [1, "info"], [1, "col-md-5", "col-12", "order-sm-last", "order-first"], [1, "me"], [1, "me-h", "section-h"], [1, "about"], [1, "skillS"], [1, "skill-h", "section-h"], [1, "skill"], [1, "knowledge"], [1, "wrapper"], [1, "star"], [1, "fa", "fa-circle"], ["aria-hidden", "true", 1, "fa", "fa-circle-thin"], [1, "languages"], [1, "wrapper-language"], [1, "language-h", "section-h"], [1, "language-english"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u041F\u042B\u0422 \u0420\u0410\u0411\u041E\u0422\u042B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "01/03/2020-01/08/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u043B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445: MySQL.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0424\u0440\u0438\u043B\u0430\u043D\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "01/10/2019-01/12/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B: angular, ionic, resp api, typescript, node js, MySQL.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "IP-SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "01/05/2019-01/08/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0432 \u0432\u0451\u0440\u0441\u0442\u043A\u0435 \u043C\u0430\u043A\u0435\u0442\u043E\u0432. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B \u043F\u0440\u0438 \u0432\u0451\u0440\u0441\u0442\u043A\u0435: bootstrap, jquery, sass, gulp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0421\u041A\u0413\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2019-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u044E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430. \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F: \u0437\u0430\u043E\u0447\u043D\u0430\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041D\u0415\u041C\u041D\u041E\u0413\u041E \u041E \u0421\u0415\u0411\u0415");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "25 \u043B\u0435\u0442, \u043C\u0443\u0436\u0447\u0438\u043D\u0430, \u043D\u0435 \u0436\u0435\u043D\u0430\u0442, \u0434\u0435\u0442\u0435\u0439 \u043D\u0435 \u0438\u043C\u0435\u044E, \u0436\u0438\u0432\u0443 \u0432 \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u043E\u043C \u043A\u0440\u0430\u0435. \u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0430\u043C \u043D\u0435 \u0433\u043E\u0442\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0417\u041D\u0410\u041D\u0418\u042F \u0418 \u041D\u0410\u0412\u042B\u041A\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "SASS(SCSS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "JQuety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u042F\u0417\u042B\u041A\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: NotoSans;\n  src: url('NotoSans-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@media only screen and (max-width: 1200px) {\n  .main-section[_ngcontent-%COMP%]   .section-h[_ngcontent-%COMP%] {\n    font-size: 23px;\n    margin: 0;\n  }\n  .main-section[_ngcontent-%COMP%]   .name-date[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .main-section[_ngcontent-%COMP%]   .name-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .main-section[_ngcontent-%COMP%]   .info-company[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .main-section[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .main-section[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .main-section[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .main-section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .main-section[_ngcontent-%COMP%] {\n    padding: 10px 20px 15px 20px !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .section-h[_ngcontent-%COMP%] {\n    padding-bottom: 10px !important;\n    font-size: 19px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .main-section[_ngcontent-%COMP%] {\n    padding: 10px 10px 15px 10px !important;\n  }\n}\n@media only screen and (max-width: 578px) {\n  .main-section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .main-section[_ngcontent-%COMP%]   .section-h[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    padding-bottom: 5px !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .work-h[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .info-company[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .lesson-h[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .main-section[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.main-section[_ngcontent-%COMP%] {\n  padding: 15px 50px 30px 50px;\n}\n.main-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"RobotoBold\", sans-serif;\n}\n.main-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"NotoSans\", sans-serif;\n}\n.main-section[_ngcontent-%COMP%]   .work-h[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.main-section[_ngcontent-%COMP%]   .lesson-h[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.main-section[_ngcontent-%COMP%]   .name-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.main-section[_ngcontent-%COMP%]   .info-company[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.main-section[_ngcontent-%COMP%]   .section-h[_ngcontent-%COMP%] {\n  color: #b8c6e0;\n  padding-bottom: 15px;\n  position: relative;\n  text-align: center;\n}\n.main-section[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.main-section[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main-section[_ngcontent-%COMP%]   .language-english[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvZm9udC5zY3NzIiwic3JjL2FwcC9tYWluL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9zZWN0aW9uL3NlY3Rpb24ubWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbURBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7RUFDQSw4Q0FBQTtBQ0FKO0FDUEE7RUFFUTtJQUNJLGVBQUE7SUFDQSxTQUFBO0VEUVY7RUNKVTtJQUNJLGVBQUE7RURNZDtFQ0pVO0lBQ0ksZUFBQTtFRE1kO0VDRk07SUFDSSxlQUFBO0VESVY7RUNBVTtJQUNJLGVBQUE7RURFZDtFQ0FVO0lBQ0ksZUFBQTtFREVkO0VDQVU7SUFDSSxlQUFBO0VERWQ7RUNFTTtJQUNJLGVBQUE7RURBVjtBQUNGO0FDS0E7RUFDSTtJQUNJLHVDQUFBO0VESE47RUNJTTtJQUNJLCtCQUFBO0lBQ0EsZUFBQTtFREZWO0FBQ0Y7QUNNQTtFQUNJO0lBQ0ksdUNBQUE7RURKTjtBQUNGO0FDT0E7RUFHWTtJQUNJLGtCQUFBO0VEUGQ7RUNXTTtJQUNJLGdCQUFBO0lBQ0EsOEJBQUE7RURUVjtFQ1lNO0lBQ0ksc0JBQUE7RURWVjtFQ2FNO0lBQ0ksNkJBQUE7RURYVjtFQ2NNO0lBQ0ksc0JBQUE7RURaVjtFQ2VNO0lBQ0ksc0JBQUE7RURiVjtFQ2dCTTtJQUNJLGtCQUFBO0VEZFY7QUFDRjtBQXBFQTtFQUNJLDRCQUFBO0FBc0VKO0FBcEVJO0VBQ0kscUNBQUE7QUFzRVI7QUFuRUk7RUFDSSxtQ0FBQTtBQXFFUjtBQWxFSTtFQUNJLFVBQUE7QUFvRVI7QUFqRUk7RUFDSSxVQUFBO0FBbUVSO0FBL0RRO0VBQ0ksU0FBQTtBQWlFWjtBQTdESTtFQUNJLFVBQUE7QUErRFI7QUE1REk7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBOERSO0FBMURRO0VBQ0ksZ0JBQUE7QUE0RFo7QUF2REk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUF5RFI7QUF0REk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUF3RFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vdG9TYW5zO1xyXG4gICAgc3JjOiB1cmwoLi9mb250L05vdG9TYW5zL05vdG9TYW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcclxuICAgIHNyYzogdXJsKC4vZm9udC9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTm90b1NhbnM7XG4gIHNyYzogdXJsKC4vZm9udC9Ob3RvU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIHNyYzogdXJsKC4vZm9udC9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLXNlY3Rpb24gLnNlY3Rpb24taCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5uYW1lLWRhdGUgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5uYW1lLWRhdGUgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLmluZm8tY29tcGFueSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLmluc3RpdHV0aW9uIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLm1haW4tc2VjdGlvbiAuaW5zdGl0dXRpb24gLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5pbnN0aXR1dGlvbiAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLmFib3V0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDE1cHggMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLnNlY3Rpb24taCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDE1cHggMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OHB4KSB7XG4gIC5tYWluLXNlY3Rpb24gLmFib3V0IHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5zZWN0aW9uLWgge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLndvcmstaCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5jb21wYW55LWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5tYWluLXNlY3Rpb24gLmluZm8tY29tcGFueSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5sZXNzb24taCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAubWFpbi1zZWN0aW9uIC5pbnN0aXR1dGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubWFpbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTVweCA1MHB4IDMwcHggNTBweDtcbn1cbi5tYWluLXNlY3Rpb24gaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCIsIHNhbnMtc2VyaWY7XG59XG4ubWFpbi1zZWN0aW9uIHAge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLm1haW4tc2VjdGlvbiAud29yay1oIHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5tYWluLXNlY3Rpb24gLmxlc3Nvbi1oIHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5tYWluLXNlY3Rpb24gLm5hbWUtZGF0ZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW4tc2VjdGlvbiAuaW5mby1jb21wYW55IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5tYWluLXNlY3Rpb24gLnNlY3Rpb24taCB7XG4gIGNvbG9yOiAjYjhjNmUwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1zZWN0aW9uIC5pbnN0aXR1dGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tYWluLXNlY3Rpb24gLmtub3dsZWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluLXNlY3Rpb24gLmxhbmd1YWdlLWVuZ2xpc2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIwMHB4KSB7IFxyXG4gICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgLnNlY3Rpb24taCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmFtZS1kYXRlIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvLWNvbXBhbnkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5zdGl0dXRpb24ge1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KSB7IFxyXG4gICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDE1cHggMjBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnNlY3Rpb24taCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHsgXHJcbiAgICAubWFpbi1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAxMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc4cHgpIHsgXHJcbiAgICAubWFpbi1zZWN0aW9uIHtcclxuICAgICAgICAuYWJvdXQge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY3Rpb24taCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndvcmstaCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21wYW55LWluZm8ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8tY29tcGFueSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sZXNzb24taCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnN0aXR1dGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l//K":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row"], [1, "col-md-8", "col-12", "order-md-first", "order-last", "header-col-one"], [1, "my-name"], [1, "name"], [1, "col-md-4", "col-12", "order-md-last", "order-first"], [1, "photo"], ["src", "../../assets/img/Im.jpeg", "alt", "", 1, "im"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041C\u0443\u0440\u0430\u0434\u044F\u043D \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "frontend-developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: NotoSans;\n  src: url('NotoSans-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@media only screen and (max-width: 1200px) {\n  .header[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n    left: 0 !important;\n  }\n  .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 35px 20px 10px 20px !important;\n  }\n  .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 20px 10px 10px 10px !important;\n  }\n  .header[_ngcontent-%COMP%]   .my-name[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n  }\n  .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-bottom: 15px;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  padding: 50px 50px 20px 50px;\n}\n.header[_ngcontent-%COMP%]   .header-col-one[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  position: relative;\n  left: 45px;\n}\n.header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"RobotoBold\", sans-serif;\n  width: 70%;\n}\n.header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"NotoSans\", sans-serif;\n}\n.header[_ngcontent-%COMP%]   .im[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 2px solid #96bbe5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvZm9udC5zY3NzIiwic3JjL2FwcC9tYWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vaGVhZGVyL21lZGlhLmhlYWRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtREFBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QUNQQTtFQUVRO0lBQ0ksa0JBQUE7RURRVjtFQ0pVO0lBQ0ksZUFBQTtFRE1kO0FBQ0Y7QUNEQTtFQUNJO0lBQ0ksdUNBQUE7RURHTjtFQ0FVO0lBQ0ksZUFBQTtFREVkO0VDQVU7SUFDSSxlQUFBO0VERWQ7QUFDRjtBQ0dBO0VBQ0k7SUFDSSx1Q0FBQTtFREROO0VDR007SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0VERFY7RUNLVTtJQUNJLHNCQUFBO0lBQ0EsU0FBQTtFREhkO0FBQ0Y7QUNRQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxvQkFBQTtFRFBWO0FBQ0Y7QUExQ0E7RUFDSSw0QkFBQTtBQTRDSjtBQTFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNENSO0FBekNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBMkNSO0FBdkNRO0VBQ0kscUNBQUE7RUFDQSxVQUFBO0FBeUNaO0FBdkNRO0VBQ0ksU0FBQTtFQUNBLG1DQUFBO0FBeUNaO0FBckNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBdUNSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnM7XHJcbiAgICBzcmM6IHVybCguL2ZvbnQvTm90b1NhbnMvTm90b1NhbnMtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xyXG4gICAgc3JjOiB1cmwoLi9mb250L1JvYm90by9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2FucztcbiAgc3JjOiB1cmwoLi9mb250L05vdG9TYW5zL05vdG9TYW5zLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgc3JjOiB1cmwoLi9mb250L1JvYm90by9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciAucGhvdG8ge1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGVyIC5uYW1lIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMzVweCAyMHB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5oZWFkZXIgLm5hbWUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuaGVhZGVyIC5uYW1lIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhlYWRlciAubXktbmFtZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC5uYW1lIGgyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyIC5waG90byB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG59XG4uaGVhZGVyIHtcbiAgcGFkZGluZzogNTBweCA1MHB4IDIwcHggNTBweDtcbn1cbi5oZWFkZXIgLmhlYWRlci1jb2wtb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyIC5waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDVweDtcbn1cbi5oZWFkZXIgLm5hbWUgaDIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiA3MCU7XG59XG4uaGVhZGVyIC5uYW1lIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4uaGVhZGVyIC5pbSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTZiYmU1O1xufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnBob3RvIHtcclxuICAgICAgICAgICAgbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpIHsgXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDIwcHggMTBweCAyMHB4IWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7IFxyXG4gICAgLmhlYWRlciB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHghaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAubXktbmFtZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7IFxyXG4uaGVhZGVyIHsgXHJcbiAgICAgICAgLnBob3RvIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "l//K");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section/section.component */ "j7+x");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "cWX7");






class MainComponent {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 8, vars: 0, consts: [[1, "section", "bgi", 2, "background-image", "url('../../assets/img/bg.jpg')"], [1, "container"], [1, "row"], [1, "col-12"], [1, "blog"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@media only screen and (max-width: 1200px) {\n  .bgi[_ngcontent-%COMP%] {\n    padding: 50px 0 !important;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .bgi[_ngcontent-%COMP%] {\n    padding: 30px 0 !important;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .bgi[_ngcontent-%COMP%] {\n    padding: 20px 0 !important;\n  }\n}\n.bgi[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  padding: 100px 0;\n}\n.blog[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: -15px 10px 5px 0px rgba(204, 204, 204, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLm1lZGlhLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksMEJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTtJQUNJLDBCQUFBO0VDQU47QUFDRjtBREdBO0VBQ0k7SUFDSSwwQkFBQTtFQ0ROO0FBQ0Y7QUFaQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWNKO0FBWEE7RUFDSSx1QkFBQTtFQUNBLHVEQUFBO0FBY0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjAwcHgpIHsgXHJcbiAgICAuYmdpIHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkgeyBcclxuICAgIC5iZ2kge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDU3NnB4KSB7IFxyXG4gICAgLmJnaSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5iZ2kge1xuICAgIHBhZGRpbmc6IDUwcHggMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iZ2kge1xuICAgIHBhZGRpbmc6IDMwcHggMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5iZ2kge1xuICAgIHBhZGRpbmc6IDIwcHggMCAhaW1wb3J0YW50O1xuICB9XG59XG4uYmdpIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG59XG5cbi5ibG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC0xNXB4IDEwcHggNXB4IDBweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map