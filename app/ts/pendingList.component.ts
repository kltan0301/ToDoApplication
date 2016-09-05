import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { StatusPipe } from './status.pipe'
import { Task } from './task';

@Component ({
  selector: 'pending-list',
  templateUrl: 'app/html/pendingList.component.html',
  providers: [TaskService]
})
export class PendingList {
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
