import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { UserService } from '../service/user.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { auth } from '../../+store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuideGuard implements CanActivate, CanActivateChild {

  constructor(private userService: UserService, private router: Router, private store:Store) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(auth.getRole).pipe(
      map((role) => {
        if (!role.includes('GUIDE_ROLE')) {
          this.router.navigate(['home']);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild():Observable<boolean> {
    return this.store.select(auth.getRole).pipe(
      map((role) => {
        if (!role.includes('GUIDE_ROLE')) {
          this.router.navigate(['home']);
          return false;
        }
        return true;
      })
    );
  }

}
