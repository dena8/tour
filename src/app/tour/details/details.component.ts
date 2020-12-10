import { Component, OnInit,Input } from '@angular/core';
import { faCoffee,faGlobe,faMountain,faTree,faCloudMoon,faCompass,faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { ITour } from '../../model/tour-create';
import {ICategory} from '../../model/category';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 
 @Input()
  tour:ITour<any>;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    
  }

}
