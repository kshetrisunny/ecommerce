import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  carouselBanner:any;

  items=[
    'assets/images/banner/big-img/1.png',
    'assets/images/banner/big-img/2.png',
  ];
  constructor() { }


  ngOnInit() {

  }
}
