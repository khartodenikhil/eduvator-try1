import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentDetailsPageRoutingModule } from './enrollment-details-routing.module';

import { EnrollmentDetailsPage } from './enrollment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentDetailsPageRoutingModule
  ],
  declarations: [EnrollmentDetailsPage]
})
export class EnrollmentDetailsPageModule {}
