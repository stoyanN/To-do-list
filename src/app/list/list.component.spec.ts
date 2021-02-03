import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from '../services/operations.service';

import { ListComponent } from './list.component';

class OperationsServiceStub {
  checkLocalStorage() {
    return true;
  }

  deleteSingleTask(elementIndex: number): string {
    return 'test';
  }

  getTaskCurrentValue(elementIndex: number): string {
    return 'testValue';
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
      imports: [ReactiveFormsModule]
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

  it('should change task values when editTask invoked', fakeAsync(() => {
    component.editTask(1);

    fixture.detectChanges();
    let value = component.editForm.value;

    expect(value).toEqual({ newContent: 'testValue', id: 1 });
  }));

});
