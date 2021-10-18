import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a = "rohit";
  b = "amar";
  c = "nidhi";
  arr = ["red", "green", "blue"];
  obj = { city : "indore" };
  data = [
    {
      name : "jaya",
      age : 25,
      city : "indore"
    },
    {
      name : "nilesh",
      age : 30,
      city : "mumbai"
    }
  ]

  constructor() {
    console.log("welcome");
   }

  ngOnInit(): void {
  }
  demo(){
    console.log("hello");
  }  
  demo2(){
    console.log("dubble click");
  }
  demo3(){
    console.log("Mouse Over");
  }
  demo4(){
    console.log("Mouse Move");
  }
  demo5(){
    console.log("Mouse Out");
  }
  demo6(){
    console.log("Key Down");
  }
  demo7(){
    console.log("Key Up");
  }

}
