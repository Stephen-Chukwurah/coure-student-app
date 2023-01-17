import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentViewerComponent } from './department-viewer.component';

describe('DepartmentViewerComponent', () => {
  let component: DepartmentViewerComponent;
  let fixture: ComponentFixture<DepartmentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
