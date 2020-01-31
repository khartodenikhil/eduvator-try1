import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookSlotPageRoutingModule } from './book-slot-routing.module';

import { BookSlotPage } from './book-slot.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookSlotPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [BookSlotPage]
})
export class BookSlotPageModule {}
