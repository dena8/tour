import {Action} from '@ngrx/store';
import {ILogin} from '../../core/model/user-login';


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