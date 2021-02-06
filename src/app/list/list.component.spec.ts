import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OperationsService } from '../services/operations.service';
import { singleTask } from '../single-task-model';

import { ListComponent } from './list.component';

class OperationsServiceStub {
  checkLocalStorage() {
    return true;
  }

  deleteSingleTask(elementIndex: number): string {
    return 'test';
  }

  getTaskCurrentValues(elementIndex: number): singleTask {
    return { title: 'testTitle', description: 'testValue' };
  }

}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        {
          provide: OperationsService, useClass: OperationsServiceStub
        }
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLocalStorage should be true when localStorage is available', fakeAsync(() => {
    expect(component.isLocalStorage).toBeTrue();
  }));

  // it('should change task values when editTask invoked', fakeAsync(() => {
  //   component.editFormElementTitle = 'newTitle';
  //   component.editFormElementDescription = 'newDescription';
  //   component.editFormElementId = 1;
  //   component.editTask(1);

  //   fixture.detectChanges();

  //   // let value = component.editForm.value;

  //   expect(value).toEqual({ newTitle: 'testTitle', newContent: 'testValue', id: 1 });
  // }));

});
