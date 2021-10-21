import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  name:string="rohit";

  constructor() { }

  demo(){
    console.log("hello");
  }
}
