import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

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

  constructor(private y : TestService) { 
    console.log("welcome");
  }

  ngOnInit(): void {
  }

  demo1(){
    // console.log("welcome");
    this.y.demo();
  }

}
