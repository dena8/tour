import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICreateTour } from 'src/app/model/tour-create';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: string[];
  firstCategory: ICreateTour[];
  secondCategory: ICreateTour[];
  tourSub:Subscription

  constructor(private tourService: TourService, private router: Router) {

  }

  ngOnInit(): void {    
        
      this.tourSub=  this.tourService.getToursByCategory('trek').subscribe(tours => {          
          this.firstCategory = tours;
          console.log(this.firstCategory);
        })
        this.tourSub=  this.tourService.getToursByCategory('treking').subscribe(tours => {          
          this.secondCategory = tours;
        })     
    
  }

  ngOnDestroy() {
    this.tourSub.unsubscribe();
  }



}
