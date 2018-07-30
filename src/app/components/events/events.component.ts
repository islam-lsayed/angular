import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  myName:string = 'ahmed' ;
  check = true ;

    myClick() {

    this.check = !this.check;
  }
  constructor() { }

  ngOnInit() {
  }

}
