import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolEditorComponent } from './forms/school-editor/school-editor.component';
import { SchoolViewerComponent } from './forms/school-viewer/school-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { SchoolEffects } from './+state/school.effect';
import { SchoolFacade } from './+state/school.facade';

const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    data: { breadcrumb: 'Home' },
  },
];

@NgModule({
  declarations: [
    SchoolComponent,
    SchoolEditorComponent,
    SchoolViewerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes), 
    EffectsModule.forFeature([SchoolEffects])
  ],
  providers: [SchoolFacade]
})
export class SchoolModule { }
