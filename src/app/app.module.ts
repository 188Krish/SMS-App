import { AuthenticationService } from './service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashoardComponent } from './dashoard/dashoard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FeesComponent } from './fees/fees.component';
import { TransportComponent } from './transport/transport.component';
import { EventsComponent } from './events/events.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashoardComponent,
    HomeComponent,
    FeesComponent,
    TransportComponent,
    EventsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    RecaptchaModule,
    LoginModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
