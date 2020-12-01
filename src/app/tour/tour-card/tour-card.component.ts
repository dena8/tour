import { Component, Input, OnInit } from '@angular/core';
import { ICreateTour } from 'src/app/model/tour-create';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {

  @Input()
  tour:ICreateTour;
  constructor() { }

  ngOnInit(): void {
    console.log(this.tour.name);
  }

}
