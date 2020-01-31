import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {



  constructor(private formBuilder:FormBuilder) { }



  connection_form = this.formBuilder.group({
    skypeid:[""],
    linkedin:[""],
    passport:["",[Validators.required,Validators.maxLength(8),Validators.pattern("^[A-Z]+[0-9]{7}$")]],
    parent_mobile:["",[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]{10}$")]]
  })

  get skypeid()
  {
    return this.connection_form.get('skypeid');
  }
  get linkedin()
  {
    return this.connection_form.get('linkedin');
  }
  get passport()
  {
    return this.connection_form.get('passport');
  }
  get parent_mobile()
  {
    return this.connection_form.get('parent_mobile');
  }

  public errorMessages = {
    skypeid:[],
    linkedin:[],
    passport:[
      {type:'required',message:'Passport number required'},
      {type:'pattern',message:'Enter valid Passport number'},
      {type:'maxlength',message:'8 characters only'}
    ],
    parent_mobile:[
      {type:'required',message:"Parent's number number required"},
      {type:'pattern',message:'Enter valid phone number'},
      {type:'maxlength',message:'10 digits only'}
    ]
  }

  ngOnInit() {
  }

  public submit(){
    console.log(this.connection_form.value);
  }
}
