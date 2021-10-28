
import { Component, OnInit } from '@angular/core';
import { Observable, race } from 'rxjs';
import { } from '@ngrx/effects'
import { ITour as ITourBuy, } from '../../+store/model/buy';
import { Store } from '@ngrx/store';
import { cart } from '../../+store/buy/selector';
import { removeTour, clearCart } from '../../+store/buy/action';
import { createOrder } from '../../+store/global/action';
import { filter, map, mapTo, take } from 'rxjs/operators';
import { GlobalEffects } from 'src/app/+store/global/effects';
import { createOrderSuccess, createOrderFailed } from 'src/app/+store/global/action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  tourSum$: Observable<number>;
  username: string;
  cart$: Observable<ITourBuy[]>;


  constructor(private store: Store, private globalEffects: GlobalEffects) { }


  ngOnInit(): void {
    this.cart$ = this.store.select(cart.get);
    this.tourSum$ = this.store.select(cart.sum);
  }

  order() {
    this.cart$.pipe(take(1), map(toursList => toursList.map(t => t.name)))
      .subscribe(cartItems => {
        this.store.dispatch(createOrder({ cartItems }));
        race(
          this.globalEffects.createOrder$.pipe(filter(action => action.type === createOrderSuccess), mapTo(true)),
          this.globalEffects.createOrder$.pipe(filter(action => action.type === createOrderFailed), mapTo(false))
        ).pipe(take(1)).subscribe(result => {
          if (!result) { return; }
          this.store.dispatch(clearCart());
        })
      });

  }

  removeItem(name: string) {
    this.store.dispatch(removeTour({ name }));
    this.ngOnInit;
  }

}
