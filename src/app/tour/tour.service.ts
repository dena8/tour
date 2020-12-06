import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITour } from '../model/tour-create';

const dbUrl = 'http://localhost:3000/api/tour'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  createTour(tour:ITour):Observable<ITour>{
   return this.http.post<ITour>(dbUrl+'/create',tour);
  }
  

}
