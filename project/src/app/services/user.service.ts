import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.API_URL+"/api/user/signup";

  constructor(private _http : HttpClient) { }

  signup(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
}
