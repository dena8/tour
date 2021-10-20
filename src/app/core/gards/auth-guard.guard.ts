import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Store } from '@ngrx/store';
import {UserService} from '../../core/service/user.service'
import { auth } from '../../+store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivateChild, CanActivate {

 constructor(private userService: UserService, private router: Router, private store : Store){}

  canActivateChild():Observable<boolean>  {
    return this.store.select(auth.getToken).pipe(take(1),map(v => {
      if(v) { return true; }
      this.router.navigate(['home']);
    }));
  }


  canActivate():Observable<boolean> {
    return this.store.select(auth.getToken).pipe(take(1),map(v => {
      if(v) { return true; }
      this.router.navigate(['home']);
    }));  
  }

}
