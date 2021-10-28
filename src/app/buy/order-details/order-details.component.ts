import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/core/model/order';
import { BuyService } from 'src/app/core/service/buy.service';
import {Store} from '@ngrx/store';
import {global} from '../../+store/index'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {listOrders} from '../../+store/global/action';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:IOrder;
  id:string;
  tourSum$:Observable<number>;
  order$: Observable<IOrder> ;

  constructor(private buyService:BuyService, private rout: ActivatedRoute, private store:Store) {
    this.store.dispatch(listOrders());
   }

  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id'); 
    this.order$ = this.store.select(global.selectOrderById(this.id));
    this.tourSum$ = this.order$.pipe(map(o=>o.buyingProducts.reduce((acc,{price})=> acc + price,0)));  
  }

}
