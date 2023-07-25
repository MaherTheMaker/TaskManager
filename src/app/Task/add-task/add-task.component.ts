import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TaskService} from "../task.service";
import {Subscription} from "rxjs";
import {Task} from "../task";


@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls:['add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  editMode: boolean=false;
  index!:number;
  currentTask!:Task;
  private sub!:Subscription;
  @ViewChild('f',{static:true}) form?:NgForm;

  constructor(private taskService:TaskService) {
  }
  ngOnInit() {

    this.sub=this.taskService.startEditing.subscribe(
      i=>
      {
        this.index=i;
        this.currentTask= this.taskService.getTask(i);

        this.form?.setValue({
          title:this.currentTask.title,
          description:this.currentTask.description,
          date:this.formatDate(this.currentTask.dueDate),

        })
        this.editMode = true;


      }
    )
  }


  onSubmitTask(f:NgForm) {
    const newTask=new Task(f.value.title,f.value.description,f.value.date);

  if (this.editMode){
    this.taskService.updateTask(this.index,newTask);
  }
  else {
    this.taskService.addTask(newTask);
  }
  f.reset();
  this.editMode=false;
  }

  formatDate(date: Date): string {
    // Get the individual components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    // Combine the components in the required format "yyyy-MM-dd"
    return `${year}-${month}-${day}`;
  }
}
