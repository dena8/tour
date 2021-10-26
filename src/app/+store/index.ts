import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITourState,IGlobalState } from './model';
import * as tourSelector from './tour/selector';
import * as globalSelector from './global/selector';
import * as authSelector from './auth/selector';

export const getTourStore = createFeatureSelector('tour') as any;
export const tour =  {
    getAll: createSelector(getTourStore, tourSelector.getAll),  
    selectById : (id:string)=> createSelector(getTourStore,(state:ITourState)=>state.tour.find(t=>t.id==id)),
};

export const getGlobalStore = createFeatureSelector('global');
export const global = {
    getAllCategories:createSelector(getGlobalStore, globalSelector.getAllCategories),
    getAllOrders:createSelector(getGlobalStore, globalSelector.listOrders),
    selectOrderById:(id:string)=>createSelector(getGlobalStore,(state:IGlobalState)=>(state.order.find(o=>o.id==id))),
}

export const getAuthStore = createFeatureSelector('auth');
export const auth = {
    getToken: createSelector(getAuthStore, authSelector.getToken),
    getRole: createSelector(getAuthStore,authSelector.getRole),
} 