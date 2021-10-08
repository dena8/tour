import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from '../../core/model/category';
import {dateInTheFutureValidator} from '../../core/validator/custom-date-validator';

import { Store } from '@ngrx/store';
import {createTour} from '../../+store/tour/action';
import {getAllCategories} from '../../+store/global/action'
import {global} from '../../+store/index';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<ICategory[]>
  loading:boolean =false; 

  
  constructor(private fb: FormBuilder, private store:Store) {this.store.dispatch(getAllCategories()) }

  ngOnInit(): void {  
    this.categories$= this.store.select(global.getAllCategories);

      this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9\\s]+$')]],
      description: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(200),]],
      region:['',Validators.required],
      category: ['', Validators.required],         
      participants: ['', [Validators.required, Validators.min(1),Validators.pattern('[0-9]+')]],
      difficultyLevel: ['', [Validators.required]],
      image:['',Validators.required],
      price:['',[Validators.required, Validators.min(0)]],
      startDate: ['',[Validators.required]],   
    }, {
      validators: dateInTheFutureValidator('startDate')
      
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
    for (const [k,v] of Object.entries(this.form.value)) {     
      formDate.append(k,v as any);   
    }
    this.loading=true;

    this.store.dispatch(createTour({ tour: formDate }));
   
  }

  

}
