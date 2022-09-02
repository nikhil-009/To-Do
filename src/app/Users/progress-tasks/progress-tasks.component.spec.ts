import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTasksComponent } from './progress-tasks.component';

describe('ProgressTasksComponent', () => {
  let component: ProgressTasksComponent;
  let fixture: ComponentFixture<ProgressTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
