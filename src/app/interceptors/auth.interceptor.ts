import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_TOKEN_KEY } from '../../constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);

    if (authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
    }

    return next.handle(req);
  }
}
