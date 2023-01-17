import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from '@core/master-page';
  
const routes: Routes = [      
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', redirectTo: '/student', pathMatch: 'full', },
      { path: 'student', data: { breadcrumb: 'Student' }, loadChildren: () => import('@student').then(m => m.StudentModule) },
      { path: 'department', data: { breadcrumb: 'Department' }, loadChildren: () => import('@department').then(m => m.DepartmentModule) },
      { path: 'school', data: { breadcrumb: 'School' }, loadChildren: () => import('@school').then(m => m.SchoolModule) },
      { path: '**', data: { breadcrumb: 'Page Not Found' }, loadChildren: () => import('@pagenotfound').then(m => m.PageNotFoundModule) }
    ]
  },
  { path: '**', data: { breadcrumb: 'Page Not Found' }, loadChildren: () => import('@pagenotfound').then(m => m.PageNotFoundModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})

  ]
})
export class AppRoutingModule { }
