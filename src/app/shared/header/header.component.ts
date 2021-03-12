import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/service/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 username:string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
   this.username= localStorage.getItem('username');
  }

  logout() {
    this.userService.logout();
    //this.ngOnInit();
    this.router.navigate(['home']);
  }

}
