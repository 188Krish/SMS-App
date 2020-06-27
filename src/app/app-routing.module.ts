import { TransportComponent } from './transport/transport.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { DashoardComponent } from './dashoard/dashoard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesComponent } from './fees/fees.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashoardComponent,
    canActivate: [AuthGaurdService],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'fees',
        component: FeesComponent
      },
      {
        path: 'transport',
        component: TransportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
