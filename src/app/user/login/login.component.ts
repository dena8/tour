import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../core/service/user.service';

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
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  
  }

  get f(){
    return this.form.controls;
  }

  postLogin(){   
   
    this.userService.postLogin(this.form.value).subscribe(data=>{ 
      console.log(data);  
     // localStorage.setItem('token',data['token']);      
      localStorage.setItem('token',data);      
      localStorage.setItem('admin',JSON.stringify(data['isAdmin']));  
      this.router.navigate(['home']);
     },
     err=>{
       console.log(err);
      }    
      
    )
  }

}
