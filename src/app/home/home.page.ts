import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure to cancel appointment?',
      buttons: ['NO','YES']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to cancel <strong>appointment?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'no',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
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
  data={
    list:[
      {booked:1,date:'26-2-2019',day:'Wednesday',slot:'12:00 PM',bname:'Cancel appointment'}
    ],
  };  
  
}
