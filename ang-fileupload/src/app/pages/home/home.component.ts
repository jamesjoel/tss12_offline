import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="";

  constructor(
    private _fileUpload : FileUploadService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }
  upload(obj:any){
    // console.log(obj.files[0]);
    let file = obj.files[0];
    let form = new FormData();
    var formdata = { name : this.name };
    form.append("image", file);
    form.append("data", JSON.stringify(formdata));
    

    this._fileUpload.do_upload(form).subscribe((result)=>{
      console.log(result);
      this._router.navigate(["/about"]);
    })
  }

}
