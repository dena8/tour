import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category/category.service';
import { ICategory } from 'src/app/model/category';

import {TourService} from '../tour.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<ICategory[]>;

  
  constructor(private fb: FormBuilder,
     private tourService:TourService,
     private router:Router,
     private categoryService:CategoryService) { }

  ngOnInit(): void {
  this.categories$=  this.categoryService.getAllCategories();  

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startAndEnd: ['', Validators.required],          
      participants: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      image:['',Validators.required],
      price:['',Validators.required],
    })
  }

  get f() {
    return this.form.controls;
  }

  create() {
   console.log(this.form.value);
   this.tourService.createTour(this.form.value).subscribe(tour=>{
     console.log(tour);
       this.router.navigate(['home']);
   },err=>{
      console.log(err);
   })
  }

}
