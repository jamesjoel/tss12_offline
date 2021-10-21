import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/services/test.service';


interface Pro{
  id : number;
  title : string;
  price : number;
  description : string;
  image : string;
  rating : any;
}

// the "@" sign is used for "Decorator", 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:Pro[]=[];

  constructor(private _http : HttpClient, private _a : TestService) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe((result)=>{
      // console.log(result);
      this.product = result;
      // this.product = result.data;
    });
  }

  ngOnInit(): void {
  }

}
