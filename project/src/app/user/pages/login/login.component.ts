import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  checkForm = false;
  errorMsg="";
  constructor(
    private _fb : FormBuilder,
    private _user : UserService,
    private _router : Router
  ) {
    this.loginForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid){
      this.checkForm = true;
      return;
    }
    // if status is 200 serise then data come into "result"
    // but if status is 400 serise then data come into another call back "err" object.
    this._user.do_login(this.loginForm.value).subscribe((result)=>{
      // console.log("---------------");
      // console.log(result);
      localStorage.setItem("jwt_token", result.token);
      this._router.navigate(["/my-account"]);
    }, (err)=>{
      console.log(err);
      if(err.error.type==1)
      {
        this.errorMsg="This Email Id is not registered !";
      }
      if(err.error.type==2)
      {
        this.errorMsg="This Password is Incorrect !";

      }
    })
  }

}
