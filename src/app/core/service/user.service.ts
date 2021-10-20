import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister } from '../../core/model/user-register';
import { ILogin,IAuthUser } from '../../core/model/index';
import { IUser } from '../model/user';
import { ITour } from '../model/tour-create';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { auth } from '../../+store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

const BE_URL = 'http://localhost:5000/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private store: Store
  ) {}

  postRegister(user: IUserRegister) {
    return this.http.post<IUserRegister>(BE_URL + '/register', user);
  }

  login(user: ILogin){
    return this.http.post<IAuthUser>(BE_URL + '/login', user);
    
  }


  isAuthenticated(): boolean {
    let result = null;
    this.store.select(auth.getToken).subscribe((t) => (result = t));
    return !!result;
  }

  hasAdminRole$(): Observable<boolean> {
    return this.store.select(auth.getRole).pipe(
      map((role) => {
        if (role !== null) {
          return role.includes('ADMIN_ROLE') && this.isAuthenticated();
        }
        return false;
      })
    );
  }

  hasUserRole$(): Observable<boolean> {
    return this.store.select(auth.getRole).pipe(
      map((role) => {
        if (role !== null) {
          return role.includes('USER_ROLE') && this.isAuthenticated();
        }
        return false;
      })
    );
  }

  hasGuideRole$(): Observable<boolean> {
    return this.store.select(auth.getRole).pipe(
      map((role) => {
        if (role !== null) {
          return role.includes('GUIDE_ROLE') && this.isAuthenticated();
        }
        return false;
      })
    );
  }

  getCurrentUser(): Observable<IUser<ITour>> {
    return this.http.get<IUser<ITour>>(BE_URL + '/get/current');
  }

  getAuthorities(): Observable<string[]> {
    return this.http.get<string[]>(BE_URL + '/authorities');
  }

  updateAuthority(body: FormData): Observable<any> {
    return this.http
      .put<any>(BE_URL + '/update/authority', body)
      .pipe(tap(() => this.toastr.success('Successful update authority!')));
  }

  findUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(BE_URL + `/find?username=${username}`);
  }
}
