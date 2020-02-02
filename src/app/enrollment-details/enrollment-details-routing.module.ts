import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentDetailsPage } from './enrollment-details.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentDetailsPageRoutingModule {}
