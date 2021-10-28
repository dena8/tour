import { Component,Input } from '@angular/core';
import { ITour } from '../../../core/model/tour-create';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent {
  @Input()
  tours$:Observable<ITour[]>;
  @Input()
  myTours$:Observable<ITour[]>;
  @Input()
  otherGuideTours$:Observable<ITour[]>
  @Input()
  isAuthenticate:boolean;
 

  username:string = localStorage.getItem('username');

  constructor() {}  

}
