import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-show-dish',
  templateUrl: './show-dish.component.html',
  styleUrls: ['./show-dish.component.css']
})
export class ShowDishComponent implements OnInit {

  @Input() x:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
