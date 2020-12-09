import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITour } from '../model/tour-create';
import { ICategory } from '../model/category';
import {IUser} from '../model/user';

const dbUrl = 'http://localhost:3000/api/tour'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  createTour(tour:ITour):Observable<ITour>{
   return this.http.post<ITour>(dbUrl+'/create',tour);
  }

  getPopulatedTours():Observable<ITour<ICategory>[]>{
    return this.http.get<Array<ITour<ICategory>>>(dbUrl+'/all-populated-category')
    //.pipe(map())
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
  

}
