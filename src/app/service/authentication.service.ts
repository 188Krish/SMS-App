import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticationLogin(email: string, password: string) {
    if (email === 'saikrishna.gourisetty@gmail.com' && password === 'password') {
      localStorage.setItem('email', email);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLogedIn() {
    const user = localStorage.getItem('email');
    console.log(!(user === null));
    return !(user === null);
  }

  userLogout() {
    localStorage.removeItem('email');
  }

}
