import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
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
    });
   }
>>>>>>> c84471b57fc16b9bd27d7b74d6af40084b888a71

        ngOnInit(): void {
        }

<<<<<<< HEAD
          signup(){
            if(this.signupForm.invalid){
              this.checkForm=true;
              return;
            }
          
        }
        
      } 
=======
  signup(){
    if(this.signupForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.signupForm.value);
    this._user.signup(this.signupForm.value).subscribe((result)=>{
      // console.log(result);
      this._router.navigate(["/login"]);
    })
    
  }

}
>>>>>>> c84471b57fc16b9bd27d7b74d6af40084b888a71
