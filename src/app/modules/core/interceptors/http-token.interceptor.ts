import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headersConfig: any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const req = request.clone({ setHeaders: headersConfig });

    return next.handle(req);
  }
}
