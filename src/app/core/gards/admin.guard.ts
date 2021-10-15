import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { auth } from '../../+store';
import { first, map, mapTo, take } from 'rxjs/operators';

import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(    
    private router: Router,
    private store: Store,
    private userService :UserService
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(auth.getRole).pipe(    
      first(r => r.includes('ADMIN_ROLE')),
      mapTo((v: string) => {
       
        return true
      }),
      map(v => {
        return true
      })
      
    );
  }
}
