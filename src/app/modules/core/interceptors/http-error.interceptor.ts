import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private router: Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {

        if (err.status === 400) {
          this.toastr.error(`Sorry something went wrong`,`Form Error`)
        }

        if (err.status === 500) {
          this.toastr.error(`Sorry something went wrong`,`Server Error`)
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
