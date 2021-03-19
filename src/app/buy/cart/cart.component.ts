
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITour } from '../../core/model/tour-create';
import { UserService } from '../../core/service/user.service';
import { IUser } from '../../core/model/user';
import { TourService } from '../../core/service/tour.service';
import { BuyService } from 'src/app/core/service/buy.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  user$: Observable<IUser<ITour>>
  tourSum: number
  userId:string;
  username:string;

  constructor(private tourService: TourService,private userService:UserService,private buyService:BuyService,  private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser();
    this.userService.getCurrentUser().subscribe(user => {
      this.userId = user.id;  
      this.username=user.username; 
      this.tourSum = user.cart.filter(u=>u.price).reduce((acc, { price }) => acc + price, 0);
    }, err => {
      console.log(err);
    })
  }

  order() {  
    this.buyService.makeOrder({username:this.username}).subscribe((data)=>this.router.navigate(['home']));   
  }

  removeItem(tourId: string) {
    this.buyService.removeItemFromCart(this.userId,tourId).subscribe(()=>  this.ngOnInit());
    }

 
}
