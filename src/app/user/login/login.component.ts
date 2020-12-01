import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/core/constants/global-constants';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
  }

  get f(){
    return this.form.controls;
  }

  postLogin(){    
    this.userService.postLogin(this.form.value).subscribe(user=>{
     console.log(user);
      sessionStorage.setItem('userId',user._id);
      sessionStorage.setItem('email',user.email);
      GlobalConstants.isLogged = true;
      this.router.navigate(['home']);
     },
     err=>{
       console.log(err);
      }    
      
    )
  }

}
