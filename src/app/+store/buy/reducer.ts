import { Action, createReducer, on } from '@ngrx/store';
import * as item from './action';
import {ITour} from '../model/index';

const  initialState: ITour[] =[]

export const reducer = createReducer(
    initialState, 
    on(item.addTourToCart,(state,{tour})=>{     
      return[...state,tour]
      }),
    on(item.getAllTours,(state)=>([...state])),
    on(item.removeTour,(state,{name})=>{     
     state= state.filter(t=>t.name!=name);
      return[...state]
    }),
    on(item.clearCart,(state)=>[]),
);

export const featureKey = 'cart';

export function cartReducer(state:ITour[] , action: Action): ITour[]{
  return reducer(state, action);
}

