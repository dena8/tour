import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [OrderComponent, CartComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'cart',component:CartComponent},
      {path:'order',component:OrderComponent},
      {path:'order-details/:id',component:OrderDetailsComponent}
    ])
  ]
})
export class BuyModule { }
