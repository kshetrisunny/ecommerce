import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 17.385044;
  lng: number = 78.486671;

  constructor() { }

  ngOnInit() {
  }

}
