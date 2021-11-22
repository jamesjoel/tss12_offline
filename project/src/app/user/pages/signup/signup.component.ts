import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

import { checkNum, checkLength, checkPass } from '../../../helper/custome.validation';


// FormGroup is a interface
// FormBuilder is a service
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;

  checkForm:boolean=false;

<<<<<<< HEAD
        constructor(private _fb:FormBuilder) {
          this.signupForm = this._fb.group({
            full_name: ["", Validators.required],
            email : ["", Validators.required],
            password: ["", Validators.required],
            re_password: ["", Validators.required],
            address: ["", Validators.required],
            city: ["", Validators.required],
            contact: ["", Validators.required]
          });
        }
=======
  constructor(
    private _fb:FormBuilder,
    private _user : UserService,
    private _router : Router
    ) {
    this.signupForm = this._fb.group({
      full_name: ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      re_password: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      contact: ["", Validators.required]
    },
    {
      validator : [checkNum(), checkLength(), checkPass()]
    });
   }
>>>>>>> d55cc92bef2d2d21f761281fb5c35b5915d3573e

        ngOnInit(): void {
        }

          signup(){
            if(this.signupForm.invalid){
              this.checkForm=true;
              return;
            }
          
        }
        
      } 
