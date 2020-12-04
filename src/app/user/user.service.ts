import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {IUserRegister} from '../model/user-register';
import {ILogin} from '../model/user-login';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postRegister(user:IUserRegister): Observable<IUserRegister>{
      return this.http.post<IUserRegister>('http://localhost:3000/register',user);
  }

  postLogin(user:ILogin):Observable<ILogin>{
       return this.http.post<ILogin>('http://localhost:3000/login',user)
  }

  isAuthenticated():boolean{
    return localStorage.getItem('token')!==null;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');     
     localStorage.removeItem('userId');  
  }


}
