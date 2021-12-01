import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  allMenu:any[]=[];
  menu:any;
  
  constructor(private _menu : MenuService) {
    this._menu.getAll().subscribe((result)=>{
      // console.log(result);
      this.allMenu = result;
    })
   }

  ngOnInit(): void {
  }

  askDelete(obj:any){
    console.log(obj);
    this.menu = obj;
  }
  confDelete(btn:Element){
    // console.log(btn.eventListeners);
    // console.log(btn);
    // btn.nativeElement.click();
    this._menu.delete(this.menu).subscribe((result)=>{
      console.log(result);
    
    })
  }
}
