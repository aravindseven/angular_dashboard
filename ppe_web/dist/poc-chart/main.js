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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ppe_ppe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ppe/ppe.component */ "./src/app/ppe/ppe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'ppe', pathMatch: 'full' },
    { path: 'forklift', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'ppe', component: _ppe_ppe_component__WEBPACK_IMPORTED_MODULE_3__["PpeComponent"] },
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



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'poc-chart';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ppe_ppe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ppe/ppe.component */ "./src/app/ppe/ppe.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _ppe_ppe_component__WEBPACK_IMPORTED_MODULE_10__["PpeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingModule"].forRoot({})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg-white header-box-shadow fixed-top text-center px-5\">\n  <div class=\"position-relative\">\n  <!-- <img src=\"./assets/images/logo.png\" alt=\"optisol\" class=\"logo position-absolute\" style=\"left:0px;top:12px;\"> -->\n  <h1 class=\"navbar-brand fw-500 mb-0 py-3\">ForkLift</h1>\n\n</div>\n</header>\n\n<div class=\"clearfix pt-5\"></div>\n<div class=\"container pt-5\"> \n  <div class=\"card mb-3\">\n\n    <div class=\"row\">\n      <div class=\"col-md-10  col-7 pr-0\">\n        <!-- <h1 class=\"fs20 mb-0 mt-2 fw-500\">Stacked Bar Chart</h1> -->\n      </div>\n      <div class=\"col-md-2 col-5 pl-0\">\n      <div class=\"input-group input-card position-relative\">\n        <input type=\"text\" class=\"form-control bg-transparent border-none position-relative form-control-sm z-ind-111\"\n        [(ngModel)]=\"seletcedDate\" [maxDate]=\"maxDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" (bsValueChange)=\"onDateChange($event)\"   placeholder=\"Pick a Date\" bsDatepicker>\n        \n        <div class=\"input-group-append position-absolute rt-0 h-100 z-ind-1\">\n          <span class=\"input-group-text border-none\"><i class=\"far fa-calendar-alt\"></i></span>\n        </div>\n      </div>\n    </div>\n    </div>\n \n    \n\n     <div class=\"mt-4\" [chart]=\"chart\"></div>\n\n \n  </div>\n\n\n  <div *ngIf=\"tableData.length>0\" class=\"table-responsive card mb-3 p-0\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <!-- <th>Date</th>\n            <th>Non Complaince</th> -->\n            <th>Time</th>\n            <th class=\"text-center\">Violations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let table of tableData | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n            <!-- <td>{{table.date | date:'MMMM d, y'}}</td>\n            <td>{{table.flag === 'red'?'Full':'Partial'}}</td> -->\n            <td>{{table.time }}</td>\n            <td class=\"text-center\"><button class=\"btn btn-circle\" (click)=\"openModal(table,i)\"><i class=\"far fa-image\"></i></button></td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n\n  <div class=\"pagination-card d-inline-block mb-4  bg-white\">\n   <pagination-controls *ngIf=\"tableData.length>0\" (pageChange)=\"p = $event\"  previousLabel=\"Previous\"\n    nextLabel=\"Next\"></pagination-controls>\n  </div>\n</div>\n   <ngx-loading [show]=\"loading\" [config]=\"{primaryColour: primaryColour, secondaryColour: secondaryColour,\n     tertiaryColour: primaryColour, backdropBorderRadius: '10px'}\"\n      [template]=\"loadingTemplate\"></ngx-loading>\n\n<ng-template #template>\n    <div class=\"modal-header border-none pb-0\">\n     \n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body text-center\">\n        <div class=\"position-relative mx-4\">\n            <button type=\"button\" class=\"btn btn-circle circle-btn left\"\n            [disabled]=\"index===0?true:false\"\n               (click)=\"imageAction('previous')\">\n              <i class=\"fas fa-chevron-left\"></i>\n            </button>\n              <img src=\"{{imageURL}}\" alt=\"img-preview\"  class=\"preview-img\"> \n              <button type=\"button\" class=\"btn btn-circle circle-btn right\" \n              [disabled]=\"(tableData.length-2)>=index?false:true\"\n                (click)=\"imageAction('next')\">\n                 <i class=\"fas fa-chevron-right\"></i>\n              </button>\n            </div>\n    </div>\n  \n\n  </ng-template>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// var dbx = new Dropbox({ accessToken: 'JVDAcsMT2nAAAAAAAAAADY6xymg4yYY2-L0JSvS0kD8a_OkSOO6fwRQ3GuXFZ1p6', fetch: fetch });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, apiService) {
        var _this = this;
        this.modalService = modalService;
        this.apiService = apiService;
        this.date = '';
        this.tableData = [];
        this.imageURL = 'assets/images/default.jpg';
        this.seletcedDate = new Date();
        this.index = 0;
        this.loading = false;
        this.primaryColour = '#dd0031';
        this.secondaryColour = '#006ddd';
        this.coloursEnabled = false;
        this.isBase64 = false;
        this.drawChart = function (Reddata) {
            _this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Shift',
                    verticalAlign: 'bottom',
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['Shift 1', 'Shift 2', 'Shift 3', 'Shift 4']
                },
                plotOptions: {
                    series: {
                        // pointStart: 1,
                        stacking: 'normal',
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function (e) {
                                    console.log(e);
                                    var params1 = {};
                                    var category = e.point.category.split(' ');
                                    params1.shift = category[1];
                                    params1.color = 'red';
                                    // e.point.series.name === 'Full Violation' ? params1.color = 'red' : params1.color = 'yellow';
                                    params1.date = _this.date;
                                    params1.page = 'forklift';
                                    _this.getTable(params1);
                                }
                            }
                        }
                    }
                },
                series: [{
                        name: 'Violation',
                        data: Reddata,
                        color: '#f95f54'
                    },
                ]
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Shift',
                verticalAlign: 'bottom',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Shift 1', 'Shift 2', 'Shift 3', 'Shift 4']
            },
            plotOptions: {
                series: {
                    // pointStart: 1,
                    stacking: 'normal',
                    cursor: 'pointer',
                }
            },
            series: [
                {
                    name: 'Violation',
                    data: [0, 0, 0, 0],
                    color: '#f95f54'
                },
            ]
        });
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    };
    HomeComponent.prototype.getChart = function () {
        var _this = this;
        this.loading = true;
        var params = {};
        params.date = this.date;
        params.page = 'forklift';
        // formData.append('date', params.date);
        this.apiService.post('chart', params).subscribe(function (data) {
            var Reddata = [];
            if (data.status === 200) {
                data.shift1.red ? Reddata[0] = data.shift1.red : Reddata[0] = 0;
                data.shift2.red ? Reddata[1] = data.shift2.red : Reddata[1] = 0;
                data.shift3.red ? Reddata[2] = data.shift3.red : Reddata[2] = 0;
                data.shift4.red ? Reddata[3] = data.shift4.red : Reddata[3] = 0;
                var Yellowdata = [];
                data.shift1.yellow ? Yellowdata[0] = data.shift1.yellow : Yellowdata[0] = 0;
                data.shift2.yellow ? Yellowdata[1] = data.shift2.yellow : Yellowdata[1] = 0;
                data.shift3.yellow ? Yellowdata[2] = data.shift3.yellow : Yellowdata[2] = 0;
                data.shift4.yellow ? Yellowdata[3] = data.shift4.yellow : Yellowdata[3] = 0;
                _this.loading = false;
                _this.drawChart(Reddata);
            }
            else {
                Reddata = [0, 0, 0, 0];
                _this.tableData = [];
                _this.loading = false;
                _this.drawChart(Reddata);
                console.log('Failed :', data);
            }
        });
    };
    HomeComponent.prototype.getTable = function (params1) {
        var _this = this;
        this.loading = true;
        this.apiService.post('table', params1).subscribe(function (data) {
            if (data.status === 200) {
                _this.tableData = data.data;
                _this.loading = false;
                _this.isBase64 = data.base64;
            }
            else {
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.imageAction = function (type) {
        var image = '';
        if (type === 'next') {
            this.index = this.index + 1;
        }
        else if (type === 'previous') {
            this.index = this.index - 1;
        }
        console.log(this.tableData[this.index]);
        if (this.tableData[this.index]) {
            if (this.isBase64) {
                image = this.tableData[this.index].image.substring(2);
                image = image.substring(0, image.length - 1);
                image = 'data:image/png;base64,' + image;
            }
            else {
                image = this.tableData[this.index].image;
            }
            this.imageURL = image;
        }
    };
    HomeComponent.prototype.openModal = function (data, index) {
        if (data.image) {
            var image = '';
            this.index = index;
            if (this.isBase64) {
                image = data.image.substring(2);
                image = image.substring(0, image.length - 1);
                image = 'data:image/png;base64,' + image;
            }
            else {
                image = data.image;
            }
            this.imageURL = image;
        }
        this.modalRef = this.modalService.show(this.template, Object.assign({}, { class: 'modal-lg' }));
    };
    HomeComponent.prototype.onDateChange = function (event) {
        this.date = this.formatDate(event);
        this.getChart();
    };
    HomeComponent.prototype.formatDate = function (date) {
        var d = new Date(date), year = d.getFullYear();
        var month = '' + (d.getMonth() + 1), day = '' + d.getDate();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('template'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], HomeComponent.prototype, "template", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ppe/ppe.component.html":
/*!****************************************!*\
  !*** ./src/app/ppe/ppe.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg-white header-box-shadow fixed-top text-center\">\n  <h1 class=\"navbar-brand fw-500 mb-0 py-3\">PPE Complaince Metrics</h1>\n</header>\n\n<div class=\"clearfix pt-5\"></div>\n<div class=\"container pt-5\"> \n  <div class=\"card mb-3\">\n\n    <div class=\"row\">\n      <div class=\"col-md-10  col-7 pr-0\">\n        <!-- <h1 class=\"fs20 mb-0 mt-2 fw-500\">Stacked Bar Chart</h1> -->\n      </div>\n      <div class=\"col-md-2 col-5 pl-0\">\n      <div class=\"input-group input-card position-relative\">\n        <input type=\"text\" class=\"form-control bg-transparent border-none position-relative form-control-sm z-ind-111\"\n        [(ngModel)]=\"seletcedDate\" [maxDate]=\"maxDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" (bsValueChange)=\"onDateChange($event)\"   placeholder=\"Pick a Date\" bsDatepicker>\n        \n        <div class=\"input-group-append position-absolute rt-0 h-100 z-ind-1\">\n          <span class=\"input-group-text border-none\"><i class=\"far fa-calendar-alt\"></i></span>\n        </div>\n      </div>\n    </div>\n    </div>\n \n    \n\n     <div class=\"mt-4\" [chart]=\"chart\"></div>\n\n \n  </div>\n\n\n  <div *ngIf=\"tableData.length>0\" >\n<div class=\"table-responsive card mb-5 p-0\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <!-- <th>Date</th>\n            <th>Non Complaince</th> -->\n            <th>Time</th>\n            <th class=\"text-center\">Violations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let table of tableData;let i = index\">\n            <!-- <td>{{table.date | date:'MMMM d, y'}}</td>\n            <td>{{table.flag === 'red'?'Full':'Partial'}}</td> -->\n            <td>{{table.time }}</td>\n            <td class=\"text-center\"><button class=\"btn btn-circle\" (click)=\"openModal(table,i)\"><i class=\"far fa-image\"></i></button></td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{primaryColour: primaryColour, secondaryColour: secondaryColour,\n  tertiaryColour: primaryColour, backdropBorderRadius: '10px'}\"\n   [template]=\"loadingTemplate\"></ngx-loading>\n\n\n<ng-template #template>\n    <div class=\"modal-header border-none pb-0\">\n     \n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body text-center\">\n\n      <div class=\"position-relative mx-4\">\n      <button type=\"button\" class=\"btn btn-circle circle-btn left\" \n      [disabled]=\"index===0?true:false\"\n       (click)=\"imageAction('previous')\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </button>\n        <img src=\"{{imageURL}}\" alt=\"img-preview\"  class=\"preview-img\"> \n        <button type=\"button\" class=\"btn btn-circle circle-btn right\" \n        [disabled]=\"(tableData.length-2)>=index?false:true\"\n         (click)=\"imageAction('next')\">\n           <i class=\"fas fa-chevron-right\"></i>\n        </button>\n      </div>\n      <!-- <app-image-viewer  class=\"\"[images]=\"['iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==', 'https://picsum.photos/900/500/?random']\"\n      [idContainer]=\"'idOnHTML'\"\n       [loadOnInit]=\"true\"></app-image-viewer> -->\n    </div>\n\n  </ng-template>"

/***/ }),

/***/ "./src/app/ppe/ppe.component.scss":
/*!****************************************!*\
  !*** ./src/app/ppe/ppe.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BwZS9wcGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ppe/ppe.component.ts":
/*!**************************************!*\
  !*** ./src/app/ppe/ppe.component.ts ***!
  \**************************************/
/*! exports provided: PpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PpeComponent", function() { return PpeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_5__["Dropbox"]({ accessToken: 'JVDAcsMT2nAAAAAAAAAADY6xymg4yYY2-L0JSvS0kD8a_OkSOO6fwRQ3GuXFZ1p6', fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__["fetch"] });
var PpeComponent = /** @class */ (function () {
    function PpeComponent(modalService, apiService) {
        var _this = this;
        this.modalService = modalService;
        this.apiService = apiService;
        this.loading = false;
        this.primaryColour = '#dd0031';
        this.secondaryColour = '#006ddd';
        this.coloursEnabled = false;
        this.isBase64 = false;
        this.date = '';
        this.tableData = [];
        this.imageURL = 'assets/images/default.jpg';
        this.seletcedDate = new Date();
        this.index = 0;
        this.drawChart = function (Reddata, Yellowdata) {
            _this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Shift',
                    verticalAlign: 'bottom',
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['Shift 1', 'Shift 2', 'Shift 3', 'Shift 4']
                },
                plotOptions: {
                    series: {
                        // pointStart: 1,
                        stacking: 'normal',
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function (e) {
                                    console.log(e);
                                    var params = {};
                                    var category = e.point.category.split(' ');
                                    params.shift = category[1];
                                    // params.color = 'red';
                                    e.point.series.name === 'Full Violation' ? params.color = 'red' : params.color = 'yellow';
                                    params.date = _this.date;
                                    params.page = 'ppe';
                                    _this.getTable(params);
                                }
                            }
                        }
                    }
                },
                series: [{
                        name: 'Violation',
                        data: Reddata,
                        color: '#f95f54'
                    },
                    {
                        name: 'Partial Violation',
                        data: Yellowdata,
                        color: '#FEC304'
                    }
                ]
            });
        };
    }
    PpeComponent.prototype.ngOnInit = function () {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Shift',
                verticalAlign: 'bottom',
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Shift 1', 'Shift 2', 'Shift 3', 'Shift 4']
            },
            plotOptions: {
                series: {
                    // pointStart: 1,
                    stacking: 'normal',
                    cursor: 'pointer',
                }
            },
            series: [{
                    name: 'Full Violation',
                    data: [0, 0, 0, 0],
                    color: '#f95f54'
                },
                {
                    name: 'Partial Violation',
                    data: [0, 0, 0, 0],
                    color: '#FEC304'
                }]
        });
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    };
    PpeComponent.prototype.getChart = function () {
        var _this = this;
        this.loading = true;
        var params = {};
        params.date = this.date;
        params.page = 'ppe';
        // formData.append('date', params.date);
        this.apiService.post('chart', params).subscribe(function (data) {
            var Reddata = [];
            var Yellowdata = [];
            if (data.status === 200) {
                data.shift1.red ? Reddata[0] = data.shift1.red : Reddata[0] = 0;
                data.shift2.red ? Reddata[1] = data.shift2.red : Reddata[1] = 0;
                data.shift3.red ? Reddata[2] = data.shift3.red : Reddata[2] = 0;
                data.shift4.red ? Reddata[3] = data.shift4.red : Reddata[3] = 0;
                data.shift1.yellow ? Yellowdata[0] = data.shift1.yellow : Yellowdata[0] = 0;
                data.shift2.yellow ? Yellowdata[1] = data.shift2.yellow : Yellowdata[1] = 0;
                data.shift3.yellow ? Yellowdata[2] = data.shift3.yellow : Yellowdata[2] = 0;
                data.shift4.yellow ? Yellowdata[3] = data.shift4.yellow : Yellowdata[3] = 0;
                _this.loading = false;
                _this.drawChart(Reddata, Yellowdata);
            }
            else {
                Reddata = [0, 0, 0, 0];
                _this.tableData = [];
                _this.loading = false;
                _this.drawChart(Reddata, Yellowdata);
                console.log('Failed :', data);
            }
        });
    };
    PpeComponent.prototype.getTable = function (params) {
        var _this = this;
        this.loading = true;
        this.apiService.post('table', params).subscribe(function (data) {
            if (data.status === 200) {
                // const path = `/BPCL/${params.page}/${params.date}`;
                // const params = params;
                // dbx.filesListFolder({ path: path })
                //   .then(function (response) {
                //     for (let i = 0; i < data.data.length; i++) {
                //       const image_name = data.data[i].date + '_' + data.data[i].time + '_shift' + params.shift + '_' + params.color + '.jpg';
                //       const blob = _.find(response.entries, { name: image_name });
                //       if (blob) {
                //         dbx.filesGetTemporaryLink({
                //           path: blob.path_lower,
                //         }).then(function (result) {
                //           data.data[i].image = result.link;
                //         }).catch(e => {
                //           console.log(e);
                //         });
                //       }
                //     }
                //   }).catch(function (error) {
                //     console.log(error);
                //   });
                // console.log(entries)
                _this.loading = false;
                _this.isBase64 = data.base64;
                _this.tableData = data.data;
            }
            else {
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PpeComponent.prototype.imageAction = function (type) {
        var image = '';
        if (type === 'next') {
            this.index = this.index + 1;
        }
        else if (type === 'previous') {
            this.index = this.index - 1;
        }
        if (this.tableData[this.index]) {
            if (this.isBase64) {
                image = this.tableData[this.index].image.substring(2);
                image = image.substring(0, image.length - 1);
                image = 'data:image/png;base64,' + image;
            }
            else {
                image = this.tableData[this.index].image;
            }
            this.imageURL = image;
        }
    };
    PpeComponent.prototype.openModal = function (data, index) {
        if (data.image) {
            var image = '';
            this.index = index;
            if (this.isBase64) {
                image = data.image.substring(2);
                image = image.substring(0, image.length - 1);
                image = 'data:image/png;base64,' + image;
            }
            else {
                image = data.image;
            }
            this.imageURL = image;
        }
        this.modalRef = this.modalService.show(this.template, Object.assign({}, { class: 'modal-lg' }));
    };
    PpeComponent.prototype.onDateChange = function (event) {
        this.date = this.formatDate(event);
        console.log(this.date);
        this.getChart();
    };
    PpeComponent.prototype.formatDate = function (date) {
        var d = new Date(date), year = d.getFullYear();
        var month = '' + (d.getMonth() + 1), day = '' + d.getDate();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('template'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], PpeComponent.prototype, "template", void 0);
    PpeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ppe',
            template: __webpack_require__(/*! ./ppe.component.html */ "./src/app/ppe/ppe.component.html"),
            styles: [__webpack_require__(/*! ./ppe.component.scss */ "./src/app/ppe/ppe.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PpeComponent);
    return PpeComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    // url = 'http://192.168.1.153:5000';
    // url = 'http://192.168.1.188:5000';
    function ApiService(http) {
        this.http = http;
        // url = 'http://34.218.121.25:5000';
        this.url = 'http://localhost:5000';
    }
    ApiService.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var k = params_1[_i];
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    ApiService.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    ApiService.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
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

module.exports = __webpack_require__(/*! /home/desktop-obs-66/Documents/PPE_project/model_6/Dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map