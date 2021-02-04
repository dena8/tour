import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../core/model/category';
import { ITour } from '../../core/model/tour-create';
import { TourService } from '../../core/service/tour.service';



@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
 // tours$:Observable<any>;
 tours:ITour<ICategory>[];
 isTours:boolean;

  
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
  //  this.tours$ = this.tourService.getPopulatedTours();
  //  console.log(this.tours$);
  this.tourService.getPopulatedTours().subscribe((data)=>{      
    this.tours=data
    this.isTours= !!data.length;
    console.log("THIS TOURCE:",this.tours);
  },err=>{
    console.log(err);
  })
 
  }

}
