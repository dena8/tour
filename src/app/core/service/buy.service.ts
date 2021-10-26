import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import { IOrder } from '../model/order';
import { ILog } from '../model/log';

const dbUrl = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private httpClient:HttpClient, private toaster:ToastrService) { }

  makeOrder(cartItems:string[]){  
     return this.httpClient.post<IOrder>(dbUrl+'/cart/order',{cartItems});
  }

  listOrders(){
    return this.httpClient.get<IOrder[]>(dbUrl+'/orders/all');
  }

  getOrder(id:string):Observable<IOrder>{
     return this.httpClient.get<IOrder>(dbUrl+'/orders/'+id)
  }


  getLogs():Observable<ILog[]>{
   return this.httpClient.get<ILog[]>(dbUrl+'/logs/all');
  }


}
