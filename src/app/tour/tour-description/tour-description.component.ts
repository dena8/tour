import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherComponent } from 'src/app/sample/weather/weather.component';

import { Store } from '@ngrx/store';
import { addTourToCart } from '../../+store/buy/action';
import { deleteTour } from '../../+store/tour/action';
import { tour } from '../../+store';
import { cart } from '../../+store/buy/selector';
import { TourService } from '../../core/service/tour.service';
import {map} from 'rxjs/operators';
import { ITour } from 'src/app/core/model/tour-create';
import { Observable } from 'rxjs';
import{auth} from '../../+store/index';

@Component({
  selector: 'app-tour-description',
  templateUrl: './tour-description.component.html',
  styleUrls: ['./tour-description.component.scss'],
})
export class TourDescriptionComponent implements OnInit {
  tour$:Observable<ITour>;
  id: string;
  isAdded: Boolean;
  mLocation$:Observable<string>;
  fromWeather: boolean;
  isCreator$: Observable<boolean>; 
  isAuthenticated$ = this.store.select(auth.isAuthenticate);
  hasGuideRole$=this.store.select(auth.hasGuideRole);
  hasAdminRole$=this.store.select(auth.hasAdminRole);
  hasUserRole$=this.store.select(auth.hasUserRole);

  constructor(   
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.tour$ = this.store.select(tour.selectById(this.id));
  

    this.mLocation$ = this.tour$.pipe(map(t=> t.region));
    this.isCreator$ = this.tour$.pipe(map(t=>t.creator.username==localStorage.getItem('username')));  

    this.hasUserRole$.subscribe((data) => {
      if (data) {
        this.store.select(cart.findById(this.id)).subscribe((r) => (this.isAdded = !!r));
      }
    });
  }

  emitClick(event) {
    this.fromWeather = event;
  }

  clickJoin() {
    let name: string;
    let price: number;
    this.store.select(tour.selectById(this.id)).subscribe((data) => {
      name = data.name;
      price = data.price;
    });
    this.store.dispatch(
      addTourToCart({
        tour: { id: this.id, name, price },
      })
    );
    this.router.navigate(['tour/tour-card']);
  }

  deleteTour() {
    this.tourService.deleteTour1(this.id).subscribe((t) => console.log(t));
    this.store.dispatch(deleteTour({ id: this.id }));
  }
}
