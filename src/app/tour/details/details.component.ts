import { Component, OnInit,Input } from '@angular/core';
import { ICategory } from 'src/app/core/model/category';
import { ITour } from '../../core/model/tour-create';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 
 @Input()
  tour:ITour<ICategory>;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    
  }

}
