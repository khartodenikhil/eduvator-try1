import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentPageRoutingModule } from './enrollment-routing.module';

import { EnrollmentPage } from './enrollment.page';
import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentPageRoutingModule,
    MaterialModule
  ],
  declarations: [EnrollmentPage]
})
export class EnrollmentPageModule {}
