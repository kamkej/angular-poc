import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent  {

  tasks = [];
  task:Task = {
    name: "",
    value:0,
    data_launch: '2017-01-01'
  };
  add(){
     let task = Object.assign({},this.task)
      this.tasks.push(task);
  }
}
