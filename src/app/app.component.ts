import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sms-ui';
  constructor(private loginService: AuthenticationService, private router: Router) { }

  isUserLogedIn = this.loginService.isUserLogedIn();

  userlogout() {
    this.loginService.userLogout();
    this.router.navigate(['login']);
  }
}
