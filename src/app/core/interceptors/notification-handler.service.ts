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
    return next.handle(req).pipe(tap((success)=>{
      
    // console.log("HttpResponse from success:",success);
 
      if(success instanceof HttpResponse){   
        console.log("HttpResponse from success:ONE",success);     
        if(success['body']['msg']){
          console.log("HttpResponse from success:TWO",success);
          this.toastr.success(success.body.msg);      
        
        }
      }
        
    }),catchError((err)=>{  
      console.log("HttpResponse from success:THREE");
      console.log(err);  
      const msg = err.error.msg ||err.error.message||'server not work'
     this.toastr.error(msg,'Error!');     
             throw err; 
  
    }))
  }
}
