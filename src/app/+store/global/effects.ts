import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CategoryService } from '../../core/service/category.service';
import * as service from '../../core/service/index';
import * as action from './action';

@Injectable()
export class GlobalEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private categoryService: CategoryService,
    private buyService: service.BuyService
  ) {}

  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.getAllCategories),
      switchMap(() => {
        return this.categoryService.getAllCategories().pipe(
          map((categories) => action.getAllCategoriesSuccess({ categories })),
          catchError((err) =>
            of({ type: action.getAllCategoriesFailed, ...err })
          )
        );
      })
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.createOrder),
      switchMap((payload) => {
        return this.buyService.makeOrder(payload.username).pipe(
          map((order) => action.createOrderSuccess({ order })),
          catchError((err) => of({ type: action.createOrderFailed, ...err }))
        );
      })
    )
  );

  listOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.listOrders),
      switchMap(() =>
        this.buyService.listOrders().pipe(
          map((orders) => {
            return action.listOrdersSuccess({ orders });
          }),
          catchError((err) => of({ type: action.listOrdersFailed, ...err }))
        )
      )
    )
  );
}
