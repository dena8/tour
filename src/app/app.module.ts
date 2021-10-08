import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '../app/user/user.module';
import { CoreModule } from '../app/core/core.module';
import {SampleModule} from './sample/sample.module';
import {SharedModule} from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TourModule } from './tour/tour.module';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { CategoryModule } from './category/category.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationHandlerService } from './core/interceptors/notification-handler.service';
import{JwtModule} from '@auth0/angular-jwt';
import {BuyModule} from './buy/buy.module';

import {StoreModule} from '@ngrx/store';
import {reducer as cartReducer} from './+store/buy/reducer';
import { EffectsModule } from '@ngrx/effects';
import {TourEffects} from './+store/tour/effects';
import {tourReducer} from './+store/tour/reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 

@NgModule({
  declarations: [
    AppComponent,    
    ],
  imports: [
    BrowserModule,
    UserModule,
    CoreModule,
    SampleModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    TourModule,  
    CategoryModule,
    BrowserAnimationsModule,
    BuyModule,  
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates:true
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem('token');
        },
        allowedDomains:['http://localhost:5000'],
        skipWhenExpired:true,
      }
    }),
    StoreModule.forRoot({
       cart: cartReducer,
       'tour': tourReducer,
      // 'global':globalReducer
    }),
      EffectsModule.forRoot([TourEffects]),
      //,GlobalEffects
    StoreDevtoolsModule.instrument({}),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationHandlerService, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
