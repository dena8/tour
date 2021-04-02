import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http'
import { concat, Observable } from 'rxjs';
import {catchError, tap} from "rxjs/operators"
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationHandlerService implements HttpInterceptor {

  constructor(public toastr:ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(()=>(""))    
    ,catchError((err)=>{   
      let msg = err['error']['message'];   
        this.toastr.error(msg,'Error!');  
                throw err;   
    }));
  }
}
