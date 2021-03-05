import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TourModule } from '../tour/tour.module';



@NgModule({
  declarations: [AboutComponent,HomeComponent, WeatherComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,    
  ],
  exports:[
    WeatherComponent
  ]
})
export class SampleModule { }
