import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './home/home.component';

//import {} from './user/user.module'


const routes: Route[] = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'user',loadChildren:'./user/user.module#UserModule'}, 
  {path:'about', component:AboutComponent},
  {path:'tour',loadChildren:'./tour/tour.module#TourModule'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
