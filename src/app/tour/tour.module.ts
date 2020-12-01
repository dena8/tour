import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateComponent} from './create/create.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CategoryComponent } from './category/category.component';
import { TourCardComponent } from './tour-card/tour-card.component';



@NgModule({
  declarations: [CreateComponent,  CategoryComponent, TourCardComponent],
  imports: [
    CommonModule,
   // FormsModule,
    ReactiveFormsModule,    
    RouterModule.forChild([
      {path:'create',component:CreateComponent},    
      {path:'card',component:TourCardComponent},
      {path:'category',component:CategoryComponent}

    ])
  ],
  exports:[
    CreateComponent,   
    CategoryComponent,
    TourCardComponent    
  ]
})
export class TourModule { }
