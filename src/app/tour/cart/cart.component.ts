import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITour } from 'src/app/model/tour-create';
import {IUser} from '../../model/user';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  user$: Observable<IUser<ITour>>
  // user:IUser<ITour>
  // tours:ITour[]
  tourSum:number

  constructor(private tourService:TourService) { }

  ngOnInit(): void {
     this.user$ = this.tourService.getCurrentUser();
    //  this.tourService.getCurrentUser().subscribe(data=>{
    //  this.user=data
    //  this.tours=data.tours
    //    console.log(data);
    // })
    this.tourService.getCurrentUser().subscribe(user=>{
      this.tourSum = user.tours.reduce((acc,{price})=>acc+price,0);     
    },err=>{
      console.log(err);
    })
  }

}
