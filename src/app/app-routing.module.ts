import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AuthGuardGuard} from './core/gards/auth-guard.guard'
import { GuideGuard } from './core/gards/guide.guard';




const routes: Route[] = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'sample',loadChildren:'./sample/sample.module#SampleModule'},  
  {path:'user',loadChildren:'./user/user.module#UserModule'}, 
  {path:'tour',loadChildren:'./tour/tour.module#TourModule'},
  {path:'category',loadChildren:'./category/category.module#CategoryModule',canActivateChild:[AuthGuardGuard,GuideGuard]},
  {path:'buy',loadChildren:'./buy/buy.module#BuyModule',canActivateChild:[AuthGuardGuard]},
<<<<<<< HEAD
  
=======
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd

  { path: '**', redirectTo: '' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
