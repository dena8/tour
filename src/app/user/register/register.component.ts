import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister } from 'src/app/model/user-register';
import { confirmCustomValidator } from './confirm.validator';
import { UserService } from '../user.service'
import { Router } from '@angular/router';



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
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[A-Za-z]+')]],
      email: ['', [Validators.required, Validators.email]],      
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: confirmCustomValidator('password', 'confirmPassword')
    })
  }

  register() {
    const newUser: IUserRegister = { ...this.form.value };
    this.userService.postRegister(newUser)
      .subscribe((user) => {
        console.log(user);
        if(!user['token']){
          this.router.navigate(['home']);
          return;
        }
        
        localStorage.setItem('token', user['token']);
        //  localStorage.setItem('email', user['user']['email']);
        //  localStorage.setItem('userId', user['user']['_id']);
         localStorage.setItem('admin',JSON.stringify(user['isAdmin']))
        
      
         
        this.router.navigate(['home']);
      });


  }

  get f() {
    return this.form.controls;
  }


}
