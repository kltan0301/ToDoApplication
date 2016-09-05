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
var PendingList = (function () {
    function PendingList(taskService) {
        this.taskService = taskService;
    }
    PendingList.prototype.getTasks = function () {
        this.taskList = this.taskService.getTasks();
    };
    PendingList.prototype.ngOnInit = function () {
        this.getTasks();
    };
    PendingList = __decorate([
        core_1.Component({
            selector: 'pending-list',
            templateUrl: 'app/html/pendingList.component.html',
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], PendingList);
    return PendingList;
}());
exports.PendingList = PendingList;
//# sourceMappingURL=pendingList.component.js.map