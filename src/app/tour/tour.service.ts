import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {ICreateTour} from '../model/tour-create'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  postCreate(tour:ICreateTour):Observable<ICreateTour>{
   return this.http.post<ICreateTour>('http://localhost:3000/tour/create',tour);
  }

  getCategories():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:3000/all-categories');
  }

  getToursByCategory(category:string):Observable<ICreateTour[]>{
    return this.http.get<ICreateTour[]>(`http://localhost:3000/all-trek?category=${category}`)
  }
}
