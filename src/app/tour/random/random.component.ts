import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faCoffee,faGlobe,faMountain,faTree,faCloudMoon,faCompass,faCalendarTimes,faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  form:FormGroup;
  phoneCodes: string[] = ['+359', '+123', '+765', '+345']
  faCoffee=faCoffee
  faGlobe=faGlobe
  faMountain=faMountain
  faTree=faTree
  faCompass=faCompass
  faCalendarTimes=faCalendarTimes
  faCloudSunRain=faCloudSunRain

  constructor() { }

  ngOnInit(): void {
  }

}
