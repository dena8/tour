import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IUserRegister,IAuthUser,IUser, ITour } from '../../core/model';

export const namespace = '[AUTH]';

export const ActionTypes = {
  register: '[Register]',
  registerSuccess: '[Register] Success',
  registerFailed: '[Register] Failed',
  login: '[Login]',
  loginSuccess: '[Login] Success',
  loginFailed: '[Login] Failed',
  loginCancel: '[Login] Canceled',
  logout: '[Logout]',
};

export const register = createAction(`${namespace} ${ActionTypes.register}`, props<{ user: IUserRegister }>());
export const registerSuccess = createAction(`${namespace} ${ActionTypes.registerSuccess}`, props<{ user:IAuthUser}>());
export const registerFailed = createAction(`${namespace} ${ActionTypes.registerFailed}`, props<{ error: HttpErrorResponse }>());

export const login = createAction(`${namespace} ${ActionTypes.login}`, props<{ username: string; password: string }>());
export const loginSuccess = createAction(`${namespace} ${ActionTypes.loginSuccess}`, props<{ user: IAuthUser }>());
export const loginFailed = createAction(`${namespace} ${ActionTypes.loginFailed}`, props<{ error: HttpErrorResponse }>());


export const loginCancel = createAction(`${namespace} ${ActionTypes.loginCancel}`);

export const logout = createAction(`${namespace} ${ActionTypes.logout}`);
