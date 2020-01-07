import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBAPageRoutingModule } from './bba-routing.module';

import { BBAPage } from './bba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBAPageRoutingModule
  ],
  declarations: [BBAPage]
})
export class BBAPageModule {}
