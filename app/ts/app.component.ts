import { Component } from '@angular/core';
import { Task } from './task';
import { StatusPipe } from './status.pipe'
import { TaskService } from './task.service'
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>To Do App</h1>
      <form>
        <div class="input-group">
          <input name="task" class="form-custom" placeholder="Add new task" #newTask>

        <button type="button" (click)="addTask(newTask)"><span class="glyphicon glyphicon-plus"></span></button>
        </div>
    </form>
    <pending-list></pending-list>
    <completed-list></completed-list>
    `,
    providers: [TaskService]
})
export class AppComponent {
  taskList: Task[];

  constructor(private taskService: TaskService){
  }

  getTasks(): void {
    this.taskList = this.taskService.getTasks();
  }

  ngOnInit(): void {
    this.getTasks();
  }
  addTask(taskName: HTMLInputElement): void{
    this.taskService.addTask(taskName.value);
  }
}
