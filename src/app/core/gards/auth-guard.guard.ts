import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import {UserService} from '../../core/service/user.service'
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivateChild, CanActivate {

 constructor(private userService: UserService, private router: Router){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.userService.getToken()){      
          return true;
        }
        this.router.navigate(['home']);
        return false;
  }


  canActivate():boolean {
    if(this.userService.getToken()){
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }

}
