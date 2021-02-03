import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as EventEmitter from 'events';
import { OperationsService } from '../services/operations.service';
import { singleTask } from '../single-task-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  taskList: singleTask[] = [];
  createForm: FormGroup = new FormGroup({
    taskContent: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  editForm: FormGroup = new FormGroup({
    newContent: new FormControl('', [Validators.required, Validators.minLength(3)]),
    id: new FormControl()
  });
  isLocalStorage: Boolean;
  trigger: EventEmitter = new EventEmitter();

  constructor(private service: OperationsService) { }

  ngOnInit(): void {
    this.isLocalStorage = this.service.checkLocalStorage();
    if (this.isLocalStorage) {
      let isTasksAvailable = !!localStorage.getItem('taskList');
      if (isTasksAvailable) {
        this.taskList = JSON.parse(localStorage.getItem('taskList'));
      } else {
        localStorage.setItem('taskList', JSON.stringify([]));
      }

      this.trigger.addListener('reload', () => this.taskList = JSON.parse(localStorage.getItem('taskList')));
    }
  }

  deleteTask(elementIndex: number) {
    this.service.deleteSingleTask(elementIndex);
    this.trigger.emit('reload');
  }

  editTask(elementIndex: number) {
    let content = this.service.getTaskCurrentValue(elementIndex);

    this.editForm.setValue({ newContent: content, id: elementIndex });
    document.getElementById('editForm').style.display = "block";
    document.getElementById('createForm').style.display = "none";
  }

  changeTask() {
    if (this.editForm.valid) {
      let { id, newContent } = this.editForm.value;

      this.service.changeTaskValue(id, newContent);
      this.trigger.emit('reload');

      document.getElementById('editForm').style.display = "none";
      document.getElementById('createForm').style.display = "block";
    } else {
      alert('The task must be at least 3 characters long');
    }
  }

  createNewList() {
    if (this.createForm.valid) {
      let { taskContent } = this.createForm.value;

      this.service.createNewTask(taskContent);
      this.trigger.emit('reload');
    } else {
      alert('The task must be at least 3 characters long');
    }

    this.createForm.reset();
  }
}
