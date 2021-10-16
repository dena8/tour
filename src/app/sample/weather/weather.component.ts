import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { TourService } from '../../core/service/tour.service';
import { IForecast } from "../../core/model/forecast";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  faWeather = faCloudSunRain;
  @Input() mLocation$:Observable<string>;
  forecast$: Observable<IForecast>;
  @Output()
  isDateEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private tourService: TourService) { }

  ngOnInit(): void { 
    let region:string;
    this.mLocation$.subscribe(l=> region=l); 
    this.forecast$ = this.tourService.getWeatherForecast(region);
    this.tourService.getWeatherForecast(region).subscribe(data => {    
      this.isDateEmitter.emit(data.success);
    });
  }

}
