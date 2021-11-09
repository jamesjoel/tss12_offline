import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allMenu:any[]=[];
  constructor(private _menu : MenuService) {
    this._menu.getAll().subscribe((result)=>{
      // console.log(result);
      this.allMenu = result;
    })
   }

  ngOnInit(): void {
  }

}
