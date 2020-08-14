import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    let content = request.headers.get('content-type');
    content = 'plain text' + content;
    let authToken = "Auth token";
    const authReq = request.clone({
      setHeaders: {Authorization: authToken}
    });
    request.headers.set('content-type', content);

    return next.handle(authReq);
  }
}
