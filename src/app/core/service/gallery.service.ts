import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { IGallery } from '../model/gallery';

const BE_URL = 'http://localhost:5000/galleries';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient, private toastr:ToastrService) { }


  createGallery(gallery: FormData): Observable<any> {
    return this.http.post<any>(BE_URL + '/create', gallery)
    .pipe(
      tap((data)=>this.toastr.success("Successful create gallery!"))
    );
  }

  getGallery():Observable<IGallery>{
     return this.http.get<IGallery>(BE_URL+'/view');
  }

}
