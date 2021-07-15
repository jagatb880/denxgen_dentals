import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./pages/otp-verify/otp-verify.module').then( m => m.OtpVerifyPageModule)
  },
  {
    path: 'patient-registration',
    loadChildren: () => import('./pages/patient-registration/patient-registration.module').then( m => m.PatientRegistrationPageModule)
  },
  {
    path: 'patient-dashboard',
    loadChildren: () => import('./pages/patient-dashboard/patient-dashboard.module').then( m => m.PatientDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
