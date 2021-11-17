import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginForm : FormGroup;
  checkForm=false;

  errorMsg="";

  constructor(
    private _fb : FormBuilder,
    private _loginServ : LoginService,
    private _router : Router
  ) {
    this.adminLoginForm = this._fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })

   }

  ngOnInit(): void {
  }

  submit(){
    if(this.adminLoginForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.adminLoginForm.value);
    this._loginServ.do_login(this.adminLoginForm.value).subscribe((result)=>{
      // console.log(result);
      this._router.navigate(["/admin/dashboard"])
    }, err=>{
      // console.log(err.error);
      if(err.error.type==1)
      {
        this.errorMsg="This Username and Password is Incorrect !";
      }
      if(err.error.type==2)
      {
        
        this.errorMsg="This Password is Incorrect !";
      }
    })
  }
}
