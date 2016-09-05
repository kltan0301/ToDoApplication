"use strict";
var Task = (function () {
    function Task(id, taskName, status) {
        this.id = id;
        this.taskName = taskName;
        this.status = status;
    }
    Task.prototype.updateDone = function () {
        this.status = true;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map