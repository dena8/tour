import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TourService } from '../../core/service/tour.service';
import { ActionTypes } from './action';
import { IAction } from '../model/index';
import {ActionTypes as globalActionTypes} from '../global/action'

@Injectable()
export class TourEffects {
  constructor(
    private actions$: Actions,
    private tourService: TourService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store
  ) {}

  createTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType<IAction>(ActionTypes.createTour),
      switchMap((action) =>
        this.tourService.createTour(action.tour).pipe(
          tap(() => this.toastr.success('Create tour successful!')),
          map(
            (tour) => (
              this.router.navigate(['tour/tour-card']),
              { type: ActionTypes.createTourSuccess, tour }
            )
          ),
          catchError((err) =>
            of({ type: ActionTypes.createTourFailed, ...err })
          )
        )
      )
    )
  );

  getAllTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getAllTours),
      switchMap(() => {
        return this.tourService.getPopulatedTours().pipe(
          takeUntil(this.actions$.pipe(ofType(globalActionTypes.getAllCategories))),
          map((tours) => ({ type: ActionTypes.getAllTourSuccess, tours })),
          catchError((err) =>
            of({ type: ActionTypes.getAllTourFailed, ...err })
          )
        );
      })
    )
  );

  deleteTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType<IAction>(ActionTypes.deleteTour),
      switchMap((action) =>
        this.tourService.deleteTour(action.id).pipe(
          tap(() => this.toastr.success('Successful delete tour!')),
          map(
            (id) => (
              this.router.navigate(['tour/tour-card']),
              { type: ActionTypes.deleteTourSuccess, id }
            )
          ),
          catchError((err) =>
            of({ type: ActionTypes.deleteTourFailed, ...err })
          )
        )
      )
    )
  );
}
