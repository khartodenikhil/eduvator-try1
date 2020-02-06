import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  constructor(private formbuilder: FormBuilder) {}
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  get fname() {
    return this.profileForm.get('fname');
  }
    public errormessage = {
    fname: [
      {type : 'required' , message: 'school Name required'},
      {type : 'pattern' , message: 'school Name is not valid'},
    ],
    lname: [
      {type : 'required' , message: 'school Name required'},
      {type : 'pattern' , message: 'school Name is not valid'},
    ],
  };
  data = {
    person: [
      { fname: 'ABC', lname: 'XYZ',email_id: 'abc@gmail.com',phone: '7083307395' },
    ],
  };
  profileForm = this.formbuilder.group(
    {
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
    }
  );

  @ViewChild('slides',{static:false}) ionSlides: IonSlides;
  disablePrevBtn = true;
  disableNextBtn = false;
  disableSaveBtn = true;

  submit(){

  }
  ngOnInit() {
  }

}
