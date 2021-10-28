import { IAuthState } from '../model/index';

export const getToken = (state: IAuthState) => (state.token);
export const getRole = (state:IAuthState) =>(state.roles);
export const isAuthenticate = (state: IAuthState) => !!state.id;
export const hasGuideRole = (state:IAuthState) =>(state.roles=='GUIDE_ROLE');
export const hasUserRole = (state:IAuthState) =>(state.roles=='USER_ROLE');
export const hasAdminRole = (state:IAuthState) =>(state.roles=='ADMIN_ROLE');