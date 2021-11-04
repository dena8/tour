import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: ICategory;
  dbUrl:string = 'http://localhost:5000/categories';

  constructor(private http: HttpClient) {
  }

  createCategory(category: string){    
    return this.http.post<ICategory>(this.dbUrl+'/create', {name:category});    
  }

  getAllCategories(){
    return this.http.get<ICategory[]>(this.dbUrl+'/all');    
  }

}
