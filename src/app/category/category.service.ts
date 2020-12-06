import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: ICategory;
  dbUrl:string = 'http://localhost:3000/api/category'
  constructor(private http: HttpClient) {
  }

  createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.dbUrl+'/create', category);
  }
  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.dbUrl+'/all');
  }
}
