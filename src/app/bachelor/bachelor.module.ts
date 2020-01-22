import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BachelorPageRoutingModule } from './bachelor-routing.module';

import { BachelorPage } from './bachelor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BachelorPageRoutingModule
  ],
  declarations: [BachelorPage]
})
export class BachelorPageModule {}
