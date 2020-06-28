import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  inValidLogin = false;
  recaptacha: any[];

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  resolved(captchaResponse: any[]) {
    this.recaptacha = captchaResponse;
    console.log(this.recaptacha);
  }

  loginUser() {
    if ((this.loginservice.authenticationLogin(this.email, this.password))) {
      this.router.navigate(['app']);
      this.inValidLogin = false;
    }
    else {
      this.inValidLogin = true;
    }
  }

}
