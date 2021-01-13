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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }
  
  get f() {
    return this.form.controls;
  }

  postLogin() {

    this.userService.postLogin(this.form.value).subscribe(data => {
      const token = data.headers.get('Authorization');
      const decodeToken = this.jwtHelperService.decodeToken(token);
      localStorage.setItem('token', data.headers.get('Authorization'));
      localStorage.setItem('admin', decodeToken['roles'].includes('ADMIN_ROLE'));
      this.router.navigate(['home']);
    },
      err => {
        console.log(err);
      }

    )
  }

}
