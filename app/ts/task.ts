export class Task {
  taskName: string;
  status: boolean;
  id: number;

  constructor(id: number, taskName: string, status: boolean){
    this.id = id;
    this.taskName = taskName;
    this.status = status;
  }
  updateDone(){
    this.status = true;
  }
}
