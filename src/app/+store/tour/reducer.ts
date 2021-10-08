import { Action, createReducer, on } from '@ngrx/store';
import * as tourAction from './action';
import {ITourState} from '../model/index'

 const initialState :ITourState = {
     tour: []
 };


const reducer = createReducer(
    initialState,
    on(tourAction.getAllTourSuccess,(state,{tours})=>({...state, tour: [...tours]})),
    on(tourAction.createTourSuccess,(state,{tour})=>({...state, tour: [...state.tour, tour]})),
    on(tourAction.deleteTourSuccess,(state, { id })=>{ 
        const tours = state.tour.filter(t=>t.id!==id);        
    return { ...state, tour:[...tours]};
    })  
);

export const featureKey = 'tour';

export function tourReducer(state:ITourState , action: Action): ITourState{
    return reducer(state, action);
}

