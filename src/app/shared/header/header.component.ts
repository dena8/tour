import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/service/user.service';
import { logout } from '../../+store/auth/action';
import { Observable } from 'rxjs';
import{auth} from '../../+store/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username = function () {
    return localStorage.getItem('username');
  };
  isAuthenticated:Observable<boolean> = this.store.select(auth.isAuthenticate);
  hasGuideRole$:Observable<boolean> = this.store.select(auth.hasGuideRole);
  hasUserRole$:Observable<boolean> = this.store.select(auth.hasUserRole);
  hasAdminRole$:Observable<boolean> = this.store.select(auth.hasAdminRole);

  constructor(
    //public userService: UserService,
    private router: Router,
    private store: Store,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
    localStorage.removeItem('username');
    this.toastr.success('Successful logout');
    this.router.navigate(['home']);
  }
}
