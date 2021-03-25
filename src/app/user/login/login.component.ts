import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private jwtHelperService: JwtHelperService) { }
 
  ngOnInit(): void {
    this.form = this.fb.group({     
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z\\s]+$')]],    
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })

  }

  get f() {
    return this.form.controls;
  }

  postLogin() {

    this.userService.postLogin(this.form.value).subscribe(data => { 
      console.log("Data from POST LOGIN",data);    
      const token = data.headers.get('Authorization');
      const decodeToken = this.jwtHelperService.decodeToken(token);     
      localStorage.setItem('token', data.headers.get('Authorization'));      
      localStorage.setItem('roles',JSON.stringify(decodeToken['roles']));
      localStorage.setItem('username', data.body.username);         
      this.router.navigate(['home']);
    },
      err => {
        console.log(err);
      }

    )
  }

}
