import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewerComponent } from './student-viewer.component';

describe('StudentViewerComponent', () => {
  let component: StudentViewerComponent;
  let fixture: ComponentFixture<StudentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
