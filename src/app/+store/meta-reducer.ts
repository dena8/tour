    import {
      ActionReducer,
      ActionReducerMap,     
      MetaReducer,INIT
    } from '@ngrx/store';
    import{ActionTypes} from './auth/action';
    import { localStorageSync } from 'ngrx-store-localstorage';
  
    import {IAuthState} from './model/index';  
    import {authReducer as reducer} from './auth/reducer';
    import {reducer as cartReducer} from './buy/reducer';
    import {ITour} from '../core/model/tour-create';
    import {ITourState} from './model/index'; 

    export interface IState{
          auth: IAuthState,
          cart: ITour[],                 
    }

    export const reducers:  ActionReducerMap<any> = {    
      cart:cartReducer,  
      auth:reducer 
    };

    const rootReducerKeys = ['auth','cart']

    export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
      return localStorageSync({keys: rootReducerKeys, rehydrate: true})(reducer);
    };

   export const tourReducerKeys = ['tour',];  

   export function tourSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: tourReducerKeys, rehydrate: true})(reducer);
  };
      
    export const metaReducers: MetaReducer<IState>[]=[localStorageSyncReducer];

    export const tourMetaReducer: MetaReducer<ITourState>[] = [tourSyncReducer];

  

   
