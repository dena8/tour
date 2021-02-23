import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core/service/user.service';
import { ICategory } from '../../core/model/category';
import { ITour } from '../../core/model/tour-create';
import { TourService } from '../../core/service/tour.service';
import {BuyService} from '../../core/service/buy.service';

@Component({
  selector: 'app-tour-description',
  templateUrl: './tour-description.component.html',
  styleUrls: ['./tour-description.component.scss']
})
export class TourDescriptionComponent implements OnInit {

  tour$: Observable<ITour<ICategory>>;
  id:string;
 public isAdded:Boolean; 
  
  constructor(private tourService: TourService, public userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private buyService: BuyService ) { }

  ngOnInit(): void {  
    this.id = this.activatedRoute.snapshot.params.id;
    this.tour$ = this.tourService.getTourById(this.id);  
     this.tour$.subscribe(a=> console.log("TOUR FROM TOUR-DESC COMP",a)) 
    if(this.userService.hasUserRole()){
    this.buyService.checkIfAdded(this.id).subscribe((data)=>this.isAdded=data); 
    }
  }

  clickJoin() {    
    this.buyService.addTourToCart(this.id)
    .subscribe(()=> this.router.navigate(['tour-card']));
  } 
  
  deleteTour(){
    this.tourService.deleteTour(this.id).subscribe();    
  }

}
