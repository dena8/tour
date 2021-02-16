import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {catchError, tap} from "rxjs/operators"
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationHandlerService implements HttpInterceptor {

  constructor(public toastr:ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((data)=>(console.log("Toastr work")))    
    ,catchError((err)=>{  
      //console.log("HttpResponse from success:THREE");
      console.log("ERROR FROM NOTIF-INTERCEPT:",err);  
      const msg = err['error'];
      console.log("MSG",msg);
     this.toastr.error(msg,'Error!');  
                throw err;   
    }));
  }
}
