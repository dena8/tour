import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const BE_URL = 'http://localhost:5000/galleries';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient, private toastr:ToastrService) { }


  createTour(gallery: FormData): Observable<any> {
    return this.http.post<any>(BE_URL + '/create', gallery)
    .pipe(
      tap((data)=>this.toastr.success("Successful create gallery!"))
    );
  }

}
