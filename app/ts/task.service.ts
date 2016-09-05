import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKLIST } from './mock-data';

@Injectable()
export class TaskService {
  id: number = TASKLIST.length;

  getTasks(): Task[]{
    return TASKLIST;
  }
  addTask(newTask: string): void {
    if(newTask){
      this.id++
      TASKLIST.push(new Task(this.id,newTask, false));
    }
  }
  updateDone(taskId: number){
    var task = TASKLIST.find(function(obj){
      return obj.id === taskId;
    });
    task.status = true;
  }
  deleteTask(taskId: number){
    var task = TASKLIST.find(function(obj){
      return obj.id === taskId;
    });
    TASKLIST.splice(TASKLIST.indexOf(task),1);
  }
}
