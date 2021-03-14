import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  anio: number = new Date().getFullYear();

  @ViewChild(IonSlides) slides: IonSlides;

  slideToNext() {
    this.slides.slideTo(0)
  }

  slideToNext1() {
    this.slides.slideTo(1)
  }
  slideToNext2() {
    this.slides.slideTo(2)
  }
  slideToNext3() {
    this.slides.slideTo(3)
  }
  slideToNext4() {
    this.slides.slideTo(4)
  }
  slideToNext5() {
    this.slides.slideTo(5)
  }
  slideToNext6() {
    this.slides.slideTo(6)
  }

  constructor() { }

  ngOnInit() {

  }

}
