import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';




@NgModule({
  declarations: [AboutComponent,HomeComponent, WeatherComponent, GalleryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {path:'about',component:AboutComponent},
      {path:'home',component:HomeComponent},
      {path:'gallery',component:GalleryComponent}
     
    ])    
  ],
  exports:[
    WeatherComponent
  ]
})
export class SampleModule { }
