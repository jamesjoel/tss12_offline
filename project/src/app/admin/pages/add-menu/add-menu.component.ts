import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';



@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  myForm : FormGroup;
  constructor(private _fb : FormBuilder) { 
    this.myForm = this._fb.group({
      name : [""]
    })
  }

  ngOnInit(): void {
  }

}
