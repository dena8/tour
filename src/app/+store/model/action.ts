import {Action} from '@ngrx/store';

export interface IAction extends Action{
     tour:any,
     id:any,
     user:any,
     logUser:any,
}

export interface ILoggedAction extends Action{
     username:string,
     password:string
}

