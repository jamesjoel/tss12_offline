import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkLength, checkNum } from '../../helpers/custome.validation';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm:FormGroup;
  checkForm=false;

  constructor(
    private _fb : FormBuilder
  ) {
    this.myForm = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      contact : ["", Validators.required]
    },
    {
      validator : [checkNum(), checkLength()]
    }
    )
    
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.myForm.invalid){
      this.checkForm = true;
      return;
    }
    console.log(this.myForm.value);
  }

}
