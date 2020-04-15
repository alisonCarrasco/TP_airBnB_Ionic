import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   _userIsVerified = false;

  constructor() { }

  login()
  {
    this._userIsVerified = true;
  }
  logout()
  {
    this._userIsVerified = false;
  }

}
