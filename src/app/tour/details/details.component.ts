import { Component, OnInit,Input } from '@angular/core';
import { faCoffee,faGlobe,faMountain,faTree,faCloudMoon,faCompass,faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { ITour } from '../../model/tour-create';
import {ICategory} from '../../model/category';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 
 @Input()
  tour:ITour<any>;

  constructor() { }

  ngOnInit(): void {
    
  }

}
