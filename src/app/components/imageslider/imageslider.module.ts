import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagesliderComponent } from './imageslider.component';

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,],
  declarations: [ImagesliderComponent],
  exports: [ImagesliderComponent]
})
export class ImagesliderComponentModule {}
