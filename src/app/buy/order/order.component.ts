import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IOrder } from '../../core/model/order';
import { BuyService } from '../../core/service/buy.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  //orders$: Observable<IOrder[]>;
  orders: IOrder[];
 

  constructor(private buyService: BuyService) { }

  ngOnInit(): void {
  
    this.buyService.listOrders().subscribe((data) => {
      console.log(data);
      this.orders = data;
    })
  }

}
