import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEditorComponent } from './school-editor.component';

describe('SchoolEditorComponent', () => {
  let component: SchoolEditorComponent;
  let fixture: ComponentFixture<SchoolEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
