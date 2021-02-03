import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if localStorage is available when checkLocalStorage is invoked', () => {
    let result = service.checkLocalStorage();
    expect(result).toBeTrue();
  });

  it('should add new task when createNewTask method is invoked', () => {
    localStorage.setItem('taskList', JSON.stringify([]));

    service.createNewTask('testValue');

    let result = JSON.parse(localStorage.getItem('taskList'));

    expect(result.length).toBe(1);
  });

  it('should change task value when changeTaskValue method is invoked', () => {
    localStorage.setItem('taskList', JSON.stringify([]));
    service.createNewTask('testValue');
    service.changeTaskValue(0, 'changedTestValue');

    let result = JSON.parse(localStorage.getItem('taskList'));

    expect(result[0].content).toBe('changedTestValue');
  });

  it('should return the current task content when getTaskCurrentValue method is invoked', () => {
    localStorage.setItem('taskList', JSON.stringify([]));
    service.createNewTask('testValue');

    let result = service.getTaskCurrentValue(0);

    expect(result).toBe('testValue');
  });

  it('should delete a task with a given index when deleteSingleTask method is invoked', () => {
    localStorage.setItem('taskList', JSON.stringify([]));
    service.createNewTask('testValue');
    
    service.deleteSingleTask(0);

    let result = JSON.parse(localStorage.getItem('taskList'));

    expect(result.length).toBe(0);
  })
});
