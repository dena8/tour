import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITour } from 'src/app/model/tour-create';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../model/user';
import { TourService } from '../tour.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  user$: Observable<IUser<ITour>>
  tourSum: number

  constructor(private tourService: TourService,private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.tourService.getCurrentUser();
    this.tourService.getCurrentUser().subscribe(user => {
      this.tourSum = user.tours.reduce((acc, { price }) => acc + price, 0);
    }, err => {
      console.log(err);
    })
  }

  order() {
    this.tourService.makeOrder().subscribe(data => {
      console.log(data);
      this.router.navigate(['tour-card']);
    }, err => {
      console.log(err);
    })
  }

  removeItem(tourName: string) {
    this.user$.subscribe(data=>{
      const userId = data._id;
      const item = data.tours.find(i=>i.name==tourName);       
      this.userService.removeItemFromCart(userId,item._id).subscribe(data=>{
        this.router.navigate(['home']);
      },err=>{
        console.log(err);
      })        
    });
    
    
  }

}
