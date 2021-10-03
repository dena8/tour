
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BuyService } from 'src/app/core/service/buy.service';

import {ITour as ITourBuy,} from '../../+store/model/buy';
import { Store } from '@ngrx/store';
import {cart} from '../../+store/buy/selector';
import {removeTour} from '../../+store/buy/action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  tourSum$: Observable<number>;
  username:string;
  cart$:Observable<ITourBuy[]>;


  constructor(private buyService:BuyService,private store:Store,  private router: Router){}
   

  ngOnInit(): void {
    this.cart$ = this.store.select(cart.get); 
    this.tourSum$ = this.store.select(cart.sum);     
  }

  order() {  
    this.buyService.makeOrder({username:this.username}).subscribe((data)=>this.router.navigate(['home']));   
  }

  removeItem(name: string) {
    this.store.dispatch(removeTour({name}));
    this.ngOnInit;    
  }
 
}
