import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUserRegister} from '../model/user-register';
import {ILogin} from '../model/user-login';
import {Observable} from 'rxjs'

const DB_URL ='http://localhost:3000/api/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postRegister(user:IUserRegister): Observable<IUserRegister>{
      return this.http.post<IUserRegister>(DB_URL+'/register',user);
  }

  postLogin(user:ILogin):Observable<ILogin>{
       return this.http.post<ILogin>(DB_URL+'/login',user)
  }

  isAuthenticated():boolean{
    return localStorage.getItem('token')!==null;
  }

  isAdmin():boolean{
    return JSON.parse(localStorage.getItem('admin'));
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
