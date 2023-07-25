import { Injectable } from '@angular/core';
import {Task} from "./task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  changeTasks=new Subject<Task[]>();
  myTasks:Task[]=[
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
    new Task("t1","des1des1des1des1des1ds1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1des1",new Date()),
    new Task("t2","des2",new Date()),
  ]

  constructor() {
    this.changeTasks.next(this.myTasks);
  }

  addTask(title:string,description:string,dueDate:Date){
    this.myTasks.push(new Task(title,description,dueDate));
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
  }

  deleteTask(index:number){
    this.myTasks.splice(index,1);
  }
}
