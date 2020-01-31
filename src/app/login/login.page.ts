import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.formBuilder.group({

    username: ["",[Validators.required , Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
    password:["",[Validators.required , Validators.maxLength(15),Validators.minLength(6)]],
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
  
  public errorMessages = {
    username:[
      {type:'required',message:'Username is required'},
      {type:'pattern',pattern:'Please enter valid email address'}
    ],

    password:[
      {type:'required',message:'Password is required'},
      {type:'maxlength',message:'Minimum 6 characters & Maximum 15 characters'}
    ]
  }
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {}

  public submit(){
    console.log(this.loginForm.value);
  }

}
