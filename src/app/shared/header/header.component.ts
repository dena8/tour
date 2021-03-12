import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/service/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 //username:()=>{localStorage.getItem('username')};
 username = function () {
  return localStorage.getItem('username') ;
};

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  // this.username= localStorage.getItem('username');   
  //  this.username = this.myAdd(localStorage.getItem('username'));
  
  }



 
 

  logout() {
    this.userService.logout();    
    this.router.navigate(['home']);
  }

}
