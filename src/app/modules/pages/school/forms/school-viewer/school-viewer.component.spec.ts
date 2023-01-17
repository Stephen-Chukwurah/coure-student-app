import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewerComponent } from './school-viewer.component';

describe('SchoolViewerComponent', () => {
  let component: SchoolViewerComponent;
  let fixture: ComponentFixture<SchoolViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
