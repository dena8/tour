import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from './action';
import {IAuthState} from '../model/index';

const initialState:IAuthState ={
    id:null,
    roles:null,
    token:null,
    username:null
}

export const reducer = createReducer(
    initialState,
    on(authAction.loginSuccess,(state,data)=>({...state,...data})),
    on(authAction.loginCancel,(state)=>({...state})),
    on(authAction.logout,(state)=>({...initialState}))
);


export const featureKey = 'auth';

export function authReducer(state:IAuthState, action:Action):IAuthState{
      return reducer(state,action);
}




