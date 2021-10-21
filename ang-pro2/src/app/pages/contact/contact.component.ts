import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  color = ["red", "green", "blue", "yellow", "pink"];

  data = [
    {
      name : "rohit",
      age : 25,
      city : "mumbai"
    },
    {
      name: "jaya",
      age: 25,
      city: "pune"
    },
    {
      name: "nidhi",
      age: 22,
      city: "mumbai"
    },
    {
      name: "amar",
      age: 28,
      city: "indore"
    }
  ]



  constructor(private a : TestService) { }

  ngOnInit(): void {
  }

  indore(){
    this.a.demo();
  }

}
