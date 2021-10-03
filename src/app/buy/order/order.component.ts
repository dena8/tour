import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../core/model/order';
import { BuyService } from '../../core/service/buy.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit { 
  orders: IOrder[];

  constructor(private buyService: BuyService) { }

  ngOnInit(): void {  
    this.buyService.listOrders().subscribe((data) =>this.orders = data);   
  }

}
