import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }
  data={
    kh:[
      {notification:'Your application approved for interview'},
      {notification:'Your application declined for interview'}
    ],
  };
  ngOnInit() {
  }

}
