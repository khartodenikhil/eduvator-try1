import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.page.html',
  styleUrls: ['./academic.page.scss'],
})

export class AcademicPage implements OnInit {
  @ViewChild('slides',{static:false}) ionSlides: IonSlides;
  disablePrevBtn = true;
  disableNextBtn = false;
  disableSaveBtn = true;


  doCheck() {
    let prom1 = this.ionSlides.isBeginning();
    let prom2 = this.ionSlides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
      data[1] ? this.disableSaveBtn = false : this.disableSaveBtn = true;

    });
  }
  constructor() {}
  next(slides) {
    slides.slideNext(); // slide to next
  }
  previous(slides) {
    slides.slidePrev(); // slide to next
  }
  ngOnInit() {
  }

}
