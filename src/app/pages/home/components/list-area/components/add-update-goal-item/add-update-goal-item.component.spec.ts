import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateGoalItemComponent } from './add-update-goal-item.component';

describe('AddUpdateGoalItemComponent', () => {
  let component: AddUpdateGoalItemComponent;
  let fixture: ComponentFixture<AddUpdateGoalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateGoalItemComponent]
    });
    fixture = TestBed.createComponent(AddUpdateGoalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
