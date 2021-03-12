import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AboutComponent,HomeComponent, WeatherComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {path:'about',component:AboutComponent},
      {path:'home',component:HomeComponent},
     
    ])    
  ],
  exports:[
    WeatherComponent
  ]
})
export class SampleModule { }
