import { Action, createReducer, on, State } from '@ngrx/store';
import {IGlobalState} from '../model/index';
import * as categoryAction from './action';

const initialState:IGlobalState = {
    category:[]
}

const reducer = createReducer(
    initialState,
    on(categoryAction.getAllCategoriesSuccess,((state,{categories})=>({...state,category:[...categories]})))
)

export function globalReducer(state:IGlobalState , action: Action): IGlobalState{
    return reducer(state, action);
}