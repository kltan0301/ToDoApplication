import {Component} from '@angular/core';
import {Task} from './task'
import { TaskService } from './task.service';

@Component({
  selector: 'task-item',
  inputs: ['task'],
  templateUrl: 'app/html/taskItem.component.html',
  styleUrls:['app/css/taskItem.component.css']
})
export class TaskItem {
  task: Task;

  constructor(private taskService: TaskService) {
  }

  updateDone(taskId: number){
    this.taskService.updateDone(taskId);
  }

  deleteDone(taskId: number){
    this.taskService.deleteTask(taskId);
  }
}
