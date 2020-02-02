import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.page.html',
  styleUrls: ['./enrollment-list.page.scss'],
})
export class EnrollmentListPage implements OnInit {

  constructor() { }
  data={
    list:[
      {enrollmentid:'E1701',fname:'Amol',lname:'Marathe'},
      {enrollmentid:'E1702',fname:'Aditya',lname:'Kawale'},
      {enrollmentid:'E1703',fname:'Nikhil',lname:'Khartode'},
      {enrollmentid:'E1704',fname:'Pratik',lname:'Dhore'}
    ],
  };  
  ngOnInit() {
  }

}
