import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminGuard } from '../core/gards/admin.guard';
import {CustomerGuard} from '../core/gards/customer.guard';
import { StatisticComponent } from './statistic/statistic.component';



@NgModule({
  declarations: [OrderComponent, CartComponent, OrderDetailsComponent, StatisticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'cart',component:CartComponent, canActivate:[CustomerGuard]},
      {path:'order',component:OrderComponent, canActivate:[AdminGuard]},
      {path:'order-details/:id',component:OrderDetailsComponent,canActivate:[AdminGuard]},
      {path:'statistic', component:StatisticComponent,canActivate:[AdminGuard]}
    ])
  ]
})
export class BuyModule { }
