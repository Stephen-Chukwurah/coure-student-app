import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentEditorComponent } from './forms/department-editor/department-editor.component';
import { DepartmentViewerComponent } from './forms/department-viewer/department-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { DepartmentEffects } from './+state/department.effect';
import { DepartmentFacade } from './+state/department.facade';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    data: { breadcrumb: 'Home' },
  },
];

@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentEditorComponent,
    DepartmentViewerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes), 
    EffectsModule.forFeature([DepartmentEffects])
  ],
})
export class DepartmentModule { }
