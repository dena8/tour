import { Component, Input, OnInit } from '@angular/core';
import { ICreateTour } from 'src/app/model/tour-create';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {

  faCoffee = faCoffee

  @Input()
  tour:ICreateTour;
  constructor() { }

  ngOnInit(): void {
    console.log(this.tour.name);
  }

}
