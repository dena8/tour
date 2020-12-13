import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from '../app/user/user.module'
import { CoreModule } from '../app/core/core.module'
// import { HeaderComponent } from './shared/footer/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';
//import { HomeComponent } from './sample/home/home.component';
import {SampleModule} from './sample/sample.module';
import {SharedModule} from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http';
import { TourModule } from './tour/tour.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { CategoryModule } from './category/category.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationHandlerService } from './core/interceptors/notification-handler.service'







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
    FontAwesomeModule,
    CategoryModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates:true
    }),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationHandlerService, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
