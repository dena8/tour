import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import {ActionTypes, namespace} from './action';
import {UserService} from '../../core/service/user.service';
import { IAction,ILoggedAction} from '../model/index';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects{
        
    constructor(private action$:Actions, private userService:UserService,private toastr:ToastrService,private router:Router){}

    register$ = createEffect(()=> this.action$.pipe(
        ofType<IAction>(`${namespace} ${ActionTypes.register}`),
        switchMap((action)=>{         
             return this.userService.postRegister(action.user).pipe(              
                tap(()=>this.toastr.success("Successful register")),
                map((data) => (this.router.navigate(['home']), {type:`${namespace} `+ ActionTypes.registerSuccess,...data})),
                catchError((err)=>of({ type:`${namespace} `+ ActionTypes.registerFailed, ...err }))
             )
        })
    ));
 

    login$ = createEffect(()=> this.action$.pipe(
        ofType<ILoggedAction>(`${namespace} ${ActionTypes.login}`),
        switchMap((action)=> this.userService.login({...action}).pipe( 
            tap(user=>console.log("FROM EFFECT ",user)),          
            tap((user)=>localStorage.setItem('username',action.username)),            
            tap(()=>this.toastr.success("Successful login")),
            takeUntil(this.action$.pipe(ofType(ActionTypes.loginCancel))),           
            map((user)=>(this.router.navigate(['home']),{type:`${namespace} ${ActionTypes.loginSuccess}`, ...user})),
            catchError((err)=>of({ type:`${namespace} `+ ActionTypes.loginFailed, ...err }))
        ))

    ))
  
}
