import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public optionsPages = [   
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'log-out'
    },
  ];
    public appPages = [
      {
        title: 'Enrollment',
        url: '/enrollment',
        icon: 'create'
      },
      {
        title: 'Resume',
        url: '/resume',
        icon: 'document'
      },
      {
        title: 'Book Slot',
        url: '/book-slot',
        icon: 'alarm'
      },
  
  
    ];
  
    public contactPages = [
      {
        title: 'Contact Us',
        url: '/home',
        icon: 'call'
      },
      {
        title: 'Feedback',
        url: '/home',
        icon: 'star-half'
      },
  
  
  
    ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.splashScreen.hide();
    });
  }
}
