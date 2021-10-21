import{IAuthState} from '../model/index';

export const getToken = (state:IAuthState)=>(state.token);
export const getRole = (state:IAuthState) =>(state.roles);
