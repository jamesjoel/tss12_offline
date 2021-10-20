import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  a = "rohit";
  b="btn-info";

  type="password";

  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    if(this.a=="rohit"){
      this.a="Amar";
      this.b="btn-danger";
      
    }
    else{
      this.a="rohit";
      this.b="btn-info";

    }
  }
  demo2(){
    if(this.type=="password")
      this.type="text";
      else
      this.type="password";

  }


}
