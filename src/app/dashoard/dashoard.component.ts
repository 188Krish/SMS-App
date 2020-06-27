import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.sass']
})
export class DashoardComponent implements OnInit {

  constructor(private loginService: AuthenticationService, private router: Router) { }

  isUserLogedIn = this.loginService.isUserLogedIn();
  ngOnInit(): void {
  }

  userlogout() {
    this.loginService.userLogout();
    this.router.navigate(['login']);
  }

}
