import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentPage } from './enrollment.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentPage,
    children: [
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/personal/personal.module').then(m => m.PersonalPageModule)
          }
        ]
      },

      {
        path: 'academic',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/academic/academic.module').then(m => m.AcademicPageModule)
          }
        ]
      },

      {
        path: 'professional',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/professional/professional.module').then(m => m.ProfessionalPageModule)
          }
        ]
      },

      {
        path: 'connections',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/connections/connections.module').then(m => m.ConnectionsPageModule)
          }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentPageRoutingModule { }
