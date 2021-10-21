//addTourToCart
import { createAction, props } from '@ngrx/store';
import {ITour} from '../model/buy';

 const namespace= '[CART]'

export const ActionTypes ={
    addTourToCart:'[Add To Cart] ClickJoin',   
    getAllTours:'[Get All]',
    removeTour:'[Remove Tour]',
    clearCart:'[Clear Cart]',
    
}

export const addTourToCart = createAction(`${namespace} ${ActionTypes.addTourToCart}`,props<{ tour: ITour}>());
export const getAllTours = createAction(`${namespace} ${ActionTypes.getAllTours}`);
export const removeTour = createAction(`${namespace} ${ActionTypes.removeTour}`,props<{name:string}>());

export const clearCart = createAction(`${namespace} ${ActionTypes.clearCart}`);






