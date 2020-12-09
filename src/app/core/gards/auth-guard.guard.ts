import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../../user/user.service'
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivateChild {

 constructor(private userService: UserService, private router: Router){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.userService.getToken()){
          return true;
        }
        this.router.navigate(['home']);
        return false;
  }


  // canActivate():boolean {
  //   if(this.userService.getToken()){
  //     return true;
  //   }
  //   this.router.navigate(['home']);
  //   return false;
  // }

}
