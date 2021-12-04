import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  teacherForm : FormGroup;
  checkForm=false;
  constructor(
    private _fb : FormBuilder,
    private _teacher : TeacherService,
    private _router : Router
  ) {
    this.teacherForm = this._fb.group({
      name : ["", Validators.required],
      salary : ["", Validators.required],
      city : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.teacherForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.teacherForm.value);
    this._teacher.save(this.teacherForm.value).subscribe(result=>{
      this._router.navigate(["/teacher"]);
    })
  }

}
