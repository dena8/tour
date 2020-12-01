import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister } from 'src/app/model/user-register';
import { confirmCustomValidator } from './confirm.validator';
import {UserService} from '../user.service'
import { Router } from '@angular/router';
import { GlobalConstants } from '../../core/constants/global-constants';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  phoneCodes:string[]=['+359','+123','+765','+345']

  constructor(private fb: FormBuilder, private userService: UserService, private router:Router) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[A-Za-z]+')]],
      email: ['', [Validators.required, Validators.email]],
      phoneCode:['',Validators.required],
      phone: ['', [Validators.required,Validators.pattern('[0-9]{9}')]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      confirmPassword: ['',[Validators.required]]
    },{
      validators: confirmCustomValidator('password','confirmPassword')
    })
  }

  register(){    
    const newUser: IUserRegister = {...this.form.value};    
    this.userService.postRegister(newUser)
      .subscribe((user) => {        
        sessionStorage.setItem('userId',user._id);
        sessionStorage.setItem('email',user.email);
        GlobalConstants.isLogged = true;
        this.router.navigate(['home']);
      });
          
    
  }

  get f() {
    return this.form.controls;
  }


}
