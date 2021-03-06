import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>("https://reqres.in/api/users?page=2");
  }

}
