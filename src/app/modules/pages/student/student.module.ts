import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { StudentComponent } from './student.component';
import { StudentEditorComponent } from './forms/student-editor/student-editor.component';
import { StudentViewerComponent } from './forms/student-viewer/student-viewer.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './+state/student.effect';
import { StudentFacade } from './+state/student.facade';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    data: { breadcrumb: 'Home' },
  },
];

@NgModule({
  declarations: [
    StudentComponent,
    StudentEditorComponent,
    StudentViewerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes), 
    EffectsModule.forFeature([StudentEffects])
  ],
  providers: [StudentFacade]
})
export class StudentModule { }
