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
  @Input() mLocation: string;
  forecast$: Observable<IForecast>;
  @Output()
  isDateEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private tourService: TourService) { }

  ngOnInit(): void {  
    this.forecast$ = this.tourService.getWeatherForecast(this.mLocation);
    this.tourService.getWeatherForecast(this.mLocation).subscribe(data => {    
      this.isDateEmitter.emit(data.success);
    });
  }

}
