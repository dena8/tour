import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/operators';
import { IUser } from '../model/user';
import { ITour } from '../model/tour-create';
import { IOrder } from '../model/order';

const dbUrl = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private httpClient:HttpClient, private toaster:ToastrService) { }

 
  addTourToCart(id:string):Observable<any>{
  return this.httpClient.get(dbUrl+'/cart/add/'+id)
  .pipe(tap((data)=> this.toaster.success("Added tour to cart")))
  }

  checkIfAdded(id:string):Observable<Boolean>{
    return this.httpClient.get<boolean>(dbUrl+'/cart/contain/'+ id);
  }

   // RETURN TYPE NOT ANY
  makeOrder(username:Object):Observable<String>{
    return this.httpClient.post<String>(dbUrl+'/cart/order',username).pipe(
      tap(()=>this.toaster.success("Successful order"))
    )
  }

  listOrders():Observable<IOrder[]>{
    return this.httpClient.get<IOrder[]>(dbUrl+'/orders/all');
  }

  getOrder(id:string):Observable<IOrder>{
     return this.httpClient.get<IOrder>(dbUrl+'/orders/'+id)
  }

}
