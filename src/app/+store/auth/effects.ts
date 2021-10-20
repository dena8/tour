import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import {
    login, loginSuccess, loginFailed, loginCancel,
    register, registerSuccess, registerFailed,
} from './action';
import { UserService } from '../../core/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(
        private action$: Actions,
        private userService: UserService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    register$ = createEffect(() => this.action$.pipe(
        ofType(register),
        switchMap(payload => {
            return this.userService.postRegister(payload.user).pipe(
                tap(() => this.toastr.success("Successful register")),
                map((data) => (this.router.navigate(['home']), { type: registerSuccess, ...data })),
                catchError((err) => of({ type: registerFailed, ...err }))
            )
        })
    ));

    login$ = createEffect(() => this.action$.pipe(
        ofType(login),
        switchMap(({ username, password }) => this.userService.login({ username, password }).pipe(
            takeUntil(this.action$.pipe(ofType(loginCancel))),
            map(user => (this.router.navigate(['home']), { type: loginSuccess, ...user })),
            catchError((err) => of({ type: loginFailed, ...err }))
        ))

    ))

}
