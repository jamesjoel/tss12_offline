import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DishService } from '../../../services/dish.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  allMenu:any[]=[];
  dishForm:FormGroup;
  checkForm:boolean=false;

  constructor(
    private _menu : MenuService,
    private _fb : FormBuilder,
    private _dish : DishService,
    private _router : Router
  ) {
      this._menu.getAll().subscribe((result)=>{
        this.allMenu=result;
      });
      this.dishForm = this._fb.group({
        menu : ["", Validators.required],
        name : ["", Validators.required],
        price : ["", Validators.required],
        detail : ["", Validators.required],
        image : ["", Validators.required]
      
      })
   }

  ngOnInit(): void {
  }

  submit(myfile:any){
    
    

    if(this.dishForm.invalid){
      
      this.checkForm=true;
      // return;
    }
    console.log(myfile.files[0]);
    if(myfile.files[0].size > (2*1024*1024)){
      // alert()
      this.checkForm = true;
      this.dishForm.controls.image.setErrors({ sizeErr : true });
      // console.log(this.dishForm.controls.image);

    }

    if(myfile.files[0].type != "image/jpg"){
      this.checkForm = true;
      this.dishForm.controls.image.setErrors({ typeErr: true });
    }


    return;
    // console.log(this.dishForm.value)
    this._dish.save(this.dishForm.value).subscribe((result)=>{
      this._router.navigate(["/admin/dishes"]);
    })
  }


  
}
