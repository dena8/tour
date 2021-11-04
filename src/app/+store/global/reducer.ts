
import { Action, createReducer, on, State } from '@ngrx/store';
import {IGlobalState} from '../model/index';
import * as globalAction from './action';

const initialState:IGlobalState = {
    category:[],
    order:[]    
}

export const reducer = createReducer(
    initialState,
    on(globalAction.getAllCategoriesSuccess,((state,{categories})=>({...state,category:[...categories]}))),
    on(globalAction.createCategorySuccess,(state,{category})=>({...state,category:[...state.category,category]})),
    on(globalAction.createOrderSuccess,(state,{order})=>({...state,order:[...state.order,order]})),
    on(globalAction.listOrdersSuccess,(state,{orders})=>({...state,order:[...orders]}))
);

export const featureKey = 'global';