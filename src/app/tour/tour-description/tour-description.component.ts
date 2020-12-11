import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { ICategory } from '../../model/category';
import { ITour } from '../../model/tour-create';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour-description',
  templateUrl: './tour-description.component.html',
  styleUrls: ['./tour-description.component.scss']
})
export class TourDescriptionComponent implements OnInit {

  tour$: Observable<ITour<ICategory>>;
  


  constructor(private tourService: TourService, public userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.tour$ = this.tourService.getTourById(id);
  }

  clickJoin() {
    // this.isCart = true;
    this.tour$.subscribe((data) => {      
      if(data.participants>0){
      this.tourService.addTourToCart(data).subscribe(data => {
        this.router.navigate(['home']);
      }, err => {
        console.log(err);
      });
      this.tourService.updateParticipants(this.activatedRoute.snapshot.params.id).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      })
    }
    });
   
  }

  deleteTour() {
    this.tourService.deleteTour(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.router.navigate(['tour-card']);
    }, err => {
      console.log("delete err", err);
    });
  }

}
