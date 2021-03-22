import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUserRegister} from '../../core/model/user-register';
import {ILogin} from '../../core/model/user-login';
import {IUser} from '../model/user';
import {ITour} from '../model/tour-create';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';


const DB_URL = 'http://localhost:5000/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, public toastr:ToastrService) { }

  postRegister(user:IUserRegister): Observable<IUserRegister>{
      return this.http.post<IUserRegister>(DB_URL+'/register',user)
      .pipe(
        tap((data)=>this.toastr.success("Successful register!"))
      );   
  }

  postLogin(user:string):Observable<HttpResponse<ILogin>>{
       return this.http.post<any>(DB_URL+'/login',user, {observe:'response'} )
       .pipe(
         tap((data)=>this.toastr.success("Successful login!"))        
       );
  }

  isAuthenticated():boolean{ 
    return localStorage.getItem('token')!==null;
  }
  
  hasAdminRole():boolean{   
    return this.isAuthenticated() && localStorage.getItem('roles').includes('ADMIN_ROLE');
  }

  hasUserRole():boolean{    
    return this.isAuthenticated() && localStorage.getItem('roles').includes('USER_ROLE');
  }

  hasGuideRole():boolean{ 
    return this.isAuthenticated() && localStorage.getItem('roles').includes('GUIDE_ROLE');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username'); 
    localStorage.removeItem('roles');    
    this.toastr.success('Successful logout');        
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeItemFromCart(userId:string,itemId:string):Observable<string>{
    return this.http.put<string>(DB_URL+'/api/cart/clear',{userId,itemId});    
  }

  getCurrentUser():Observable<IUser<ITour>>{
    return this.http.get<IUser<ITour>>(DB_URL+'/get/current');
 }

}
