import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  allMenu:any[]=[];
  // dishForm

  constructor(
    private _menu : MenuService
  ) {
      this._menu.getAll().subscribe((result)=>{
        this.allMenu=result;
      })
   }

  ngOnInit(): void {
  }

}
