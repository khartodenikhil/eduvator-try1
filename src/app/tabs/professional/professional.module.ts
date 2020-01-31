import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalPageRoutingModule } from './professional-routing.module';

import { ProfessionalPage } from './professional.page';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ProfessionalPage]
})
export class ProfessionalPageModule {}
