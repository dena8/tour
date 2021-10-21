import { IGlobalState } from "../model";

export const getAll = (state:IGlobalState)=>state.category;
export const listOrders = (state:IGlobalState)=>state.order;