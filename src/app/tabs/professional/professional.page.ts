import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.page.html',
  styleUrls: ['./professional.page.scss'],
})


export class ProfessionalPage implements OnInit {
  countries: any;
  get orgnizationEmail_id() {
    return this.professionalForm.get('orgnizationEmail_id');
  }
  get orgnizationPhoneNo() {
    return this.professionalForm.get('orgnizationPhoneNo');
  }
  get pastExperience() {
    return this.professionalForm.get('pastExperience');
  }
  get orgnizationName() {
    return this.professionalForm.get('pastorgnizationName');
  }
  public errormessage = {
    orgnizationEmail_id: [
      { type: 'required', message: 'Email Id is required' },
      { type: 'invalid', message: 'Invalid Email Id' },
      { type: 'pattern', message: 'Email Id is not valid' },
    ],
    orgnizationPhoneNo: [
      { type: 'required', message: 'Contact Details Required' },
      { type: 'invalid', message: 'Invalid Contact Number' },
      { type: 'pattern', message: 'Invalid Contact Number' },
    ],
    orgnizationName: [
      { type: 'required', message: 'orgnization Name Required' },
    ]
  };
  data = {
    country: [
      { cntry: 'CANADA' },
      { cntry: 'UK' },
      { cntry: 'ITALY' },
      { cntry: 'ARMENIA' },
      { cntry: 'GERMANY' }
    ],
    department:[
      { dept: 'Cook' },
      { dept: 'Waiter' },
      { dept: 'Guide' },
      { dept: 'Cook' },
    ]
  };
  professionalForm = this.formbuilder.group(
    {
      // tslint:disable-next-line: max-line-length
      orgnizationEmail_id: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$')]],
      orgnizationPhoneNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      pastExperience: '',
      orgnizationName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{30}')]],
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
