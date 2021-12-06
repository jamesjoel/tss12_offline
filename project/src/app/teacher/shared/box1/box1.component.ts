import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {

  @Input() name:any;
  constructor() { }

  ngOnInit(): void {
  }

}
