import { Component, OnInit } from '@angular/core';
import { faCoffee,faGlobe,faMountain,faTree,faCloudMoon,faCompass,faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  faCoffee=faCoffee
  faGlobe=faGlobe
  faMountain=faMountain
  faTree=faTree
  faCompass=faCompass
  faCalendarTimes=faCalendarTimes

  constructor() { }

  ngOnInit(): void {
  }

}
