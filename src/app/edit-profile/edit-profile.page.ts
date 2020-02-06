
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  showpassword = false;
  showconfpassword = false;
  passwordIcon = 'visibility_off';
  confpasswordIcon = 'visibility_off';
  get fname() {
    return this.editprofileForm.get('fname');
  }
  get lname() {
    return this.editprofileForm.get('lname');
  }
  get email_id() {
    return this.editprofileForm.get('email_id');
  }
  public errormessage = {
    fname: [
      {type : 'required' , message: 'first name is required'},
      {type : 'maxlength', message: 'first name should be less than 20 character'},
      {type : 'pattern' , message : 'first name dosnt cotain space or number'},
    ],

    lname: [
      {type : 'required' ,  message: 'lastname is required'},
      {type : 'maxlength' , message: 'last name should be less than 20 character'},
      {type : 'pattern' , message : 'first name dosnt cotain space or number'},
    ],

    email_id: [
      {type : 'required' , message: 'email Id is required'},
      {type : 'invalid', message: 'Invalid Email Id'},
      {type : 'pattern' , message: 'email Id is not valid'},
    ],
  };
  editprofileForm = this.formbuilder.group(
    {
      fname : ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]],
      email_id: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$')]],
      } 
  );

constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
  }
  
   submit() {
    console.log();
    if (true) {
    }
  }
}

