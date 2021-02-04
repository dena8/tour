import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITour } from '../model/tour-create';
import { ICategory } from '../model/category';
import {IUser} from '../model/user';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

const dbUrl = 'http://localhost:5000/tours'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  createTour(tour:FormData):Observable<ITour>{
   return this.http.post<ITour>(dbUrl+'/create',tour)//,{headers:new HttpHeaders({'Content-Type':"multipart/form-data;charset=utf-8; boundary=yy;"})});
  }

  getPopulatedTours():Observable<ITour<ICategory>[]>{
    return this.http.get<Array<ITour<ICategory>>>(dbUrl+'/all');    
  }

  getTourById(id:string):Observable<ITour<ICategory>>{
    return this.http.get<ITour<ICategory>>(dbUrl+`/${id}`);
  }

  addTourToCart(tour:ITour<ICategory>):Observable<any>{
  return  this.http.put('http://localhost:3000/api/user/add-tours',tour)
  }

  getCurrentUser():Observable<IUser<ITour>>{
    return this.http.get<IUser<ITour>>('http://localhost:3000/api/user/get');
 }
  
  makeOrder():Observable<Object> {
   return this.http.put('http://localhost:3000/api/cart/order',[]);
 }

 deleteTour(id):Observable<string>{
   return this.http.get<string>(dbUrl+'/remove'+`/${id}`)
   .pipe(
    tap((data)=>this.toastr.success("Successful delete tour!"))
  );
 }

}
