import { Action, createReducer, on } from '@ngrx/store';
import * as item from './action';
import {ITour} from '../model/index';

const  initialState: ITour[] =[]

const cart = createReducer(
    initialState, 
    on(item.addTourToCart,(state,{tour})=>{     
      return[...state,tour]
      }),
    on(item.getAllTours,(state)=>([...state])),
    on(item.removeTour,(state,{name})=>{     
     state= state.filter(t=>t.name!=name);
      return[...state]
    })
);

export const featureKey = 'cart';

export function reducer(state:ITour[] , action: Action): ITour[]{
    return cart(state, action);
}