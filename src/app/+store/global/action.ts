import { createAction, props } from '@ngrx/store';
import {ICategory} from '../../core/model/category';

export const ActionTypes ={
    getAllCategories:'[Get All Categories]',
    getAllCategoriesSuccess:'[Get All Categories] Success',
    getAllCategoriesFailed: '[Get All Categories] Failed'
}

export const getAllCategories = createAction(ActionTypes.getAllCategories);
export const getAllCategoriesSuccess = createAction(ActionTypes.getAllCategoriesSuccess,props<{categories:ICategory[]}>())
export const getAllCategoriesFailed = createAction(ActionTypes.getAllCategoriesFailed,props<{err:any}>());
