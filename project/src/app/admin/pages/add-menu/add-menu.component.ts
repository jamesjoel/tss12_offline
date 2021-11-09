import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menuForm : FormGroup;
  checkForm=false;
  constructor(private _fb : FormBuilder) { 
    this.menuForm = this._fb.group({
      name : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.menuForm.invalid){
      this.checkForm=true;
      return;
    }
  }

}
