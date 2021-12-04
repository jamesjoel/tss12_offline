import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

interface Teacher{
  _id? : string;
  name : string;
  salary : number;
  city : string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn:any;

  allTeacher : Teacher[]=[];
  teacher!:Teacher;
  constructor(private _teacher : TeacherService) {
    this._teacher.getAll().subscribe(result=>{
      this.allTeacher = result;
    })
   }

  ngOnInit(): void {
  }
  askDelete(obj:Teacher){
    this.teacher = obj;
  }
  confDelete(){
    this._teacher.delete(this.teacher).subscribe(result=>{
      
      this.closeBtn.nativeElement.click();
      let n = this.allTeacher.indexOf(this.teacher);
      this.allTeacher.splice(n, 1);
    })
  }

}
