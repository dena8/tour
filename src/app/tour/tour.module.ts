import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TourCardComponent } from './tour-card/tour-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsComponent } from './details/details.component';
import { RandomComponent } from './random/random.component';
import { TourDescriptionComponent } from './tour-description/tour-description.component';
import { CartComponent } from './cart/cart.component';
import {AdminGuard} from '../core/gards/admin.guard';




@NgModule({
  declarations: [CreateComponent, TourCardComponent, DetailsComponent, RandomComponent, TourDescriptionComponent, CartComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create', component: CreateComponent },
      { path: 'random', component: RandomComponent },
      { path: 'description/:id', component: TourDescriptionComponent },
      { path: 'basket', component: CartComponent },
    ])
  ],
  exports: [
    CreateComponent,
    DetailsComponent,
    TourCardComponent,
    CartComponent,
  ]
})
export class TourModule { }
