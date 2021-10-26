import { IGlobalState } from "../model";

export const getAllCategories = (state:IGlobalState)=>state.category;
export const listOrders = (state:IGlobalState)=>state.order;
