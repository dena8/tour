import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITourState } from './model';
import * as tourSelector from './tour/selector';
import * as categorySelector from './global/selector';
import * as authSelector from './auth/selector';

export const getTourStore = createFeatureSelector('tour') as any;
export const tour =  {
    getAll: createSelector(getTourStore, tourSelector.getAll),  
    selectById : (id:string)=> createSelector(getTourStore,(state:ITourState)=>state.tour.find(t=>t.id==id)),
};

export const getCategoryStore = createFeatureSelector('global');
export const global = {
    getAllCategories:createSelector(getCategoryStore,categorySelector.getAll),
}

export const getAuthStore = createFeatureSelector('auth');
export const auth = {
    getToken: createSelector(getAuthStore, authSelector.getToken),
    getRole: createSelector(getAuthStore,authSelector.getRole),
    isAuthenticate:createSelector(getAuthStore,authSelector.isAuthenticate),  
    hasGuideRole:createSelector(getAuthStore,authSelector.hasGuideRole), 
    hasUserRole: createSelector(getAuthStore,authSelector.hasUserRole),
    hasAdminRole: createSelector(getAuthStore,authSelector.hasAdminRole),
} 