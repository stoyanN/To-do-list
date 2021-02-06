import { Injectable } from '@angular/core';
import { singleTask } from '../single-task-model';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {
  localStorageProperty: string = 'taskList';
  constructor() { }

  private getListOfTasks(): singleTask[] {
    return JSON.parse(localStorage.getItem(this.localStorageProperty));
  }

  checkLocalStorage(): boolean {
    try {
      localStorage.setItem('testProp', 'testValue');
      localStorage.removeItem('testProp');
      return true;
    } catch (exception) {
      return false;
    }
  }

  deleteSingleTask(taskIndex: number): void {
    let tasksList = this.getListOfTasks();

    tasksList.splice(taskIndex, 1);
    localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
  }

  getTaskCurrentValues(taskIndex: number): singleTask {
    let tasksList = this.getListOfTasks();

    return tasksList[taskIndex];
  }

  changeTaskValue(taskIndex: number, taskTitle: string, taskContent: string): void {
    let tasksList = this.getListOfTasks();
    
    tasksList[taskIndex] = { title: taskTitle, description: taskContent };
    localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
  }

  createNewTask(taskTitle: string, taskContent: string): void {
    let tasksList = this.getListOfTasks();

    tasksList.push({ title: taskTitle, description: taskContent });
    localStorage.setItem(this.localStorageProperty, JSON.stringify(tasksList));
  }
  
}
