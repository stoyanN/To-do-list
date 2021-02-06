import { Component, OnDestroy, OnInit } from '@angular/core';
import * as EventEmitter from 'events';
import { OperationsService } from '../services/operations.service';
import { singleTask } from '../single-task-model';

const enum elementsId {
  editForm = 'editForm',
  createForm = 'createForm',
  errorMessage = 'error-msg'
}

const enum localStorageProperties {
  taskList = 'taskList'
}

const enum Events {
  reload = 'reload'
}

const enum ElementView {
  block = 'block',
  none = 'none'
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
  taskList: singleTask[] = [];
  isLocalStorage: Boolean;
  trigger: EventEmitter = new EventEmitter();

  editFormElementTitle: string;
  editFormElementDescription: string;
  editFormElementId: number;

  constructor(private service: OperationsService) { }

  ngOnInit(): void {
    this.isLocalStorage = this.service.checkLocalStorage();

    if (this.isLocalStorage) {
      let isTasksAvailable = !!localStorage.getItem(localStorageProperties.taskList);

      if (isTasksAvailable) {
        this.taskList = JSON.parse(localStorage.getItem(localStorageProperties.taskList));
      } else {
        localStorage.setItem(localStorageProperties.taskList, JSON.stringify([]));
      }

      this.trigger.addListener(Events.reload, () => this.taskList = JSON.parse(localStorage.getItem(localStorageProperties.taskList)));
    }
  }

  ngOnDestroy(): void {
    this.trigger.removeAllListeners;
  }

  private changeElementView(elementId: string, displayState: string): void {
    document.getElementById(elementId).style.display = displayState;
  }

  deleteTask(elementIndex: number): void {
    this.service.deleteSingleTask(elementIndex);
    this.trigger.emit(Events.reload);
  }

  editTask(elementIndex: number): void {
    let { title, description } = this.service.getTaskCurrentValues(elementIndex);

    this.editFormElementTitle = title;
    this.editFormElementDescription = description;
    this.editFormElementId = elementIndex;

    this.changeElementView(elementsId.editForm, ElementView.block);
    this.changeElementView(elementsId.createForm, ElementView.none);
  }

  changeTask(form: HTMLFormElement): void {
    let { id, newTitle, newDescription } = form.value;


    this.service.changeTaskValue(id, newTitle, newDescription);
    this.trigger.emit(Events.reload);

    this.changeElementView(elementsId.editForm, ElementView.none);
    this.changeElementView(elementsId.createForm, ElementView.block);
  }


  createNewTask(form: HTMLFormElement): void {
    let { taskTitle, taskDescription } = form.value;

    this.service.createNewTask(taskTitle, taskDescription);

    this.trigger.emit(Events.reload);

    form.reset();
  }
}
