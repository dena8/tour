import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {CategoryService} from '../../core/service/category.service';
import {ActionTypes} from './action'


@Injectable()
export class GlobalEffects{

    constructor(private actions$:Actions, private store: Store, private categoryService:CategoryService){}   

    getAllCategories$ = createEffect(()=>this.actions$.pipe(
        ofType(ActionTypes.getAllCategories),
        switchMap(()=>{
            return this.categoryService.getAllCategories().pipe(
                map(categories => ({type:ActionTypes.getAllCategoriesSuccess, categories})),
                catchError(err=>of({type:ActionTypes.getAllCategoriesFailed,...err}))
            )
        })
    ))

}