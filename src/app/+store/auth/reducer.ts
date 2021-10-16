import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from './action';
import {IAuthState} from '../model/index';


const initialState:IAuthState ={
    id:null,
    roles:null,
    token:null,
    username:null
}

export const authReducer = createReducer(
    initialState,
    on(authAction.loginSuccess,(state,data)=>({...state,...data})),
    on(authAction.loginCancel,(state)=>({...state})),  
);


export const featureKey = 'auth';






