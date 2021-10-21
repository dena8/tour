import { ICategory } from "../../core/model/category";
import { ITour,IOrder } from "../../core/model/index";

export interface ITourState {
    tour: ITour[];
}

export interface IGlobalState {
    category : ICategory[];
    order: IOrder[];
}

export interface IAuthState {
    id:string,
    roles:string,
    token:string,
    username:string
}