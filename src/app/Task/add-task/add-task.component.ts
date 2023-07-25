import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls:['add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  ngOnInit() {
  }


  onSubmitTask(f:NgForm) {
  console.log(f.value)
  }
}
