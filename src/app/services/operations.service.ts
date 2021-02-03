import { Injectable } from '@angular/core';
import { singleTask } from '../single-task-model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  collection: string = 'taskList';
  constructor() { }

  private getListOfTasks(): singleTask[] {
    return JSON.parse(localStorage.getItem(this.collection));
  }

  checkLocalStorage() {
    try {
      localStorage.setItem('testProp', 'testValue');
      localStorage.removeItem('testProp');
      return true;
    } catch (exception) {
      return false;
    }
  }

  deleteSingleTask(taskIndex: number) {
    let tasksList = this.getListOfTasks();

    tasksList.splice(taskIndex, 1);
    localStorage.setItem('taskList', JSON.stringify(tasksList));
  }

  getTaskCurrentValue(taskIndex: number): string {
    let tasksList = this.getListOfTasks();
    let { content } = tasksList[taskIndex];

    return content;
  }

  changeTaskValue(taskIndex: number, taskContent: string) {
    let tasksList = this.getListOfTasks();
    tasksList[taskIndex] = { content: taskContent };
    localStorage.setItem('taskList', JSON.stringify(tasksList));
  }

  createNewTask(taskContent: string) {
    let tasksList = this.getListOfTasks();
    tasksList.push({ content: taskContent });
    localStorage.setItem('taskList', JSON.stringify(tasksList));
  }
}
