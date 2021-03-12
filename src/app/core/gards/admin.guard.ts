import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../../core/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.userService.hasAdminRole()) {
      console.log("FROM ADMIN GUARD", this.userService.hasAdminRole());
      this.router.navigate(['home']);
      return false;
    }
    console.log("FROM ADMIN GUARD return TRUE");
    return true;
  }

}
