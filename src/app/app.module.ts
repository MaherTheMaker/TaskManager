import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskListComponent} from "./Task/task-list/task-list.component";
import {AddTaskComponent} from "./Task/add-task/add-task.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
