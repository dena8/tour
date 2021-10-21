import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../core/model/order';
import { Store } from '@ngrx/store';
import {listOrders} from '../../+store/global/action';
import {global} from '../../+store'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit { 
  orders$:Observable<IOrder[]>;

  constructor(private store:Store) {
    this.store.dispatch(listOrders());
   }

  ngOnInit(): void {   
    this.orders$= this.store.select(global.getAllOrders);   
  }

}
