import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicPageRoutingModule } from './academic-routing.module';

import { AcademicPage } from './academic.page';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [AcademicPage]
})
export class AcademicPageModule {}
