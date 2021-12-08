import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  name = "garavit";
  address = "New Market, Bhopal";
  path = "assets/images/garvit.jpg";

  
  constructor() { }

  ngOnInit(): void {
  }

}
