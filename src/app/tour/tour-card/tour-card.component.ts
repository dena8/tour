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
export class TourCardComponent implements OnInit, OnDestroy {
  tours$: Observable<ITour[]>; 
  localUsername = localStorage.getItem('username');
  myGuideTours$: Observable<ITour[]> = this.store.select(tour.getAll).pipe(map((t) => t.filter((d) => d.creator.username === this.localUsername)));
  otherGuideTours$: Observable<ITour[]> = this.store.select(tour.getAll).pipe(map((t) => t.filter((d) => d.creator.username !== this.localUsername)));
  hasGuideRole = this.userService.hasGuideRole();

  constructor(public userService: UserService, private store: Store) {
    this.store.dispatch(getAllTours());
  }

  ngOnInit(): void {
    this.tours$ = this.store.select(tour.getAll);
  }

  ngOnDestroy() {
    // this.store.dispatch(cancelRetrieve());
  }
}
