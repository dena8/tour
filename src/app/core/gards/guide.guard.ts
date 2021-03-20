import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuideGuard implements CanActivate, CanActivateChild {

  constructor(private userService: UserService, private router: Router){}

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(!this.userService.hasGuideRole()){
        console.log("FROM FALSE GUIDE",this.userService.hasGuideRole());
        this.router.navigate(['home']);
          return false;
      }
      console.log("FROM true GUIDE");
    return true;
  }

  canActivateChild(){
    if(!this.userService.hasGuideRole()){
      console.log("FROM FALSE CANACTIVATECHILD",this.userService.hasGuideRole());
      this.router.navigate(['home']);
        return false;
    }
    console.log("FROM true ANACTIVATECHILD GUIDE");
  return true;
  }
  
}
