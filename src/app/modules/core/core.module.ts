import { NgModule } from '@angular/core';
import { HeaderComponent } from './master-page/header/header.component';
import { SidebarComponent } from './master-page/sidebar/sidebar.component';
import { SharedModule } from '@shared';
import { MasterPageComponent } from './master-page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor, HttpTokenInterceptor } from './interceptors';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterPageComponent
  ],
  imports: [
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

  ],
})
export class CoreModule { }
