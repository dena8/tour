import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './sample/about/about.component';
import { HomeComponent } from './sample/home/home.component';
import {AuthGuardGuard} from './core/gards/auth-guard.guard'
import { TourCardComponent } from './tour/tour-card/tour-card.component';




const routes: Route[] = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'user',loadChildren:'./user/user.module#UserModule'}, 
  {path:'about', component:AboutComponent },
  {path:'tour',loadChildren:'./tour/tour.module#TourModule',canActivateChild:[AuthGuardGuard]},
  {path:'tour-card',component:TourCardComponent},  
  {path:'category',loadChildren:'./category/category.module#CategoryModule',canActivateChild:[AuthGuardGuard]},
  {path:'buy',loadChildren:'./buy/buy.module#BuyModule'},

  { path: '**', redirectTo: '' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
