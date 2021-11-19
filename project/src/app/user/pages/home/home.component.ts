import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allDish:any=[];

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
