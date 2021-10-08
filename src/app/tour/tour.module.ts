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
import { UpdateComponent } from './update/update.component';
import {StoreModule} from '@ngrx/store';
import {globalReducer} from '../+store/global/reducer';
import { EffectsModule } from '@ngrx/effects';
import {GlobalEffects} from '../+store/global/effects';



@NgModule({
  declarations: [CreateComponent, TourCardComponent, DetailsComponent, RandomComponent, TourDescriptionComponent, UpdateComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SampleModule,
    RouterModule.forChild([
      { path: 'create', component: CreateComponent,canActivate:[AuthGuardGuard,GuideGuard],  },
      { path: 'random', component: RandomComponent },
      {path:'tour-card', component:TourCardComponent},
      {path: 'description/:id', component: TourDescriptionComponent,canActivate:[AuthGuardGuard] },
      {path:'update/:id',component: UpdateComponent, canActivate:[AuthGuardGuard,GuideGuard]}      
    ]),
    StoreModule.forFeature('global',globalReducer),
    EffectsModule.forFeature([GlobalEffects])
  ],
  exports: [
    CreateComponent,
    DetailsComponent,
    TourCardComponent,      
  ]
})
export class TourModule { }
