import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentListPageRoutingModule } from './enrollment-list-routing.module';

import { EnrollmentListPage } from './enrollment-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentListPageRoutingModule
  ],
  declarations: [EnrollmentListPage]
})
export class EnrollmentListPageModule {}
