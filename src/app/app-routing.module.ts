import { AppComponent } from './app.component';
import { TransportComponent } from './transport/transport.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesComponent } from './fees/fees.component';

const routes: Routes = [
  {
    path: 'app', component: AppComponent,
    // canActivate: [AuthGaurdService],
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
