import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientRegistrationPageRoutingModule } from './patient-registration-routing.module';

import { PatientRegistrationPage } from './patient-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientRegistrationPageRoutingModule
  ],
  declarations: [PatientRegistrationPage]
})
export class PatientRegistrationPageModule {}
