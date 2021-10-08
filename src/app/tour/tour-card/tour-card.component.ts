import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { ITour } from '../../core/model/tour-create';
import { Observable } from 'rxjs';

import {Store} from '@ngrx/store';
import { tour } from '../../+store';
import {getAllTours} from '../../+store/tour/action';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  tours:ITour[];
  tours$: Observable<ITour[]> = this.store.select(tour.getAll);

  isTours: boolean;
  myGuideTours: ITour[];
  otherGuideTours: ITour[];
  hasGuideRole = this.userService.hasGuideRole()
  constructor(public userService: UserService, private store:Store
    ) {}

    //{this.store.dispatch(getAllTours()); }

  ngOnInit(): void {
    // this.tours$ = this.store.select(tour.getAll);
    
    //  this.store.select(tour.getAll).subscribe((data) => {
    //   this.isTours = !!data.length;
    //    if (this.userService.hasGuideRole()) {      
    //     this.myGuideTours = data.filter(function (d) {
    //       return d.creator.username === localStorage.getItem('username')
    //     });

    //     this.otherGuideTours = data.filter(function (d) {
    //       return d.creator.username !== localStorage.getItem('username')
    //     })      
    //   } else {
    //     this.tours = data       
    //   }
    // }, err => {
    //   console.log(err);
    // });
  
  //  this.store.pipe(select(tour.getAll)).subscribe(t=> console.log(t));  
  //          this.store.pipe(select(tour.selectById('ba8b628d-94b0-4df3-91b7-8b9ed2481c5d'))).subscribe(t=> console.log(t))
      }

}
