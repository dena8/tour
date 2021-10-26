import { createAction, props } from '@ngrx/store';
import { IOrder } from 'src/app/core/model';
import {ICategory} from '../../core/model/category';
import { HttpErrorResponse } from '@angular/common/http';

const namespace = '[Global]'

export const ActionTypes ={
    getAllCategories:'[Get All Categories]',
    getAllCategoriesSuccess:'[Get All Categories] Success',
    getAllCategoriesFailed: '[Get All Categories] Failed',

    createOrder:'[Create Order]',
    createOrderSuccess:'[Create Order Success]',
    createOrderFailed: '[Create Order Failed]',

    listOrders:'[List Orders]',
    listOrdersSuccess:'[List Orders] Success',
    listOrdersFailed:'[List Orders] Failed',    
}

export const getAllCategories = createAction(`${namespace} ${ActionTypes.getAllCategories}`);
export const getAllCategoriesSuccess = createAction(`${namespace} ${ActionTypes.getAllCategoriesSuccess}`,props<{categories:ICategory[]}>());
export const getAllCategoriesFailed = createAction(`${namespace} ${ActionTypes.getAllCategoriesFailed}`,props<{err:HttpErrorResponse}>());

export const createOrder = createAction(`${namespace} ${ActionTypes.createOrder}`,props<{cartItems:string[]}>());
export const createOrderSuccess = createAction(`${namespace} ${ActionTypes.createOrderSuccess}`,props<{order:IOrder}>());
export const createOrderFailed = createAction(`${namespace} ${ActionTypes.createOrderFailed}`,props<{err:HttpErrorResponse}>());

export const listOrders = createAction (`${namespace} ${ActionTypes.listOrders}`);
export const listOrdersSuccess = createAction(`${namespace} ${ActionTypes.listOrdersSuccess}`, props<{orders:IOrder[]}>());
export const listOrdersFailed = createAction(`${namespace} ${ActionTypes.listOrdersFailed}`,props<{err:HttpErrorResponse}>());

