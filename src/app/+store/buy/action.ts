//addTourToCart
import { createAction, props } from '@ngrx/store';
import {ITour} from '../model/buy';

export const ActionTypes ={
    addTourToCart:'[Add To Cart] ClickJoin',
    getAllTours:'[Get All]',
    removeTour:'[Remove Tour]'
}

export const addTourToCart = createAction(ActionTypes.addTourToCart,props<{ tour: ITour}>());
export const getAllTours = createAction(ActionTypes.getAllTours);
export const removeTour = createAction(ActionTypes.removeTour,props<{name:string}>());






