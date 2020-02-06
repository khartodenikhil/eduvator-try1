import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  get email(){
    return this.forgotpasswordform.get('email');
  }

  public errormessage = {
    email: [
      {type:'required',message:'Email is required'},
      {type:'pattern',message:'Please enter valid email address'}
    ]
  };
  forgotpasswordform = this.formbuilder.group({
    email: ['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]]
  });
  
  constructor(public formbuilder: FormBuilder) { }
  ngOnInit() {
    
  }
  submit()
  {
    
  }
  
}
