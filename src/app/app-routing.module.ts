import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'book-slot',
    loadChildren: () => import('./book-slot/book-slot.module').then(m => m.BookSlotPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'enrollment',
    loadChildren: () => import('./enrollment/enrollment.module').then( m => m.EnrollmentPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./tabs/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'academic',
    loadChildren: () => import('./tabs/academic/academic.module').then( m => m.AcademicPageModule)
  },
  {
    path: 'professional',
    loadChildren: () => import('./tabs/professional/professional.module').then( m => m.ProfessionalPageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./tabs/connections/connections.module').then( m => m.ConnectionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'enrollment-list',
    loadChildren: () => import('./enrollment-list/enrollment-list.module').then( m => m.EnrollmentListPageModule)
  },  {
    path: 'enrollment-details',
    loadChildren: () => import('./enrollment-details/enrollment-details.module').then( m => m.EnrollmentDetailsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
