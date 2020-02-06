import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.page.html',
  styleUrls: ['./academic.page.scss'],
})

export class AcademicPage implements OnInit {
  constructor(private formbuilder: FormBuilder) {}
  minDate: any = (new Date()).getFullYear() - 20;
  maxDate: any = (new Date()).getFullYear() ;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  get school_name() {
    return this.academicForm.get('school_name');
  }
  get school_add() {
    return this.academicForm.get('school_add');
  }
  get mark_obtain() {
    return this.academicForm.get('mark_obtain');
  }
  get max_mark() {
    return this.academicForm.get('max_mark');
  }
  get percent() {
    return this.academicForm.get('percent');
  }
  get HSC_name() {
    return this.academicForm.get('HSC_name');
  }
  get HSC_add() {
    return this.academicForm.get('HSC_add');
  }
  get HSCmark_obtain() {
    return this.academicForm.get('HSCmark_obtain');
  }
  get HSCmax_mark() {
    return this.academicForm.get('HSCmax_mark');
  }
  get HSCpercent() {
    return this.academicForm.get('HSCpercent');
  }
  get DegreeCollege_Name() {
    return this.academicForm.get('DegreeCollege_Name');
  }
  get university_name() {
    return this.academicForm.get('university_name');
  }
  get DegreeCollege_add() {
    return this.academicForm.get('DegreeCollege_add');
  }
  get Degreecollegemark_obtain() {
    return this.academicForm.get('Degreecollegemark_obtain');
  }
  get DegreeCollegemax_mark() {
    return this.academicForm.get('DegreeCollegemax_mark');
  }
  get DegreeCollegepercent() {
    return this.academicForm.get('DegreeCollegepercent');
  }
  public errormessage = {
    school_name: [
      {type : 'required' , message: 'school Name required'},
      {type : 'pattern' , message: 'school Name is not valid'},
    ],
    school_add: [
      {type : 'required' , message: 'school Address required'},
      {type : 'pattern' , message: 'school Address is not valid'},
    ],
    mark_obtain: [
      {type : 'required' , message: 'Please insert Marks'},
      {type : 'pattern' , message: 'Mark are invalid '},
    ],
    max_mark: [
      {type : 'required' , message: 'Please insert Total Marks'},
      {type : 'pattern' , message: 'Total Mark are invalid'},
    ],
    percent: [
      {type : 'required' , message: 'Please insert Percentage'},
      {type : 'pattern' , message: 'Percentage are invalid'},
    ],
    HSC_name: [
      {type : 'required' , message: 'College Name required'},
      {type : 'pattern' , message: 'College Name is not valid'},
    ],
    HSC_add: [
      {type : 'required' , message: 'College Address required'},
      {type : 'pattern' , message: 'College Address is not valid'},
    ],
    DegreeCollege_Name: [
      {type : 'required' , message: 'College Name required'},
      {type : 'pattern' , message: 'College Name is not valid'},
    ],
    DegreeCollege_add: [
      {type : 'required' , message: 'College Address required'},
      {type : 'pattern' , message: 'College Address is not valid'},
    ],
    HSCmark_obtain: [
      {type : 'required' , message: 'Please insert Marks'},
      {type : 'pattern' , message: 'Mark are invalid '},
    ],
    HSCmax_mark: [
      {type : 'required' , message: 'Please insert Total Marks'},
      {type : 'pattern' , message: 'Total Mark are invalid'},
    ],
    HSCpercent: [
      {type : 'required' , message: 'Please insert Percentage'},
      {type : 'pattern' , message: 'Percentage are invalid'},
    ],
    Degreecollegemark_obtain: [
      {type : 'required' , message: 'Please insert Marks'},
      {type : 'pattern' , message: 'Mark are invalid '},
    ],
    DegreeCollegemax_mark: [
      {type : 'required' , message: 'Please insert Total Marks'},
      {type : 'pattern' , message: 'Total Mark are invalid'},
    ],
    DegreeCollegepercent: [
      {type : 'required' , message: 'Please insert Percentage'},
      {type : 'pattern' , message: 'Percentage are invalid'},
    ],
    university_name: [
      {type : 'required' , message: 'University Name required'},
      {type : 'pattern' , message: 'University Name is not valid'},
    ],
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
    ],
    Board :[
      {brd:'ISCE'},
      {brd:'CBSE'},
      {brd:'State Board'},
      {brd:'IB'},
    ],
    Medium:[
      {mid:'English'},
      {mid:'Hindi'},
      {mid:'Marathi'},
    ],
    Course_Name:[
      {course:'cook'},
      {course:'Waiter'},
      {course:'Guide'},
      {course:'cook'},
    ]
  };
  academicForm = this.formbuilder.group(
    {
      // tslint:disable-next-line: max-line-length
      university_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      school_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      HSC_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      school_add: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      college_add: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      HSC_add: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      mark_obtain: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      max_mark: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      percent: ['', [Validators.required, Validators.pattern('[0-9]{0-2}')]],
      HSCmark_obtain: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      HSCmax_mark: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      HSCpercent: ['', [Validators.required, Validators.pattern('[0-9]{0-2}')]],
      Degreecollegemark_obtain: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      DegreeCollegemax_mark: ['', [Validators.required, Validators.pattern('[0-9]{0-3}')]],
      DegreeCollegepercent: ['', [Validators.required, Validators.pattern('[0-9]{0-2}')]],
      DegreeCollege_Name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
      DegreeCollege_add: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{2,30}')]],
    }
  );

  
  @ViewChild('slides',{static:false}) ionSlides: IonSlides;
  disablePrevBtn = true;
  disableNextBtn = false;
  disableSaveBtn = true;


  doCheck() {
    let prom1 = this.ionSlides.isBeginning();
    let prom2 = this.ionSlides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
      data[1] ? this.disableSaveBtn = false : this.disableSaveBtn = true;

    });
  }
  next(slides) {
    slides.slideNext(); // slide to next
  }
  previous(slides) {
    slides.slidePrev(); // slide to next
  }
  submit(){

  }
  ngOnInit() {
  }

}
