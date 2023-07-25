import { Injectable } from '@angular/core';
import {Task} from "./task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  changeTasksList=new Subject<Task[]>();
  startEditing=new Subject<number>();


  myTasks:Task[]=[
    new Task("t1","des1ded s1des1des1des1des1des1des1de s1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),

  ]

  constructor() {
    this.changeTasksList.next(this.myTasks);
  }

  addTask(task:Task){
    this.myTasks.push(task  );
    this.changeTasksList.next(this.getTasks());

  }

  getTasks(){
    return this.myTasks.slice();
  }

  getTask(index :number){
    return this.myTasks[index];
  }

  updateTask(index:number , updatedTask:Task)
  {
    this.myTasks[index]=updatedTask;
    this.changeTasksList.next(this.getTasks());

  }

  deleteTask(index:number){
    this.myTasks.splice(index,1);
    this.changeTasksList.next(this.getTasks());

  }
}
