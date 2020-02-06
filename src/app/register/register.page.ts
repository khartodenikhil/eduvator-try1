import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  showpassword = false;
  showconfpassword = false;
  passwordIcon = 'visibility_off';
  confpasswordIcon = 'visibility_off';
  get fname() {
    return this.registrationForm.get('fname');
  }
  get lname() {
    return this.registrationForm.get('lname');
  }
  get email_id() {
    return this.registrationForm.get('email_id');
  }
  get pswd() {
    return this.registrationForm.get('pswd');
  }
  get conf_pswd() {
    return this.registrationForm.get('conf_pswd');
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

    pswd: [
      {type : 'required' , message: 'Password is required'},
      {type : 'minlength' , message: 'Password between 6 to 15 char'},
      {type : 'maxlength' , message: 'Password between 6 to 15 char'},
    ],
    conf_pswd: [
      {type : 'required' , message: 'Confirm Password is required'},
      {type : 'minlength' , message: 'Password between 6 to 15 char'},
      {type : 'maxlength' , message: 'Password between 6 to 15 char'},
      {type : 'areEqual' , message: 'Confirm Password & Password are not same'},
    ]
  };
  registrationForm = this.formbuilder.group(
    {
      fname : ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]],
      email_id: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$')]],
      pswd: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]],
      conf_pswd: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]],
    } , {validator: this.checkIfMatchingPasswords('pswd', 'conf_pswd')}
  );

checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            const passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true});
            } else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
}
constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
  }
  togglePassword() {
    this.showpassword = ! this.showpassword;
    this.passwordIcon = this.passwordIcon === 'visibility_off' ? 'visibility' : 'visibility_off';
  }
  toggleConfPassword() {
    this.showconfpassword = ! this.showconfpassword;
    this.confpasswordIcon = this.confpasswordIcon === 'visibility_off' ? 'visibility' : 'visibility_off';
  }
   submit() {
    console.log();
    if (true) {
    }
  }
}
