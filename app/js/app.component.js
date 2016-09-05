"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task.service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
    }
    AppComponent.prototype.getTasks = function () {
        this.taskList = this.taskService.getTasks();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    AppComponent.prototype.addTask = function (taskName) {
        this.taskService.addTask(taskName.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>To Do App</h1>\n      <form>\n        <div class=\"input-group\">\n          <input name=\"task\" class=\"form-custom\" placeholder=\"Add new task\" #newTask>\n\n        <button type=\"button\" (click)=\"addTask(newTask)\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n        </div>\n    </form>\n    <pending-list></pending-list>\n    <completed-list></completed-list>\n    ",
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map