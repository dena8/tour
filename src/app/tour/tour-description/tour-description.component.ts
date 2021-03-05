import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core/service/user.service';
import { ICategory } from '../../core/model/category';
import { ITour } from '../../core/model/tour-create';
import { TourService } from '../../core/service/tour.service';
import { BuyService } from '../../core/service/buy.service';
import { WeatherComponent } from 'src/app/sample/weather/weather.component';

@Component({
  selector: 'app-tour-description',
  templateUrl: './tour-description.component.html',
  styleUrls: ['./tour-description.component.scss']
})
export class TourDescriptionComponent implements OnInit {

  tour$: Observable<ITour<ICategory>>;
  id: string;
  public isAdded: Boolean;
  mLocation: string; 
  fromWeather: boolean;

  constructor(private tourService: TourService, public userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private buyService: BuyService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.tour$ = this.tourService.getTourById(this.id);
    this.tourService.getTourById(this.id).subscribe(data => this.mLocation = data.region);
    if (this.userService.hasUserRole()) {
      this.buyService.checkIfAdded(this.id).subscribe((data) => this.isAdded = data);
    }
  }

  emitClick(event) {
    this.fromWeather = event;
  }



  clickJoin() {
    this.buyService.addTourToCart(this.id)
      .subscribe(() => this.router.navigate(['tour-card']));
  }

  deleteTour() {
    this.tourService.deleteTour(this.id).subscribe();
  }

}
