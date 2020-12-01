import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from '../app/user/user.module'
import {CoreModule} from '../app/core/core.module'
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
//import { CreateComponent } from './tour/create/create.component';
import {TourModule} from './tour/tour.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
     
  ],
  imports: [
    BrowserModule, 
    UserModule,
    CoreModule,    
    AppRoutingModule,
    HttpClientModule,
    TourModule,
   // ReactiveFormsModule
   
  ],  
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
