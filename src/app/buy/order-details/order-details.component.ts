import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/core/model/order';
import { BuyService } from 'src/app/core/service/buy.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:IOrder;
  id:string;
  tourSum: number;

  constructor(private buyService:BuyService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id');
    console.log(this.id);

    this.buyService.getOrder(this.id).subscribe(data=>{
      console.log("DATA FROM ORDER",data);
      this.order=data;
      this.tourSum = this.order.buyingProducts.filter(u=>u.price).reduce((acc, { price }) => acc + price, 0);    
    })
  }

}
