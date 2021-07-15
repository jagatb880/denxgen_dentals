import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientDashboardPageRoutingModule } from './patient-dashboard-routing.module';

import { PatientDashboardPage } from './patient-dashboard.page';
import { ImagesliderComponentModule } from 'src/app/components/imageslider/imageslider.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagesliderComponentModule,
    PatientDashboardPageRoutingModule
  ],
  declarations: [PatientDashboardPage]
})
export class PatientDashboardPageModule {}
