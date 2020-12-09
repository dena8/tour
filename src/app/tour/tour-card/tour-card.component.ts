import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/model/category';
import { ITour } from '../../model/tour-create';
import { TourService } from '../tour.service';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
 // tours$:Observable<any>;
 tours:ITour<ICategory>[]

  
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
  //  this.tours$ = this.tourService.getPopulatedTours();
  //  console.log(this.tours$);
  this.tourService.getPopulatedTours().subscribe((data)=>{    
    this.tours=data
  },err=>{
    console.log(err);
  })
 
  }

}
