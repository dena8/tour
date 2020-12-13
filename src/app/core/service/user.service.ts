import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUserRegister} from '../../core/model/user-register';
import {ILogin} from '../../core/model/user-login';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

const DB_URL ='http://localhost:3000/api/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, public toastr:ToastrService) { }

  postRegister(user:IUserRegister): Observable<IUserRegister>{
      return this.http.post<IUserRegister>(DB_URL+'/register',user)
    //   .pipe(tap((data)=>{
    //     this.toastr.success('Successful register');
    // }));
  }

  postLogin(user:ILogin):Observable<ILogin>{
       return this.http.post<ILogin>(DB_URL+'/login',user)
      //  .pipe(tap((data)=>{
      //      this.toastr.success('Successful login');
      //  }))
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
    this.toastr.success('Successful logout');
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeItemFromCart(userId:string,itemId:string):Observable<string>{
    return this.http.put<string>('http://localhost:3000/api/cart/clear',{userId,itemId})
    // .pipe(tap((data)=>{
    //   console.log(data);
    //   console.log(data['msg']);
    //   this.toastr.success(data['msg']);
    // }));
  }


}
