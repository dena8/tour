import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister } from '../../core/model/user-register';
import { confirmCustomValidator } from './confirm.validator';
import { UserService } from '../../core/service/user.service'
import { Router } from '@angular/router';
import {usernameAsyncValidator} from '../../core/validator/async-username-validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
 

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z\\s]+$')],[usernameAsyncValidator(this.userService)], {updateOn: 'blur'} ],
      email: ['', [Validators.required, Validators.email]],      
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: confirmCustomValidator('password', 'confirmPassword')
    })
  }

  register() {
    const newUser: IUserRegister = { ...this.form.value };
    this.userService.postRegister(newUser)
      .subscribe(() => {       
        this.router.navigate(['login']);
      });
     
  }

  get f() {
    return this.form.controls;
  }

  get av (){
    return this.form.get('username');
  }
  
}
