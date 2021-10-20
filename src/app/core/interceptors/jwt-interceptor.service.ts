import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { auth } from '../../+store';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  token: string;
  
  constructor(private store: Store) {
    this.store.select(auth.getToken).subscribe((t) => (this.token = t));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return next.handle(cloneReq);
  }
}
