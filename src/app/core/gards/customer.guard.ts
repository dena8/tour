import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.userService.hasUserRole()){
        console.log("FROM FALSE USER",this.userService.hasUserRole());
        this.router.navigate(['home']);
          return false;
      }
      console.log("FROM true USER");
    return true;
  }
  
}
