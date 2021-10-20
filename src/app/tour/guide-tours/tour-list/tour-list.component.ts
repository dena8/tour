import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { ITour } from '../../../core/model/tour-create';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  @Input()
  tours$:Observable<ITour[]>;
  @Input()
  myTours$:Observable<ITour[]>;
  @Input()
  otherGuideTours$:Observable<ITour[]>
  username:string = localStorage.getItem('username');
  constructor() { }

  ngOnInit(): void {
   
  }

}
