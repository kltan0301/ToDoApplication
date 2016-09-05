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
var task_1 = require('./task');
var mock_data_1 = require('./mock-data');
var TaskService = (function () {
    function TaskService() {
        this.id = mock_data_1.TASKLIST.length;
    }
    TaskService.prototype.getTasks = function () {
        return mock_data_1.TASKLIST;
    };
    TaskService.prototype.addTask = function (newTask) {
        if (newTask) {
            this.id++;
            mock_data_1.TASKLIST.push(new task_1.Task(this.id, newTask, false));
        }
    };
    TaskService.prototype.updateDone = function (taskId) {
        var task = mock_data_1.TASKLIST.find(function (obj) {
            return obj.id === taskId;
        });
        task.status = true;
    };
    TaskService.prototype.deleteTask = function (taskId) {
        var task = mock_data_1.TASKLIST.find(function (obj) {
            return obj.id === taskId;
        });
        mock_data_1.TASKLIST.splice(mock_data_1.TASKLIST.indexOf(task), 1);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map