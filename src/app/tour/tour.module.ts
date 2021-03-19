import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TourCardComponent } from './tour-card/tour-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsComponent } from './details/details.component';
import { RandomComponent } from './random/random.component';
import { TourDescriptionComponent } from './tour-description/tour-description.component';
import {AdminGuard} from '../core/gards/admin.guard';
import {SampleModule} from '../sample/sample.module';
import { AuthGuardGuard } from '../core/gards/auth-guard.guard';
import {GuideGuard} from '../core/gards/guide.guard';
<<<<<<< HEAD
import { UpdateComponent } from './update/update.component';
=======
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd




@NgModule({
<<<<<<< HEAD
  declarations: [CreateComponent, TourCardComponent, DetailsComponent, RandomComponent, TourDescriptionComponent, UpdateComponent],
=======
  declarations: [CreateComponent, TourCardComponent, DetailsComponent, RandomComponent, TourDescriptionComponent],
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SampleModule,
    RouterModule.forChild([
      { path: 'create', component: CreateComponent,canActivate:[AuthGuardGuard,GuideGuard],  },
      { path: 'random', component: RandomComponent },
      {path:'tour-card', component:TourCardComponent},
<<<<<<< HEAD
      { path: 'description/:id', component: TourDescriptionComponent,canActivate:[AuthGuardGuard] },
      {path:'update/:id',component: UpdateComponent, canActivate:[AuthGuardGuard,GuideGuard]}      
=======
      { path: 'description/:id', component: TourDescriptionComponent,canActivate:[AuthGuardGuard] },      
>>>>>>> ba570204d9c5fa6c78a3ef0f98379330685212bd
    ])
  ],
  exports: [
    CreateComponent,
    DetailsComponent,
    TourCardComponent,      
  ]
})
export class TourModule { }
