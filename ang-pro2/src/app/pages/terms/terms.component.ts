import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  name = "Vashnavi";
  address = "M. G. Road, Mumbai";
  path = "assets/images/vashnavi.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
