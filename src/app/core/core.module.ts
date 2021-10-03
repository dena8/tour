import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExistValidatorDirective } from './directive/exist-validator.directive';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [ExistValidatorDirective],
  imports: [
    CommonModule,
    RouterModule,    
  ],
  exports:[
  ExistValidatorDirective,
 
  ]
})
export class CoreModule { }
