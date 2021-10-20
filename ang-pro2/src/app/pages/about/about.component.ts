import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  a = "rohit";
  b = true;
  x=false;

  z = 27;

  c=300;

  constructor() { 
    console.log("welcome");
  }

  ngOnInit(): void {
  }

}
