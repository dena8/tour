import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../model/category';
import { Observable } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: ICategory;
  dbUrl:string = 'http://localhost:5000/categories';

  constructor(private http: HttpClient, public toastr:ToastrService) {
  }

  createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.dbUrl+'/create', category)
    .pipe(tap(()=>{
      this.toastr.success('Successful created category');
  }))
  }
  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.dbUrl+'/all');    
  }
}
