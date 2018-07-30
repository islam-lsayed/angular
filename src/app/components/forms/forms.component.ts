import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
// name:string = "your first name ";
lname:string = "your last name ";
age:number = 0;
name:string = "" ;

myShop:string[] = ['apple','orang','watermilon'];

mySubmit() {

  this.myShop.push(this.name);
  this.name = "";

}

  constructor() { }

  ngOnInit() {
  }

}
