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
      region:['',Validators.required],
      category: ['', Validators.required],         
      participants: ['', [Validators.required]],
      difficultyLevel: ['', [Validators.required]],
      image:['',Validators.required],
      price:['',Validators.required],
      startDate: ['', Validators.required],   
    })
  }

  get f() {
    return this.form.controls;
  }

  upload(event){   
      const file = (event.target as HTMLInputElement).files[0];
      this.form.get("image").setValue(file); 
      
  }

  create() {
    const formDate= new FormData();  
    console.log("THIS FORM VALUE",this.form.value);
    for (const [k,v] of Object.entries(this.form.value)) {     
      formDate.append(k,v as any);   
    }
 
   this.tourService.createTour(formDate).subscribe(tour=>{     
       this.router.navigate(['tour/tour-card']);
   },err=>{
      console.log(err);
   })
  }

}
