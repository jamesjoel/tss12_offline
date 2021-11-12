import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

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
    private _user : UserService
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
      // console.log(result);
    }, (err)=>{
      //console.log(err.error);
      if(err.error.type==1)
      {
        this.errorMsg="This Email Id is not registered !";
      }
    })
  }

}
