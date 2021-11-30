import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  allImages:any=[];

  constructor(
    private _fileUpload : FileUploadService
  ) {
    this._fileUpload.getAll().subscribe((result)=>{
      this.allImages = result;
    })
   }

  ngOnInit(): void {
  }


}
