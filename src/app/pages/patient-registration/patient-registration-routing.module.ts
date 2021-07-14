import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientRegistrationPage } from './patient-registration.page';

const routes: Routes = [
  {
    path: '',
    component: PatientRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRegistrationPageRoutingModule {}
