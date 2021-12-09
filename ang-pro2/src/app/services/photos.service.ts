import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private _http : HttpClient
  ) { }

  getAll(s:any, l:any){
    return this._http.get<any>("http://localhost:3000/api/comment/"+s+"/"+l);
  }
}
