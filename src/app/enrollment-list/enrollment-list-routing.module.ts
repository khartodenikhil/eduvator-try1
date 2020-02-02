import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentListPage } from './enrollment-list.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentListPageRoutingModule {}
