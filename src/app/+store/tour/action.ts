import { createAction, props } from '@ngrx/store';
import {ITour} from '../../core/model/tour-create';

export const ActionTypes = {
    createTour: '[Create Tour]',
    createTourSuccess: '[Create Tour] Success',
    createTourFailed: '[Create Tour] Failed',
    getAllTours:'[Get All]',
    getAllTourSuccess: '[Get All Tour] Success',
    getAllTourFailed: '[Get All Tour] Failed',   
    deleteTour: '[Delete Tour]',
    deleteTourSuccess: '[Delete Tour] Success',
    deleteTourFailed: '[Delete Tour] Failed',
    updateTour:'[Update ]',
    updateTourSuccess:'[Update Tour] Success',
    updateTourFailed:'[Update Tour] Failed',
    cancelRetrieve: '[Cancel Retrieve]'

}

export const createTour = createAction(ActionTypes.createTour,props <{tour:any}>());
export const createTourSuccess = createAction(ActionTypes.createTourSuccess,props <{tour:any}>());
export const createTourFailed = createAction(ActionTypes.createTourFailed,props <{err:any}>());


export const getAllTours = createAction(ActionTypes.getAllTours);
export const getAllTourSuccess = createAction(ActionTypes.getAllTourSuccess,props<{tours:ITour[]}>());
export const getAllTourFailed = createAction(ActionTypes.getAllTourFailed,props<{err:any}>());

export const deleteTour = createAction(ActionTypes.deleteTour,props<{id:string}>());
export const deleteTourSuccess = createAction(ActionTypes.deleteTourSuccess,props<{id:string}>());
export const deleteTourFailed = createAction(ActionTypes.deleteTourFailed,props<{err:any}>()); 

export const updateTour = createAction(ActionTypes.updateTour,props <{id:string,tour:any}>());
export const updateTourSuccess = createAction(ActionTypes.updateTourSuccess,props <{tour:any}>());
export const updateTourFailed = createAction(ActionTypes.updateTourFailed,props<{err:any}>());

export const cancelRetrieve = createAction(ActionTypes.cancelRetrieve);


