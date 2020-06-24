import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  canActivate() {
    if (this.authService.isUserLogedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
