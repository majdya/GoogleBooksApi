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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-books-list></app-books-list>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-list/books-list.component */ "./src/app/books-list/books-list.component.ts");
/* harmony import */ var _get_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-books.service */ "./src/app/get-books.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _engpipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engpipe */ "./src/app/engpipe.ts");
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
                _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_3__["BooksListComponent"],
                _engpipe__WEBPACK_IMPORTED_MODULE_7__["EngPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            providers: [_get_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books-list/books-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/books-list/books-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cross-validation-error input {\r\n    border-left: 5px solid red;\r\n  }"

/***/ }),

/***/ "./src/app/books-list/books-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/books-list/books-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container jumbotron \">\n  <h2>Books Finder</h2>\n  <!--Search Bar and Button-->\n  <div class=\"input-group md-3\">\n    <input #search class=\"form-control\" placeholder=\"Title or Author\" value=\"\">\n    <div class=\"input-group-append\">\n      <button id=\"btn\" class=\"btn btn-outline-primary\" (click)=\"onSearch(search.value);enableAdd()\"> Search </button>\n    </div>\n  </div>\n  <br>\n  <!-- Add Book Button -->\n  <button *ngIf=\"addEnabeld\" class=\"btn btn-outline-success\" data-toggle=\"modal\" data-target=\"#addBookModal\"> Add new\n    Book\n  </button>\n</div>\n\n<!-- Add Book Modal -->\n<div class=\"modal fade\" id=\"addBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new Book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Book Title:</label>\n            <br>\n            <label>Book Published Date:</label>\n            <br>\n            <label>Book Authors:</label>\n          </div>\n          <br>\n          <div class=\"col-sm\">\n            <input #newTitle type=\"text\" placeholder=\" Title\" value=\"\">\n            <input #newPBdate type=\"text\" placeholder=\" Published Date\" value=\"\">\n            <br>\n            <input #newAuthors type=\"text\" placeholder=\"Authors\" value=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\" (click)=\"onAdd(newTitle.value,newPBdate.value,newAuthors.value)\">Add\n          Book</button>\n        <button type=\"button\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\">Cancel</button>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Book Details Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Book Detailes</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <label>Edite Title:</label>\n            <br>\n            <label>Edite Published Date:</label>\n            <br>\n            <label>Edite Authors:</label>\n          </div>\n          <br>\n          <div class=\"col-sm\">\n\n\n\n\n\n            <input #editedTitle type=\"text\" placeholder=\" Title\" value=\"\" />\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <input #editedPBdate type=\"text\" placeholder=\" Published Date\" value=\"\" />\n            <br>\n            <input #editedAuthors type=\"text\" placeholder=\"Authors\" value=\"\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\" (click)=\"onEdit(editedTitle.value,editedPBdate.value,editedAuthors.value)\">Save\n          changes</button>\n        <button type=\"button\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Delete Book Modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">This Book Will be Removed!</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" name=\"deleteBook\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\" (click)=\"onDelete()\">OK,\n          Remove</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"addEnabeld\" class=\"container jumbotron \">\n  <div class=\"container\" *ngFor=\"let book of booksArr; let i = index\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h6 #currentTitele>Book Title: {{book.title | engpipe| titlecase}}</h6>\n        <!-- <h6 #currentId>Book Id: {{book.id}} {{i}}</h6>  -->\n        <h6 #currentAuthors>Book Authors: {{ book.authors }}</h6>\n        <h6 #currentPBDate>Published Date: {{ book.publishedDate }}</h6>\n        <br>\n\n        <!-- Button trigger Edit modal -->\n        <button type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"currentBook(book)\">Edit\n          Book\n        </button>\n\n        <!-- Button trigger Delete Modal -->\n        <button type=\"button\" id=\"delModal\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"\n          (click)=\"currentBook(book)\"> Delete\n          Book\n        </button>\n      </div>\n\n      <!-- Thumbnail-->\n      <div *ngIf=\"!hasThum\" class=\"col\">\n        <img src=\"{{book.thumb}}\" alt=\"img\">\n      </div>\n    </div>\n    <hr>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/books-list/books-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/books-list/books-list.component.ts ***!
  \****************************************************/
