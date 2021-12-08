import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() name:any;
  @Input() address:any;
  @Input() path:any;


  constructor() { }

  ngOnInit(): void {
  }

}
