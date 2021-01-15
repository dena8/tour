import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/service/category.service';
import { ICategory } from '../../core/model/category';
import {TourService} from '../../core/service/tour.service';

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
      difficultyLevel: ['', [Validators.required]],
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
