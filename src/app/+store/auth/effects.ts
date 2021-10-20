import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import {ActionTypes} from './action';
import {UserService} from '../../core/service/user.service';
import { IAction,ILoggedAction} from '../model/index';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects{
        
    constructor(private action$:Actions, private userService:UserService,private toastr:ToastrService,private router:Router){}

    register$ = createEffect(()=> this.action$.pipe(
        ofType<IAction>(ActionTypes.register),
        switchMap((action)=>{         
             return this.userService.postRegister(action.user).pipe(              
                tap(()=>this.toastr.success("Successful register")),
                map(() => (this.router.navigate(['login']), {type:ActionTypes.registerSuccess})),
                catchError((err)=>of({ type: ActionTypes.registerFailed, ...err }))
             )
        })
    ));
 

    login$ = createEffect(()=> this.action$.pipe(
        ofType<ILoggedAction>(ActionTypes.login),
        switchMap((action)=> this.userService.login({...action}).pipe( 
            tap((data)=>localStorage.setItem('username', data.username)),            
            tap(()=>this.toastr.success("Successful login")),
            takeUntil(this.action$.pipe(ofType(ActionTypes.loginCancel))),           
            map((data)=>(this.router.navigate(['home']),{type:ActionTypes.loginSuccess,...data})),
            catchError((err)=>of({ type: ActionTypes.loginFailed, ...err }))
        ))

    ))
}
