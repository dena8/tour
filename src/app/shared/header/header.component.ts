import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/service/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
 //username:()=>{localStorage.getItem('username')};
 username = function () {
  return localStorage.getItem('username') ;
};
=======
 username:string;
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
  // this.username= localStorage.getItem('username');   
  //  this.username = this.myAdd(localStorage.getItem('username'));
  
=======
   this.username= localStorage.getItem('username');
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd
  }



 
 

  logout() {
<<<<<<< HEAD
    this.userService.logout();    
=======
    this.userService.logout();
    //this.ngOnInit();
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd
    this.router.navigate(['home']);
  }

}
