import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // showHeader: boolean = false;
  display='none';
  title = 'ecommerce';
  location: Location;
  reference:string;final:any;
  constructor (private http: HttpClient, location: Location) {
    // this.location = location;
    // this.reference = window.location.hash;
    // console.log(this.reference);
    // this.final = this.reference.replace("#/",'');
    // console.log(this.final);
    // if (window.location.hash) {
    //   // alert('hash is present');
    //   this.openModal();
    // }else {
    //   alert('hash is not present');
    // }
  }

  openModal(){
    this.display='block'; 
 }

 onCloseHandled(){
  this.display='none'; 
  }

}
