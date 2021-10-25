import { IGlobalState } from "../model";

export const getAllCategories = (state:IGlobalState)=>state.category;
export const listOrders = (state:IGlobalState)=>state.order;
export const getOrderById = (id:string)=>{
    return (state:IGlobalState)=>(state.order.find(o=>o.id==id));
}