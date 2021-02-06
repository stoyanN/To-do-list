import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;
  const enum Test {
    title = 'testTitle',
    value = 'testValue',
    localStorageProperty = 'taskList'
  }


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
    localStorage.setItem(Test.localStorageProperty, JSON.stringify([]));

    service.createNewTask(Test.title, Test.value);

    let result = JSON.parse(localStorage.getItem(Test.localStorageProperty));

    expect(result.length).toBe(1);
  });

  it('should change task value when changeTaskValue method is invoked', () => {
    localStorage.setItem(Test.localStorageProperty, JSON.stringify([]));
    service.createNewTask(Test.title, Test.value);
    service.changeTaskValue(0, Test.title, 'changedTestValue');

    let result = JSON.parse(localStorage.getItem(Test.localStorageProperty));

    expect(result[0].description).toBe('changedTestValue');
  });

  it('should return the current task content when getTaskCurrentValue method is invoked', () => {
    localStorage.setItem(Test.localStorageProperty, JSON.stringify([]));
    service.createNewTask(Test.title, Test.value);

    let result = service.getTaskCurrentValues(0);

    expect(result).toEqual({ title: Test.title, description: Test.value });
  });

  it('should delete a task with a given index when deleteSingleTask method is invoked', () => {
    localStorage.setItem(Test.localStorageProperty, JSON.stringify([]));
    service.createNewTask(Test.title, Test.value);

    service.deleteSingleTask(0);

    let result = JSON.parse(localStorage.getItem(Test.localStorageProperty));

    expect(result.length).toBe(0);
  })
});
