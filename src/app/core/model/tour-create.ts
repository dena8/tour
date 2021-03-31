import {IBase} from './base';
import { ILogin } from './user-login';
export interface ITour<T=string> extends IBase { 
    name:string;   
    description:string;
    category:T;    
    participants:number;
    difficultyLevel:string;
    image:string;
    price:number;
    startDate: Date; 
    region:string; 
    creator:ILogin;
      
}