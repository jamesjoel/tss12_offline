import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private _upload : UploadService) { }

  ngOnInit(): void {
  }
  upload(file:any){
    // console.log(image.files[0]);
    let image = file.files[0];
    let form = new FormData(); // create a form data 
    form.append("img", image);

    this._upload.up(form).subscribe((result)=>{
      console.log(result);
    })
  }

}
