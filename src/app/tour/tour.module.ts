import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateComponent} from './create/create.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { TourCardComponent } from './tour-card/tour-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsComponent } from './details/details.component';
import { RandomComponent } from './random/random.component';



@NgModule({
  declarations: [CreateComponent,  TourCardComponent, DetailsComponent, RandomComponent],
  imports: [
    CommonModule,
   // FormsModule,
   FontAwesomeModule,
    ReactiveFormsModule,    
    RouterModule.forChild([
      {path:'create',component:CreateComponent},    
      {path:'card',component:TourCardComponent},
   
      {path:'details',component:DetailsComponent},

    ])
  ],
  exports:[
    CreateComponent,   

    TourCardComponent    
  ]
})
export class TourModule { }
