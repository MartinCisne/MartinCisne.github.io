(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\miris\OneDrive\Documentos\GitHub\pokedexreto\src\main.ts */"zUnb");


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
    production: false,
    apiEndpoint: 'https://pokeapi.co/api/v2/',
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toPokedex() {
        this.router.navigate(['/pokedex']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "home-back-image"], [1, "grid-container"], [1, "grid-item1"], [1, "card"], ["src", "assets/main-images/pokeball.png", "alt", "", 1, "home-image", "rotate-center"], [1, "home-button", "scale-up-center", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NATIONAL POKEDEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.toPokedex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A1LET'S GO!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".home-back-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/main-images/pokemon-main.jpg\");\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.card-home[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 10%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 33%;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 10px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n}\n\n.card-home[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n}\n\n.home-button[_ngcontent-%COMP%] {\n  background-color: #d0451b;\n  border-radius: 10px;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 10px 40px;\n  text-decoration: none;\n  border: 0px;\n}\n\n.home-button[_ngcontent-%COMP%]:hover {\n  background-color: #bc3315;\n  border: 0px;\n}\n\n.home-button[_ngcontent-%COMP%]:active {\n  position: relative;\n}\n\n.home-image[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.rotate-center[_ngcontent-%COMP%] {\n  animation: rotate-center 0.6s ease-in-out 3 both;\n}\n\n@keyframes rotate-center {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.scale-up-center[_ngcontent-%COMP%] {\n  animation: scale-up-center 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkRBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsMkNBQUE7QUFDSjs7QUFFRTtFQUNFLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRyxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0Msa0JBQUE7QUFHRDs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFFUyxnREFBQTtBQUdUOztBQVVBO0VBQ0U7SUFFVSxvQkFBQTtFQUdWO0VBREE7SUFFVSx5QkFBQTtFQUdWO0FBQ0Y7O0FBQUE7RUFFUyxzRUFBQTtBQUVUOztBQVdBO0VBQ0U7SUFFVSxxQkFBQTtFQUVWO0VBQUE7SUFFVSxtQkFBQTtFQUVWO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWJhY2staW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL21haW4taW1hZ2VzL3Bva2Vtb24tbWFpbi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uY2FyZC1ob21lIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ob21lOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5ob21lLWJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZDA0NTFiO1xyXG5cdGJvcmRlci1yYWRpdXM6MTBweDtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0cGFkZGluZzoxMHB4IDQwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcbi5ob21lLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYzMzMTU7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG4uaG9tZS1idXR0b246YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmhvbWUtaW1hZ2V7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ucm90YXRlLWNlbnRlciB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCAzIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHJvdGF0ZS1jZW50ZXIgMC42cyBlYXNlLWluLW91dCAzIGJvdGg7XHJcbn1cclxuXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1jZW50ZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5zY2FsZS11cC1jZW50ZXIge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG59XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'PokedexReto';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'pokedex',
        loadChildren: () => __webpack_require__.e(/*! import() | app-modules-pokedex-main-pokedex-main-module */ "app-modules-pokedex-main-pokedex-main-module").then(__webpack_require__.bind(null, /*! ../app/modules/pokedex-main/pokedex-main.module */ "9E+9")).then(m => m.PokedexMainModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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