
import { Action, createReducer, on, State } from '@ngrx/store';
import {IGlobalState} from '../model/index';
import * as globalAction from './action';

const initialState:IGlobalState = {
    category:[],
    order:[]    
}

const reducer = createReducer(
    initialState,
    on(globalAction.getAllCategoriesSuccess,((state,{categories})=>({...state,category:[...categories]}))),
    on(globalAction.createOrderSuccess,(state,{order})=>({...state,order:[...state.order,order]})),
    on(globalAction.listOrdersSuccess,(state,{orders})=>({...state,order:[...state.order,...orders]}))
)

export function globalReducer(state:IGlobalState , action: Action): IGlobalState{
    return reducer(state, action);
}