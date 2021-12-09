import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  allPhoto:any=[];
  totalPages = 5;
  recordPerPage:number = 100;

  pageno:any;
  total:any;

  constructor(
    private _photo : PhotosService,
    private _actRoute : ActivatedRoute
  ) {
    
    if(this._actRoute.snapshot.paramMap.get("pageno"))
    {
      // console.log("hello");
      this.pageno = this._actRoute.snapshot.paramMap.get("pageno"); // 3
      this.total = this._actRoute.snapshot.paramMap.get("total");
      this.pageno = this.pageno*this.recordPerPage;

      console.log(this.pageno);
      console.log(this.total);
      this._photo.getAll(this.pageno, this.total).subscribe(res=>{
        this.allPhoto = res;
      })
    }
    else{
      // console.log("welcome");
      this._photo.getAll(0, 100).subscribe(res=>{
        this.allPhoto = res;
      })
    }

   }

  ngOnInit(): void {
  }

}
