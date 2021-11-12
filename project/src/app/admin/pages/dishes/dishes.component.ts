import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  allDish:any[]=[];
  constructor(
    private _dish : DishService
  ) {
    this._dish.getAll().subscribe((result)=>{
      this.allDish = result;
    })
   }

  ngOnInit(): void {
  }

}
