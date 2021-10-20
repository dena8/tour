import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { invalidUsernameAsyncValidator } from '../../core/validator/async-username-not-exist-validator';
import { login, loginCancel } from '../../+store/auth/action';
import { ILogin } from 'src/app/core/model/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  get f() {
    return this.form.controls;
  }

  get av() {
    return this.form.get('username');
  }

  postLogin() {
    const user: ILogin = { ...this.form.value };
    this.store.dispatch(login({ ...this.form.value }));
  }

  ngOnDestroy() {
    this.store.dispatch(loginCancel());
  }
}
