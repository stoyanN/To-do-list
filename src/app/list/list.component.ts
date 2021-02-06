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

const enum ErrMessages {
  emptyField = 'No empty fileds are allowed',
  notEnoughContent = 'Each field must be at least 3 characters long'
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

  isErrorMessage: boolean = true;

  constructor(private service: OperationsService) { }

  ngOnInit(): void {
    this.isErrorMessage = false;
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

  private errorMsgText(elemId: string, message: string): void {
    document.getElementById(elemId).textContent = message;

  }

  private formValidationHandler(formValue: object): void {
    for (let rec in formValue) {
      if (formValue[rec] === '') {
        this.errorMsgText(elementsId.errorMessage, ErrMessages.emptyField);
        return;
      } else if (formValue[rec].length < 3) {
        this.errorMsgText(elementsId.errorMessage, ErrMessages.notEnoughContent);
        return;
      }
    }
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
    if (form.invalid) {
      this.changeElementView(elementsId.errorMessage, ElementView.block);
      return;
    }

    let { id, newTitle, newDescription } = form.value;


    this.service.changeTaskValue(id, newTitle, newDescription);
    this.trigger.emit(Events.reload);

    this.changeElementView(elementsId.editForm, ElementView.none);
    this.changeElementView(elementsId.createForm, ElementView.block);
    this.changeElementView(elementsId.errorMessage, ElementView.none);
  }


  createNewTask(form: HTMLFormElement): void {
    if (form.invalid) {
      this.formValidationHandler(form.value);
      this.changeElementView(elementsId.errorMessage, ElementView.block);
      return;
    }

    let { taskTitle, taskDescription } = form.value;

    this.service.createNewTask(taskTitle, taskDescription);
    this.changeElementView(elementsId.errorMessage, ElementView.none);

    this.trigger.emit(Events.reload);

    form.reset();
  }
}
