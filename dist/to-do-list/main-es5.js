(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/stoyan/Desktop/gitKraken-test/To-do-list/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list/list.component */
      "uMRu");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'to-do-list';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list");
          }
        },
        directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list/list.component */
      "uMRu");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_operations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/operations.service */
      "dO5I");
      /* harmony import */


      var _error_message_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error-message.directive */
      "wOlR");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_operations_service__WEBPACK_IMPORTED_MODULE_6__["OperationsService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _error_message_directive__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _error_message_directive__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageDirective"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            providers: [_services_operations_service__WEBPACK_IMPORTED_MODULE_6__["OperationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dO5I":
    /*!************************************************!*\
      !*** ./src/app/services/operations.service.ts ***!
      \************************************************/

    /*! exports provided: OperationsService */

    /***/
    function dO5I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperationsService", function () {
        return OperationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OperationsService = /*#__PURE__*/function () {
        function OperationsService() {
          _classCallCheck(this, OperationsService);

          this.localStorageProperty = 'taskList';
        }

        _createClass(OperationsService, [{
          key: "getListOfTasks",
          value: function getListOfTasks() {
            return JSON.parse(localStorage.getItem(this.localStorageProperty));
          }
        }, {
          key: "checkLocalStorage",
          value: function checkLocalStorage() {
            try {
              localStorage.setItem('testProp', 'testValue');
              localStorage.removeItem('testProp');
              return true;
            } catch (exception) {
              return false;
            }
          }
        }, {
          key: "deleteSingleTask",
          value: function deleteSingleTask(taskIndex) {
            var tasksList = this.getListOfTasks();
            tasksList.splice(taskIndex, 1);
            localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
          }
        }, {
          key: "getTaskCurrentValues",
          value: function getTaskCurrentValues(taskIndex) {
            var tasksList = this.getListOfTasks();
            return tasksList[taskIndex];
          }
        }, {
          key: "changeTaskValue",
          value: function changeTaskValue(taskIndex, taskTitle, taskContent) {
            var tasksList = this.getListOfTasks();
            tasksList[taskIndex] = {
              title: taskTitle,
              description: taskContent
            };
            localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
          }
        }, {
          key: "createNewTask",
          value: function createNewTask(taskTitle, taskContent) {
            var tasksList = this.getListOfTasks();
            tasksList.push({
              title: taskTitle,
              description: taskContent
            });
            localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
          }
        }]);

        return OperationsService;
      }();

      OperationsService.ɵfac = function OperationsService_Factory(t) {
        return new (t || OperationsService)();
      };

      OperationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OperationsService,
        factory: OperationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "uMRu":
    /*!****************************************!*\
      !*** ./src/app/list/list.component.ts ***!
      \****************************************/

    /*! exports provided: ListComponent */

    /***/
    function uMRu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! events */
      "+qE3");
      /* harmony import */


      var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_operations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/operations.service */
      "dO5I");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_26_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteTask(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_26_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx_r7.editTask(i_r4, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.description);
        }
      }

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(service) {
          _classCallCheck(this, ListComponent);

          this.service = service;
          this.taskList = [];
          this.trigger = new events__WEBPACK_IMPORTED_MODULE_1__();
          this.isErrorMessage = true;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isErrorMessage = false;
            this.isLocalStorage = this.service.checkLocalStorage();

            if (this.isLocalStorage) {
              var isTasksAvailable = !!localStorage.getItem("taskList"
              /* taskList */
              );

              if (isTasksAvailable) {
                this.taskList = JSON.parse(localStorage.getItem("taskList"
                /* taskList */
                ));
              } else {
                localStorage.setItem("taskList"
                /* taskList */
                , JSON.stringify([]));
              }

              this.trigger.addListener("reload"
              /* reload */
              , function () {
                return _this.taskList = JSON.parse(localStorage.getItem("taskList"
                /* taskList */
                ));
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.trigger.removeAllListeners;
          }
        }, {
          key: "changeElementView",
          value: function changeElementView(elementId, displayState) {
            document.getElementById(elementId).style.display = displayState;
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(elementIndex) {
            this.service.deleteSingleTask(elementIndex);
            this.trigger.emit("reload"
            /* reload */
            );
          }
        }, {
          key: "editTask",
          value: function editTask(elementIndex) {
            var _this$service$getTask = this.service.getTaskCurrentValues(elementIndex),
                title = _this$service$getTask.title,
                description = _this$service$getTask.description;

            this.editFormElementTitle = title;
            this.editFormElementDescription = description;
            this.editFormElementId = elementIndex;
            this.changeElementView("editForm"
            /* editForm */
            , 'block');
            this.changeElementView("createForm"
            /* createForm */
            , 'none');
          }
        }, {
          key: "changeTask",
          value: function changeTask(form) {
            if (form.invalid) {
              this.changeElementView("error-msg"
              /* errorMessage */
              , 'block');
              return;
            }

            var _form$value = form.value,
                id = _form$value.id,
                newTitle = _form$value.newTitle,
                newDescription = _form$value.newDescription;
            this.service.changeTaskValue(id, newTitle, newDescription);
            this.trigger.emit("reload"
            /* reload */
            );
            this.changeElementView("editForm"
            /* editForm */
            , 'none');
            this.changeElementView("createForm"
            /* createForm */
            , 'block');
            this.changeElementView("error-msg"
            /* errorMessage */
            , 'none');
          }
        }, {
          key: "createNewTask",
          value: function createNewTask(form) {
            if (form.invalid) {
              console.log(form);
              this.changeElementView("error-msg"
              /* errorMessage */
              , 'block');
              return;
            }

            var _form$value2 = form.value,
                taskTitle = _form$value2.taskTitle,
                taskDescription = _form$value2.taskDescription;
            this.service.createNewTask(taskTitle, taskDescription);
            this.changeElementView("error-msg"
            /* errorMessage */
            , 'none');
            this.trigger.emit("reload"
            /* reload */
            );
            form.reset();
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_operations_service__WEBPACK_IMPORTED_MODULE_2__["OperationsService"]));
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        decls: 27,
        vars: 4,
        consts: [[1, "list-holder"], [1, "list"], ["id", "createForm", 3, "ngSubmit"], ["createForm", "ngForm"], ["ngModel", "", "required", "", "minlength", "3", "type", "text", "name", "taskTitle", "placeholder", "Task Title"], ["ngModel", "", "required", "", "minlength", "3", "name", "taskDescription", "placeholder", "Task description", "cols", "30", "rows", "10"], ["type", "submit"], ["id", "editForm", 1, "hidden", 3, "ngSubmit"], ["editForm", "ngForm"], ["required", "", "minlength", "3", "type", "text", "name", "newTitle", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "3", "name", "newDescription", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "id", 1, "hidden", 3, "ngModel", "ngModelChange"], ["id", "error-msg", "hidden", "", 1, "error-msg"], [1, "task-holder"], [4, "ngFor", "ngForOf"], [1, "task-content"], [1, "btn-holder"], [3, "click"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To Do List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return ctx.createNewTask(_r0.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListComponent_Template_form_ngSubmit_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

              return ctx.changeTask(_r1.form);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.editFormElementTitle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_textarea_ngModelChange_19_listener($event) {
              return ctx.editFormElementDescription = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.editFormElementId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Change Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "The task must be at least 3 characters long");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_div_26_Template, 11, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editFormElementTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editFormElementDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editFormElementId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%] {\n    color: rgba(83, 68, 27, 0.7);\n    font-size: 5rem;\n    margin: 45px 0 0 0;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    min-height: 30px;\n    min-width: 60%;\n    margin: 0 auto;\n}\n\nform[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 10px auto;\n    padding: 10px 30px;\n    font-size: 1.5rem;\n    width: 60%;\n}\n\nform[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n    font-size: 2rem;\n    color: white;\n    font-weight: bold;\n}\n\nform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    \n    border-color: black;\n    border-radius: 15px;\n    padding-bottom: 20px;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 15px auto;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 5px auto;\n    padding: 5px;\n    min-width: 5vw;\n    font-size: 1.2rem;\n}\n\ndiv[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin: 5px;\n}\n\n.task-holder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 100%;\n}\n\n.list-holder[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    min-height: 50vh;\n}\n\n.list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    width: 60%;\n    margin: 0 auto;\n    border-radius: 15px;\n}\n\n.btn-holder[_ngcontent-%COMP%] {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n}\n\n.task-content[_ngcontent-%COMP%] {\n    text-align: center;\n    overflow: auto;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n    width: 60%;\n    background-color: red;\n    font-size: 1.75rem;\n    padding: 15px;\n    text-align: center;\n    margin: 15px auto;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: rgba(240, 45, 45, 0.75);\n}\n\n.task-holder[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    width: 30%;\n    max-height: 25vh;\n    color: darkblue;\n    padding: 5px;\n    margin: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: rgba(194, 186, 78, 0.5);\n}\n\n@media (max-width: 800px) {\n    form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n\n    .list[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .task-holder[_ngcontent-%COMP%] {\n        justify-content: space-evenly;\n    }\n\n    .task-holder[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n        width: 47%;\n    }\n}\n\n@media (max-width: 950px) {\n    h1[_ngcontent-%COMP%] {\n        font-size: 3.5rem;\n    }\n\n    .list[_ngcontent-%COMP%] {\n        width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBSUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6IHJnYmEoODMsIDY4LCAyNywgMC43KTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbWFyZ2luOiA0NXB4IDAgMCAwO1xufVxuXG5pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICBtaW4td2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG5mb3JtIGxlZ2VuZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZm9ybSBmaWVsZHNldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLyogbWluLWhlaWdodDogNTB2aDsgKi9cbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtaW4td2lkdGg6IDV2dztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuZGl2PmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4udGFzay1ob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5saXN0LWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuXG4ubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJ0bi1ob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVycm9yLW1zZyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDQ1LCA0NSwgMC43NSk7XG59XG5cbi50YXNrLWhvbGRlcj5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXgtaGVpZ2h0OiAyNXZoO1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE4NiwgNzgsIDAuNSk7XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmb3JtIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgICAubGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YXNrLWhvbGRlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIH1cblxuICAgIC50YXNrLWhvbGRlcj5kaXYge1xuICAgICAgICB3aWR0aDogNDclO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG5cbiAgICAubGlzdCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
          }]
        }], function () {
          return [{
            type: _services_operations_service__WEBPACK_IMPORTED_MODULE_2__["OperationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wOlR":
    /*!********************************************!*\
      !*** ./src/app/error-message.directive.ts ***!
      \********************************************/

    /*! exports provided: ErrorMessageDirective */

    /***/
    function wOlR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessageDirective", function () {
        return ErrorMessageDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorMessageDirective = /*#__PURE__*/function () {
        function ErrorMessageDirective(el) {
          _classCallCheck(this, ErrorMessageDirective);

          this.el = el;
        }

        _createClass(ErrorMessageDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.el.nativeElement.style.display = 'block';
          }
        }]);

        return ErrorMessageDirective;
      }();

      ErrorMessageDirective.ɵfac = function ErrorMessageDirective_Factory(t) {
        return new (t || ErrorMessageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ErrorMessageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ErrorMessageDirective,
        selectors: [["", "appErrorMessage", ""]],
        inputs: {
          isErrorMessage: "isErrorMessage"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appErrorMessage]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          isErrorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isErrorMessage']
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map