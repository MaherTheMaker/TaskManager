import {Component, OnInit} from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  listSub!:Subscription;
  taskList!:Task[];
  selectedTaskIndex!:number

  constructor(private taskService:TaskService) {
  }
  ngOnInit(): void {
    this.taskList=this.taskService.getTasks();

    this.listSub= this.taskService.changeTasksList.subscribe(
      list=>{
        this.taskList=list;
      }
    )

  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  selectTask(i: number) {
    this.selectedTaskIndex=i;
    this.taskService.startEditing.next(i);
    this.gotoTop();

    }

  deleteTask(event:any,i: number) {
    this.taskService.deleteTask(i);
    event.preventDefault();
  }

  protected readonly event = event;
}