/*! exports provided: BooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksListComponent", function() { return BooksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-books.service */ "./src/app/get-books.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksListComponent = /** @class */ (function () {
    function BooksListComponent(booksService, fb) {
        this.booksService = booksService;
        this.fb = fb;
        this.addEnabeld = false;
        this.booksArr = [];
        this.size = 0;
    }
    BooksListComponent.prototype.ngOnInit = function () {
    };
    BooksListComponent.prototype.enableAdd = function () {
        this.addEnabeld = true;
    };
    BooksListComponent.prototype.onSearch = function (name) {
        var _this = this;
        this.booksArr = [];
        this.booksService.getBooks(name)
            .subscribe(function (data) {
            _this.booksArr = data;
            _this.fetchIntoArray();
        }, function (error) { return console.log(error); });
    };
    BooksListComponent.prototype.onclick = function (book) {
        console.log(book.id);
    };
    BooksListComponent.prototype.fetchIntoArray = function () {
        this.booksArr = this.booksArr["items"];
        this.size = this.booksArr.length;
        for (this.i = 0; this.i < this.size; this.i++) {
            if (this.booksArr[this.i] !== undefined) {
                this.booksArr[this.i]["id"] = this.i;
                this.booksArr[this.i]["authors"] = this.booksArr[this.i]["volumeInfo"]["authors"];
                this.booksArr[this.i]["publishedDate"] = this.booksArr[this.i]["volumeInfo"]["publishedDate"];
                this.booksArr[this.i]["title"] = this.booksArr[this.i]["volumeInfo"]["title"];
                if (this.booksArr[this.i]["volumeInfo"]["imageLinks"] !== undefined) {
                    this.hasThumb = true;
                    this.booksArr[this.i]["thumb"] = this.booksArr[this.i]["volumeInfo"]["imageLinks"]["thumbnail"];
                }
            }
        }
        console.log(this.size);
    };
    BooksListComponent.prototype.onEdit = function (editedTitle, editedPBdate, editedAuthors) {
        this.isPresent = this.booksArr.some(function (el) { return el.title === editedTitle; });
        console.log(this.isPresent);
        if (!this.isPresent) {
            var book = { id: this.selectedBook.id, authors: editedAuthors, publishedDate: editedPBdate, title: editedTitle, thumb: "" };
            this.booksArr[this.selectedBook.id - 1] = book;
            console.log(book);
        }
        else {
            console.log(editedTitle + " already exsist!! ");
        }
        console.log(this.size);
        this.fetchIntoArray();
    };
    BooksListComponent.prototype.onAdd = function (newTitle, newPBdate, newAuthors) {
        this.isPresent = this.booksArr.some(function (el) { return el.title === newTitle; });
        console.log(this.isPresent);
        if (!this.isPresent) {
            var book = { id: this.size, authors: newAuthors, publishedDate: newPBdate, title: newTitle, thumb: "" };
            this.booksArr[this.size] = book;
            console.log(book);
            this.size += 1;
        }
        console.log(this.size);
    };
    BooksListComponent.prototype.currentBook = function (book) {
        this.selectedBook = book;
        console.log("current book: " + this.selectedBook.id);
    };
    BooksListComponent.prototype.onDelete = function () {
        var _this = this;
        console.log("book: " + this.selectedBook.id + " Deleted!");
        this.booksArr = this.booksArr.filter(function (book) { return book !== _this.selectedBook; });
        this.size -= 1;
        console.log(this.booksArr);
    };
    BooksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-list',
            template: __webpack_require__(/*! ./books-list.component.html */ "./src/app/books-list/books-list.component.html"),
            styles: [__webpack_require__(/*! ./books-list.component.css */ "./src/app/books-list/books-list.component.css")]
        }),
        __metadata("design:paramtypes", [_get_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BooksListComponent);
    return BooksListComponent;
}());



/***/ }),

/***/ "./src/app/engpipe.ts":
/*!****************************!*\
  !*** ./src/app/engpipe.ts ***!
  \****************************/
/*! exports provided: EngPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngPipe", function() { return EngPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EngPipe = /** @class */ (function () {
    function EngPipe() {
    }
    EngPipe.prototype.transform = function (value) {
        return value.replace(/[\W_]/g, ' ');
    };
    EngPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'engpipe'
        })
    ], EngPipe);
    return EngPipe;
}());



/***/ }),

/***/ "./src/app/get-books.service.ts":
/*!**************************************!*\
  !*** ./src/app/get-books.service.ts ***!
  \**************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
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


// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'
var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/books/v1/volumes?q=';
    }
    BooksService.prototype.getBooks = function (name) {
        return this.http.get(this.url + name);
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksService);
    return BooksService;
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

module.exports = __webpack_require__(/*! C:\Users\Majd\Desktop\Angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map