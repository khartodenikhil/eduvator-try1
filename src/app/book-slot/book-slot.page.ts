import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.page.html',
  styleUrls: ['./book-slot.page.scss'],
})
export class BookSlotPage implements OnInit {

  selectedDate: string = '';
  today: Date;
  segment: string;
  constructor() { }
  date_selection() {
    const selectedDate = new Date(this.selectedDate);
    const today = new Date(Date.now());
    console.log(today);
    return this.today;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }
}