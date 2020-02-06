import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.page.html',
  styleUrls: ['./book-slot.page.scss'],
})
export class BookSlotPage implements OnInit {

  selectedDate: string = '';
  today: Date;
  segment: string;
  minDate: string = new Date().toISOString();
  maxDate: any = (new Date()).getFullYear() + 3;
  data = {
    day_part: [
      {day_part1: 'morning', day_part2: 'Afternoon', day_part3: 'Evening'},
    ],
    part1_time: [{ time1: '10:00 AM', time2: '11:00 AM'}],
    part2_time: [{time1: '01:00 PM', time2: '02:00 PM'}],
    part3_time: [{ time1: '04:00 PM', time2: '05:00 PM'}],
   };
  constructor(public alertController: AlertController) { }
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
  onclicksubmit()
  {

  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to Book <strong>appointment?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'no',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm BOOK: Nope');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
