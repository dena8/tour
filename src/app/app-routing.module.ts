import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AuthGuardGuard} from './core/gards/auth-guard.guard'
import { GuideGuard } from './core/gards/guide.guard';



const routes: Route[] = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'sample',loadChildren:() => import('./sample/sample.module').then(m => m.SampleModule)},  
  {path:'user',loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  {path:'tour',loadChildren:() => import('./tour/tour.module').then(m => m.TourModule)},
  {path:'category',loadChildren:() => import('./category/category.module').then(m => m.CategoryModule),canActivateChild:[AuthGuardGuard,GuideGuard]},
  {path:'buy',loadChildren:() => import('./buy/buy.module').then(m => m.BuyModule),canActivateChild:[AuthGuardGuard]},
  

  { path: '**', redirectTo: '' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

