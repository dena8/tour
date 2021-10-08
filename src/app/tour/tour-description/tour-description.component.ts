import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core/service/user.service';
import { ITour } from '../../core/model/tour-create';
import { WeatherComponent } from 'src/app/sample/weather/weather.component';

import { Store } from '@ngrx/store';
import {addTourToCart} from '../../+store/buy/action';
import{deleteTour} from '../../+store/tour/action';
import {tour} from '../../+store';
import {cart} from '../../+store/buy/selector';

import{TourService} from '../../core/service/tour.service'

@Component({
  selector: 'app-tour-description',
  templateUrl: './tour-description.component.html',
  styleUrls: ['./tour-description.component.scss']
})
export class TourDescriptionComponent implements OnInit {

  tour$:any;
  id: string;
  isAdded: Boolean;
  mLocation: string; 
  fromWeather: boolean;
  isCreator:boolean;
  name:string;
  price:number;

  constructor( public userService: UserService,
     private activatedRoute: ActivatedRoute, private router: Router,
     private store: Store,
     private tourService:TourService ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
   this.tour$ = this.store.select(tour.selectById(this.id));
  
    this.store.select(tour.selectById(this.id)).subscribe(data=>{    
    this.mLocation = data.region;
    this.isCreator = data.creator.username==localStorage.getItem('username');    

    this.name = data.name;
    this.price=data.price;
   })

    if (this.userService.hasUserRole()) {    
      this.store.select(cart.findById(this.id)).subscribe(r=>this.isAdded=!!r);      
    }
  }

  emitClick(event) {
    this.fromWeather = event;   
  }

  clickJoin() {
    this.store.dispatch(addTourToCart({tour:{id:this.id,name:this.name,price:this.price}}));
    this.router.navigate(['tour/tour-card']);  
  }

  deleteTour() {
    this.tourService.deleteTour1(this.id).subscribe(t=>console.log(t));
    this.store.dispatch(deleteTour({id:this.id}));  
  }

}
