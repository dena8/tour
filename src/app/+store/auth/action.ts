import { createAction, props } from '@ngrx/store';
import { IUserRegister } from '../../core/model/user-register';

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

export const register = createAction(
  ActionTypes.register,
  props<{ user: IUserRegister }>()
);
export const registerSuccess = createAction(ActionTypes.registerSuccess);
export const registerFailed = createAction(
  ActionTypes.registerFailed,
  props<{ err: any }>()
);

export const login = createAction(
  ActionTypes.login,
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  ActionTypes.loginSuccess,
  props<{ id: string; roles: string; token: string; username: string }>()
);
export const loginFailed = createAction(
  ActionTypes.loginFailed,
  props<{ err: any }>()
);
export const loginCancel = createAction(ActionTypes.loginCancel);

export const logout = createAction(ActionTypes.logout);
