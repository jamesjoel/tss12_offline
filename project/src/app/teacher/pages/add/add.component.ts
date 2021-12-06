import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {
    this.teacherForm = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      salary : ["", Validators.required],
      city : ["", Validators.required]
    });

    if(this._actRoute.snapshot.paramMap.get("id")){
      let id = this._actRoute.snapshot.paramMap.get("id");
      this._teacher.get(id).subscribe(result=>{
        // console.log(result);
        this.teacherForm.controls._id.setValue(result._id);
        this.teacherForm.controls.name.setValue(result.name);
        this.teacherForm.controls.salary.setValue(result.salary);
        this.teacherForm.controls.city.setValue(result.city);
      })
    }

   }

  ngOnInit(): void {
  }

  submit(){
    if(this.teacherForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.teacherForm.value);
    if(this.teacherForm.controls._id.value){
      this._teacher.update(this.teacherForm.value).subscribe(result=>{
        this._router.navigate(["/teacher"]);

      })
    }else{

      this._teacher.save(this.teacherForm.value).subscribe(result=>{
        this._router.navigate(["/teacher"]);
      })
    }
  }

}
