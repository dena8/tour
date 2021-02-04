import {IBase} from './base';
export interface ITour<T=string> extends IBase { 
    id:string;  
    description:string;
    category:T;
    startAndEnd:string;
    participants:number;
    difficultyLevel:string;
    image:string;
    price:number 
   
      
}