import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
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
  tours: ITour<ICategory>[];
  isTours: boolean;
  myGuideTours: ITour<ICategory>[];
  otherGuideTours: ITour<ICategory>[];
  //guideTours:any;


  constructor(private tourService: TourService, public userService: UserService) { }

  ngOnInit(): void {

    this.tourService.getPopulatedTours().subscribe((data) => {
      this.isTours = !!data.length;
      if (this.userService.hasGuideRole()) {      
        this.myGuideTours = data.filter(function (d) {
          return d.creator.username === localStorage.getItem('username')
        });

        this.otherGuideTours = data.filter(function (d) {
          return d.creator.username !== localStorage.getItem('username')
        })      
      } else {
        this.tours = data       
      }
    }, err => {
      console.log(err);
    });
  }

}
