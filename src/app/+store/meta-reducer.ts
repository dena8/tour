import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { IAuthState } from './model/index';
import { authReducer as reducer } from './auth/reducer';
import { reducer as cartReducer } from './buy/reducer';
import { ITour } from '../core/model/tour-create';
import { ITourState, IGlobalState } from './model/index';


export interface IState {
  auth: IAuthState;
  cart: ITour[];
}

export const reducers: ActionReducerMap<any> = {
  cart: cartReducer,
  auth: reducer,
};

const rootReducerKeys = ['auth', 'cart'];

export function rootSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: rootReducerKeys, rehydrate: true })(reducer);
}

export const tourReducerKeys = ['tour'];
export const globalReducerKeys = ['order','category'];

export function tourSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: tourReducerKeys, rehydrate: true })(reducer);
}

export function globalSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: globalReducerKeys, rehydrate:true, removeOnUndefined:true })( reducer);
}

export const metaReducers: MetaReducer<IState>[] = [rootSyncReducer];

export const tourMetaReducer: MetaReducer<ITourState>[] = [tourSyncReducer];

export const globalMetaReducer: MetaReducer<IGlobalState>[] = [globalSyncReducer];



