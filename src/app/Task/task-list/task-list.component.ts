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

  constructor(private taskService:TaskService) {
  }
  ngOnInit(): void {
    this.taskList=this.taskService.getTasks();

    this.listSub= this.taskService.changeTasks.subscribe(
      list=>{
        this.taskList=list;
      }
    )

  }



}
