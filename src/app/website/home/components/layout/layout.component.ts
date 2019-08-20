import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // autoplay: 3000,
      spaceBetween: 30
    });
  }

}
