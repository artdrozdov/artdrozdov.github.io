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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_items_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.items.list */ "./src/app/todo.items.list.ts");
/* harmony import */ var _todo_item_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.item.add.component */ "./src/app/todo.item.add.component.ts");





var routes = [
    { path: 'to-do', component: _todo_items_list__WEBPACK_IMPORTED_MODULE_3__["ToDoList"] },
    { path: 'add', component: _todo_item_add_component__WEBPACK_IMPORTED_MODULE_4__["ToDoItemAddComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <h2>\n    You clicked {{ clickCounter }} times.\n  </h2>\n  <button (click)=\"OnClick()\">Click</button>\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sbx-app';
        this.clickCounter = 0;
    }
    AppComponent.prototype.OnClick = function () {
        this.clickCounter++;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_storageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storageService */ "./src/app/services/storageService.ts");
/* harmony import */ var _todo_items_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.items.list */ "./src/app/todo.items.list.ts");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo.item */ "./src/app/todo.item.ts");
/* harmony import */ var _todo_item_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo.item.add.component */ "./src/app/todo.item.add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _todo_items_list__WEBPACK_IMPORTED_MODULE_7__["ToDoList"],
                _todo_item__WEBPACK_IMPORTED_MODULE_8__["ToDoItem"],
                _todo_item_add_component__WEBPACK_IMPORTED_MODULE_9__["ToDoItemAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_storageService__WEBPACK_IMPORTED_MODULE_6__["StorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entities/item.ts":
/*!**********************************!*\
  !*** ./src/app/entities/item.ts ***!
  \**********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/services/storageService.ts":
/*!********************************************!*\
  !*** ./src/app/services/storageService.ts ***!
  \********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.store = [{ title: 'Repair your car', description: 'You need to repair your car. You know.' }];
        console.log('constructing service');
    }
    StorageService.prototype.get = function () {
        return this.store;
    };
    StorageService.prototype.delete = function (item) {
        for (var i = 0; i < this.store.length; i++) {
            if (this.store[i].title === item.title && this.store[i].description === item.description)
                this.store.splice(i, 1);
        }
    };
    StorageService.prototype.add = function (item) {
        console.log('adding item...');
        console.log(item);
        this.store.push(item);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/todo.item.add.component.html":
/*!**********************************************!*\
  !*** ./src/app/todo.item.add.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h2>Add ToDo item</h2>\r\n</header>\r\n<form (ngSubmit)=\"OnSubmit()\">\r\n    <label for=\"title\">Title:</label>\r\n    <input type=\"text\" [(ngModel)]=\"newItem.title\" name=\"title\" />\r\n    <br/>\r\n    <label for=\"description\">Description:</label>\r\n    <textarea [(ngModel)]=\"newItem.description\" name=\"description\"></textarea>\r\n    <br/>\r\n    <input type=\"submit\" value=\"Submit\" />\r\n</form>"

/***/ }),

/***/ "./src/app/todo.item.add.component.ts":
/*!********************************************!*\
  !*** ./src/app/todo.item.add.component.ts ***!
  \********************************************/
/*! exports provided: ToDoItemAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoItemAddComponent", function() { return ToDoItemAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storageService */ "./src/app/services/storageService.ts");
/* harmony import */ var _entities_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/item */ "./src/app/entities/item.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ToDoItemAddComponent = /** @class */ (function () {
    function ToDoItemAddComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.newItem = new _entities_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
    }
    ToDoItemAddComponent.prototype.OnSubmit = function () {
        console.log('form submitted');
        console.log(this.newItem);
        this.storage.add(this.newItem);
        this.router.navigate(['/to-do']);
    };
    ToDoItemAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'todo-add-form',
            template: __webpack_require__(/*! ./todo.item.add.component.html */ "./src/app/todo.item.add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storageService__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ToDoItemAddComponent);
    return ToDoItemAddComponent;
}());



/***/ }),

/***/ "./src/app/todo.item.html":
/*!********************************!*\
  !*** ./src/app/todo.item.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>{{ title }}</h2>\r\n    <h4>{{ description }}</h4>\r\n    <button (click)=\"onDelete()\">X</button>\r\n</div>"

/***/ }),

/***/ "./src/app/todo.item.ts":
/*!******************************!*\
  !*** ./src/app/todo.item.ts ***!
  \******************************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoItem", function() { return ToDoItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storageService */ "./src/app/services/storageService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ToDoItem = /** @class */ (function () {
    function ToDoItem(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ToDoItem.prototype.onDelete = function () {
        this.storage.delete({ title: this.title, description: this.description });
        this.router.navigate(['/to-do']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToDoItem.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToDoItem.prototype, "description", void 0);
    ToDoItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'todo-item',
            template: __webpack_require__(/*! ./todo.item.html */ "./src/app/todo.item.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storageService__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToDoItem);
    return ToDoItem;
}());



/***/ }),

/***/ "./src/app/todo.items.list.html":
/*!**************************************!*\
  !*** ./src/app/todo.items.list.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <todo-item *ngFor=\"let item of items\"\r\n        [title]=\"item.title\" [description]=\"item.description\">\r\n    </todo-item>\r\n    <a routerLink=\"/add\">Add</a>\r\n</div>"

/***/ }),

/***/ "./src/app/todo.items.list.ts":
/*!************************************!*\
  !*** ./src/app/todo.items.list.ts ***!
  \************************************/
/*! exports provided: ToDoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoList", function() { return ToDoList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storageService */ "./src/app/services/storageService.ts");



var ToDoList = /** @class */ (function () {
    function ToDoList(storage) {
        this.storage = storage;
    }
    ToDoList.prototype.ngOnInit = function () {
        this.items = this.storage.get();
        console.log(this.items);
    };
    ToDoList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! ./todo.items.list.html */ "./src/app/todo.items.list.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storageService__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], ToDoList);
    return ToDoList;
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

module.exports = __webpack_require__(/*! C:\Code\ng\sbx-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map