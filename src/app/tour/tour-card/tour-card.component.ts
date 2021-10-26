import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { ITour } from '../../core/model/tour-create';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { tour } from '../../+store';
import { getAllTours, cancelRetrieve } from '../../+store/tour/action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
})
export class TourCardComponent implements OnDestroy {
  tours$: Observable<ITour[]> = this.store.select(tour.getAll); 
  localUsername = localStorage.getItem('username');
  myGuideTours$: Observable<ITour[]> =this.store.select(tour.getAll).pipe(map((t) => t.filter((d) => d.creator.username === this.localUsername)));
  otherGuideTours$: Observable<ITour[]> = this.store.select(tour.getAll).pipe(map((t) => t.filter((d) => d.creator.username !== this.localUsername)));


  constructor(public userService: UserService, private store: Store) {
    this.store.dispatch(getAllTours());    
  }



  ngOnDestroy() {
    // this.store.dispatch(cancelRetrieve());
  }
}
