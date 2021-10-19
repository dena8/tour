import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITour } from '../model/tour-create';
import { ICategory } from '../model/category';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { IForecast } from '../model/forecast';

const dbUrl = 'http://localhost:5000/tours'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient, private toastr: ToastrService) { } 

  createTour(tour: any) {
    return this.http.post<ITour>(dbUrl + '/create', tour);
  }

  // getPopulatedTours(): Observable<ITour<ICategory>[]> {
  //   return this.http.get<Array<ITour<ICategory>>>(dbUrl + '/all');
  // }

  getPopulatedTours() {
    return this.http.get<ITour[]>(dbUrl + '/all');
  }

  getTourById(id: string): Observable<ITour<ICategory>> {
    return this.http.get<ITour<ICategory>>(dbUrl + `/${id}`);
  }

  deleteTour1(id:string): Observable<string> {
    return this.http.get<string>(dbUrl + '/remove' + `/${id}`)
      .pipe(
        tap((data) => this.toastr.success("Successful delete tour!"))
      );
  }

  deleteTour(id:string){
    return this.http.get<string>(dbUrl + '/remove' + `/${id}`);
  }

  getWeatherForecast(location:string): Observable<IForecast> {
    return this.http.get<IForecast>(dbUrl + `/weather-forecast?region=${location}`);
  }

  updateTour(id:string,formDate:FormData) {
    return this.http.put(dbUrl +`/update/${id}`,formDate);
  }

}
