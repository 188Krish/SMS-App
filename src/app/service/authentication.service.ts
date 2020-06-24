import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticationLogin(email: string, password: string) {
    if (email === 'saikrishna.gourisetty@gmail.com' && password === 'password') {
      sessionStorage.setItem('email', email);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLogedIn(email: string) {
    const user = sessionStorage.getItem(email);
    console.log(!(user === null));
    return !(user === null);
  }

  userLogout() {
    sessionStorage.removeItem('email');
  }

}
