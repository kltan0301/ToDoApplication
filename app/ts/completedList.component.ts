import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { StatusPipe } from './status.pipe'
import { Task } from './task';

@Component ({
  selector: 'completed-list',
  templateUrl: 'app/html/completedList.component.html',
  providers: [TaskService]
})
export class CompletedList {
  taskList: Task[];

  constructor(private taskService: TaskService) {
  }
  getTasks(): void {
    this.taskList = this.taskService.getTasks();
  }
  ngOnInit(){
    this.getTasks();
  }
}
