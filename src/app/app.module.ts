import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '../app/user/user.module';
import { CoreModule } from '../app/core/core.module';
import { SampleModule } from './sample/sample.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TourModule } from './tour/tour.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { CategoryModule } from './category/category.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationHandlerService } from './core/interceptors/notification-handler.service';
import { JwtModule } from '@auth0/angular-jwt';
import { BuyModule } from './buy/buy.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from './+store/auth/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers,metaReducers} from './+store/meta-reducer';

@NgModule({
  declarations: [AppComponent],
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
      preventDuplicates: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['http://localhost:5000'],
        skipWhenExpired: true,
      },
    }),
    StoreModule.forRoot(   
    reducers,
    {metaReducers}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationHandlerService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
