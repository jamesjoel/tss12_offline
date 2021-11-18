import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router : Router
  ) { }

  isLoggedIn(){
    if(localStorage.getItem("jwt_token")){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("jwt_token");
    this._router.navigate(["/"]);
  }
}
