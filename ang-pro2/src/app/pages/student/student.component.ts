import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  a = "rohit";
  b = "indore";

  userData = [
    {
      name : "Garvit",
      detail : "hello world"
    },
    {
      name : "Ram",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet est deleniti explicabo vero magnam"
    },
    {
      name : "James",
      detail : "some data over here"
    },
    {
      name: "Vinita",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
