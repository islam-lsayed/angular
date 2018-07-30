import { Component, OnInit } from '@angular/core';
import { Persons } from '../Persons';



@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.css']
})
export class IslamComponent implements OnInit {





birthday = new Date(2018 , 7, 29);
mySalary = 5000;
myRate = 12.39;


  constructor() {}

  ngOnInit() {
}

}


