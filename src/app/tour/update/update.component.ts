import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { ICategory } from '../../core/model/category';
import { CategoryService } from 'src/app/core/service/category.service';
import { ITour } from 'src/app/core/model/tour-create';
import { TourService } from 'src/app/core/service/tour.service';
import {dateInTheFutureValidator} from '../../core/validator/custom-date-validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<ICategory[]>;
  tour$: Observable<ITour<ICategory>>;
  id:string = this.activatedRoute.snapshot.params.id;
  loading:boolean = false;
 

  constructor(private fb:FormBuilder,
     private categoryService:CategoryService,
     private tourService: TourService,
     private activatedRoute: ActivatedRoute,
     private router:Router ) { }

  ngOnInit(): void {

    this.categories$=  this.categoryService.getAllCategories();
    this.tourService.getTourById(this.activatedRoute.snapshot.params.id).subscribe(data=>{
      this.form = this.fb.group({
        name: [data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9\\s]+$')]],
        description: [data.description, [Validators.required,Validators.minLength(3), Validators.maxLength(200)]],
        region:[data.region,Validators.required],
        category: [data.category.name, Validators.required],         
        participants: [data.participants, [Validators.required, Validators.min(1),Validators.pattern('[0-9]+')]],
        difficultyLevel: [data.difficultyLevel, [Validators.required]],
        image:[data.image,Validators.required],
        price:[data.price,[Validators.required, Validators.min(0)]],
        startDate: [data.startDate, Validators.required],   
      }, {
        validators: dateInTheFutureValidator('startDate')
      })
   })
    this.tour$ = this.tourService.getTourById(this.activatedRoute.snapshot.params.id);
 
  }


  get f() {
    return this.form.controls;
  }

  upload(event){   
    const file = (event.target as HTMLInputElement).files[0];
    this.form.get("image").setValue(file); 
    
}

  create(){
    const formDate= new FormData();   
    for (const [k,v] of Object.entries(this.form.value)) {     
      formDate.append(k,v as any);   
    } 
    this.loading=true;
    
    this.tourService.updateTour(this.id,formDate).subscribe(()=>this.router.navigate(['tour/tour-card']));

  }

}
