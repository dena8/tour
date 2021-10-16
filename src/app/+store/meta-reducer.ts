import {ActionReducer, MetaReducer,ActionReducerMap, INIT } from '@ngrx/store';
import{ActionTypes} from './auth/action';
import {IAuthState} from './model/index';
import {authReducer as reducer} from './auth/reducer';
import {cart} from './buy/reducer';


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {  
   
      return reducer(state, action);
    };
  }


export const reducers: ActionReducerMap<any> = {    
    cart,  
    auth:reducer 
  };

  const logoutMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        console.log('state', state);
        console.log('action', action);
      if (action?.type === ActionTypes.logout) {
        return reducer(undefined, { type: INIT });
      }
      return reducer(state, action);
    };
  };
    export const metaReducers: MetaReducer<IAuthState>[]=[logoutMeta]