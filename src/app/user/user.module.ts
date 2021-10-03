import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,  
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ])   
  ],
  exports:[
    LoginComponent,
    RegisterComponent,  
  
  ]
})
export class UserModule { }
