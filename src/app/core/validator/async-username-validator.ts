
import { AsyncValidatorFn, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';

export function usernameAsyncValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
    
      return userService.findUserByUsername(control.value).pipe(
        map(
          v => {          
            return v != false ? { userNotExist: true } : null;
          }
        ));
    }
  }