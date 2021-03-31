import { Directive } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';


export function usernameAsyncValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    console.log("CONTROL", control.value);
    return userService.findUserByUsername(control.value).pipe(
      map(
        v => {
          console.log("LOG VALUE", v);
          return v != false ? { userNotExist: true } : null;
        }
      ));
  }
}

@Directive({
  selector: '[[appExistValidator][formControlName]]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ExistValidatorDirective, multi: true }]
})
export class ExistValidatorDirective implements AsyncValidator {

  constructor(private userService: UserService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userService.findUserByUsername(control.value).pipe(
      map(
        v => {
          console.log(v);
          return v == false ? { userNotExist: true } : null;
        }
      ));
  }

}
