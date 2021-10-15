import { ICategory } from "../../core/model/category";
import { ITour } from "../../core/model/tour-create";

export interface ITourState {
    tour: ITour[];
}

export interface IGlobalState {
    category : ICategory[];
}

export interface IAuthState {
    id:string,
    roles:string,
    token:string,
    username:string
}