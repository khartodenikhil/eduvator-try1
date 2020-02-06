import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  // tslint:disable-next-line: member-ordering
  get firstName() {
    return this.personalInfoForm.get('firstName');
  }
  get middleName() {
    return this.personalInfoForm.get('middleName');
  }
  get lastName() {
    return this.personalInfoForm.get('lastName');
  }
  get personalEmail() {
    return this.personalInfoForm.get('personalEmail');
  }
  get parentEmail() {
    return this.personalInfoForm.get('parentEmail');
  }
  get phoneNumber() {
    return this.personalInfoForm.get('phoneNumber');
  }

  get zip() {
    return this.personalInfoForm.get('zip');
  }
  data = {
    country: [
      { cntry: 'CANADA' },
      { cntry: 'UK' },
      { cntry: 'ITALY' },
      { cntry: 'ARMENIA' },
      { cntry: 'GERMANY' }
    ], };
  // tslint:disable-next-line: member-ordering
  public errormessage = {
    firstName: [
      {type : 'required' , message: 'required'},
      {type : 'maxlength', message: 'less than 20 character'},
      // tslint:disable-next-line: quotemark
      {type : 'pattern' , message : "shouldn't contain space or number"},
    ],

    middleName: [
      {type : 'required' ,  message: 'required'},
      {type : 'maxlength' , message: 'less than 20 character'},
      // tslint:disable-next-line: quotemark
      {type : 'pattern' , message : "shouldn't contain space or number"},
    ],

    lastName: [
      {type : 'required' ,  message: 'required'},
      {type : 'maxlength' , message: 'less than 20 character'},
      // tslint:disable-next-line: quotemark
      {type : 'pattern' , message : "shouldn't contain space or number"},
    ],

    personalEmail: [
      {type : 'required' , message: 'email Id is required'},
      {type : 'invalid', message: 'Invalid Email Id'},
      {type : 'pattern' , message: 'email Id is not valid'},
    ],

    parentEmail: [
      {type : 'required' , message: 'email Id is required'},
      {type : 'invalid', message: 'Invalid Email Id'},
      {type : 'pattern' , message: 'email Id is not valid'},
    ],

    phoneNumber: [
      {type: 'required' , message: 'Phone number is required'},
      {type : 'pattern' , message: 'Enter valid phone number'},
      {type : 'maxLength' , message: 'Enter valid phone number'},
      {type : 'minLength' , message: 'Enter valid phone number'},
    ],

    zip: [
      {type: 'required' , message: 'Zip is required'},
      {type: 'maxLength' , message: 'Enter valid'},
      {type: 'pattern' , message: 'Enter Valid'},
      {type : 'minLength' , message: 'Enter valid zip'},
    ]
  };
  // tslint:disable-next-line: member-ordering
  personalInfoForm = this.formbuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        middleName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['' , Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        // tslint:disable-next-line: max-line-length
        personalEmail: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'), Validators.required, Validators.email])],
        // tslint:disable-next-line: max-line-length
        parentEmail: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'), Validators.required, Validators.email])],
        // tslint:disable-next-line: max-line-length
        phoneNumber: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}'), Validators.required])],
        // tslint:disable-next-line: max-line-length
        zip: ['', Validators.compose([Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]{7}'), Validators.required])]
    });

    logEvent(event) {
      console.log(this.firstName, this.lastName);
    }
  constructor(public formbuilder: FormBuilder) { }
  ngOnInit() {
  }

}
