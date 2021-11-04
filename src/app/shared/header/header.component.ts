import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/service/user.service';
import { logout } from '../../+store/auth/action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username = function () {
    return localStorage.getItem('username');
  };

  constructor(
    public userService: UserService,
    private router: Router,
    private store: Store,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
   // localStorage.removeItem('username');
    localStorage.clear();
    this.toastr.success('Successful logout');
    this.router.navigate(['home']);
  }
}
